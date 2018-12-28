import os

from util.OS import OS
from util.STD import STD
from util.Util import Util
from util.mysql.Connection import Connection
from util.mysql.MysqlTable import MysqlTable
from util.spider.Audio.Audio import Audio


class Month(Audio):
    def __init__(self, max_thread_num, debug, db_name, sid):
        Audio.__init__(self, max_thread_num, debug, db_name, sid, "%Y-%m")

        self.cate_id_dict = dict()
        self.cate_name_dict = dict()
        self.album_info_set = set()
        self.album_id_set = set()
        self.artist_info_set = set()
        self.parent_id_and_child_name_set = set()

    def write_data(self, dir_name, content, file_pre=None):
        cur_dir = "data_" + self.key_time + "/" + dir_name
        if Util.make_dir(cur_dir):
            if file_pre is None:
                file_pre = self.file_pre
            if file_pre != '':
                file_pre += '_'
            file_path = cur_dir + "/" + file_pre + dir_name
            content = str(content) + "\n"
            if not os.path.exists(file_path):
                OS.open(file_path, 'w').close()
            Util.append_data(file_path, content)
            return file_path

    def make_db_category(self):
        t_category_info = MysqlTable(self.db, 'category_info')
        rows = t_category_info.find_all(['categoryId', 'categoryName', 'parentCategoryId'])
        file_path = None
        if rows:
            for row in rows:
                file_path = self.write("category", Util.tup_join(row, self.split_char))
            if file_path is not None:
                Util.kill_repeat(self.split_char, file_path)
        else:
            raise Exception('db error')
        t_category_info.close()

    def read_db_cate_to_memory(self, dirName):
        dir_path = 'data/' + dirName
        if os.path.exists(dir_path):
            file_list = next(os.walk(dir_path))[2]
            for file_name in file_list:
                file_path = dir_path + "/" + file_name
                f = OS.open(file_path, 'r')
                for line in f:
                    if len(line) < 5:
                        return
                    cate_list = line.split(self.split_char)
                    cate_id = int(cate_list[0])

                    cate_name = cate_list[1]
                    cate_parent = int(cate_list[2])

                    self.parent_id_and_child_name_set.add(str(cate_parent) + cate_name)
                    self.cate_name_dict[cate_id] = cate_name

                    if cate_parent not in self.cate_id_dict:
                        self.cate_id_dict[cate_parent] = set()
                    self.cate_id_dict[cate_parent].add(cate_id)
                f.close()
        print(self.cate_id_dict)

    def make_net_category(self):
        STD.out('请更具不同的渠道重载该方法')

    def make_all_category(self):
        self.make_db_category()
        self.read_db_cate_to_memory('category')
        self.make_net_category()
        print('cate_id_dict:')
        print(self.cate_id_dict)
        print('cate_name_dict:')
        print(self.cate_name_dict)
        self.parent_id_and_child_name_set = None

    def set_album_info(self, id_set, key):
        db = Connection("192.168.0.204", "txz", "txz1234", self.daily_update_type_dict[key])
        t_name_lib = MysqlTable(db, 'name_lib')
        rows = t_name_lib.find_all(['albumId', 'name'], {
            'sid': self.sid
        })
        if rows:
            f = OS.open('data/' + key, 'w+')
            for row in rows:
                if row[0] not in id_set:
                    id_set[int(row[0])] = None
                    album_info = row[0] + self.split_char + row[1] + '\n'
                    f.write(album_info)
            f.close()
        t_name_lib.close()
        db.close()

    def kill_repeat(self):
        self.album_info_set = Util.kill_repeat(self.split_char, self.album_info_path, [0])
        self.album_id_set = Util.kill_repeat(self.split_char, self.album_list_path, [0, 1])
        self.artist_info_set = Util.kill_repeat(self.split_char, self.artist_info_path, [0])
        Util.kill_repeat(self.split_char, self.audio_info_path, [0])
        Util.kill_repeat(self.split_char, self.audio_list_path, [1])
        Util.kill_repeat(self.split_char, self.alias_list_path, [0])
        Util.kill_repeat(self.split_char, self.singer_info_path, [1])

    def set_daily_data(self):
        # 从 db 中读取 日常要爬的数据 abumlid 只是为日更 做准备
        for key in self.daily_update_type_dict:
            album_id_set = self.get_type_id_set(key)
            self.set_album_info(album_id_set, key)

    def get_type_id_set(self, key):
        _dict = dict()
        file_path = 'data/' + key
        if not os.path.exists(file_path):
            OS.open(file_path, 'w')
        else:
            f = OS.open(file_path, 'r')
            for line in f:
                if len(line) < 5:
                    continue
                cate_list = line.split(self.split_char)
                album_id = int(cate_list[0])
                album_name = str(cate_list[1])
                if album_id not in _dict:
                    _dict[album_id] = album_name
            f.close()
        return _dict
