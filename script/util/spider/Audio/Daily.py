# coding=utf-8
import os

from util.OS import OS
from util.STD import STD
from util.Util import Util
from util.spider.Audio.Audio import Audio


class Daily(Audio):
    def __init__(self, max_thread_num, debug, db_name, sid):
        super(Daily, self).__init__(max_thread_num, debug, db_name, sid, "%Y-%m-%d")
        self.db_album_id_set = set()
        self.got_album_id_set = set()

    def write_data(self, dir_name, content, file_pre=None):
        cur_dir = "data_" + self.daily_type + '_' + self.key_time + "/" + dir_name
        if Util.make_dir(cur_dir):
            if file_pre is None:
                file_pre = self.file_pre
            if file_pre != '':
                file_pre += '_'
            file_path = cur_dir + "/" + file_pre + dir_name
            content = str(content) + "\n"
            Util.append_data(file_path, content)
            return file_path

    def init(self):
        self.db_album_id_set = set()
        self.got_album_id_set = set()
        # 从db中读取要爬取的id
        self.get_album_id_set()
        # 得到今天已经爬取到了的数据 到内存里
        self.get_has_got_album()

        STD.out('got_album_id_set : ')
        STD.out(self.got_album_id_set)

    def kill_repeat(self):
        Util.kill_repeat(self.split_char, self.album_info_path, [0])
        Util.kill_repeat(self.split_char, self.album_list_path, [0, 1])
        Util.kill_repeat(self.split_char, self.artist_info_path, [0])
        Util.kill_repeat(self.split_char, self.audio_info_path, [0])
        Util.kill_repeat(self.split_char, self.audio_list_path, [1])

    def get_album_id_set(self):
        f = OS.open('data/' + self.daily_type)
        for line in f:
            line_list = line.split(self.split_char)
            self.db_album_id_set.add((int(line_list[0]), line_list[1]))  # album_id album_name

    def get_has_got_album(self):
        file_path = self.album_list_path

        if os.path.exists(file_path):
            f = OS.open(file_path)
            for line in f:
                line_list = line.split(self.split_char)
                album_id = int(line_list[1])
                if album_id not in self.got_album_id_set:
                    self.got_album_id_set.add(album_id)
            f.close()
            Util.kill_repeat(self.split_char, file_path, [1])

    def get_type_id_set(self, key):
        _dict = dict()
        file_path = 'data/' + key

        if not os.path.exists(file_path):
            open(file_path, 'w')
        else:
            with open(file_path, 'r') as f:
                for line in f:
                    if len(line) < 5:
                        continue
                    cate_list = line.split(self.split_char)
                    album_id = int(cate_list[0])
                    album_name = str(cate_list[1])
                    if album_id not in _dict:
                        _dict[album_id] = album_name
        return _dict
