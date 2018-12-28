import os

import time

from util.OS import OS
from util.Util import Util
from util.mysql.Connection import Connection
from util.mysql.DbManager import DbManager
from util.spider.TxzSpider import TxzSpider


class Audio(TxzSpider):
    ALBUM_STATE_UN_KNOW = 0
    ALBUM_STATE_CONTINUE = 1
    ALBUM_STATE_COMPLETE = 2

    def __init__(self, max_thread_num, debug, db_name, sid, key_time):
        TxzSpider.__init__(self, max_thread_num, debug)
        self.key_time = time.strftime(key_time, time.localtime(self.start_time))

        self.db_name = db_name

        self.file_pre = ''  # 写入文件的前缀

        self.daily_update_type_dict = {
            'storybook': 'txz_audio_storybook',
            'news': 'txz_audio_news',
            'talkshow': 'txz_audio_talkshow',
        }

        self.daily_type = ''

        self.db = Connection("192.168.0.204", "txz", "txz1234", db_name)
        self.sid = sid

    @property
    def album_info_path(self):
        return 'data_' + (self.daily_type + '_' if self.daily_type else '') + self.key_time + '/album_info/album_info'

    @property
    def album_list_path(self):
        return 'data_' + (self.daily_type + '_' if self.daily_type else '') + self.key_time + '/album_list/album_list'

    @property
    def artist_info_path(self):
        return 'data_' + (self.daily_type + '_' if self.daily_type else '') + self.key_time + '/artist_info/artist_info'

    @property
    def audio_info_path(self):
        return 'data_' + (self.daily_type + '_' if self.daily_type else '') + self.key_time + '/audio_info/audio_info'

    @property
    def audio_list_path(self):
        return 'data_' + (self.daily_type + '_' if self.daily_type else '') + self.key_time + '/audio_list/audio_list'

    @property
    def end_path(self):
        return 'data_' + (self.daily_type + '_' if self.daily_type else '') + self.key_time + '/end'

    @property
    def album_info_path(self):
        return 'data_' + (self.daily_type + '_' if self.daily_type else '') + self.key_time + '/album_info/album_info'

    @property
    def alias_list_path(self):
        return 'data_' + (self.daily_type + '_' if self.daily_type else '') + self.key_time + '/alias_list/alias_list'

    @property
    def singer_info_path(self):
        return 'data_' + (self.daily_type + '_' if self.daily_type else '') + self.key_time + '/singer_info/singer_info'

    def write(self, dir_name, content, file_pre=None):
        cur_dir = "data/" + dir_name
        if Util.make_dir(cur_dir):
            if file_pre is None:
                file_pre = self.file_pre
            if file_pre != '':
                file_pre += '_'
            file_path = cur_dir + "/" + file_pre + dir_name
            content = content + "\n"
            Util.append_data(file_path, content)
            return file_path

    def end(self):
        end_dir = self.end_path.split('/')[0]
        if not os.path.exists(end_dir):
            os.makedirs(end_dir)
        OS.open(self.end_path, 'w').close()
        self.db_conn.close()

    @staticmethod
    def change_split(path, string1, string2):
        path_new = path + '_new'
        OS.open(path_new, 'w').close()
        f_new = OS.open(path_new, 'a')
        f = OS.open(path)
        for line in f:
            f_new.write(line.replace(string1, string2))
