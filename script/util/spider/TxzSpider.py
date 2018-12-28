from util.spider.Spider import Spider


class TxzSpider(Spider):
    def __init__(self, max_thread_num, debug):
        Spider.__init__(self, max_thread_num, debug)
        self.split_char = '$^'
