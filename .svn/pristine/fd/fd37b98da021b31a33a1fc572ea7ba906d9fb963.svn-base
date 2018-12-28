import time

import datetime


class TIME:
    @staticmethod
    def now():
        return str(TIME.time())

    @staticmethod
    def time():
        return int(time.time())

    @staticmethod
    def get_time_str():
        return time.strftime("%Y-%m-%d %H:%M:%S", time.localtime())

    @staticmethod
    def get_date_str():
        return datetime.date.today()

    @staticmethod
    def get_yestoday_date_str():
        yesterday = datetime.date.today() - datetime.timedelta(days=1)
        return yesterday
