from util.spider.Spider import Spider


class Music(Spider):
    def __init__(self, max_thread_num, db_name, sid, key_time):
        super(Music, self).__init__(max_thread_num, db_name, sid, key_time)

    def __del__(self):
        print '333333'
        super(Music, self).__del__()

    def daily_init(self):
        pass