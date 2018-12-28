# coding=utf-8
import re

import time


class Base(object):
    @staticmethod
    def get_order_by_name(name, i=0):
        if i is 0:
            reg = '第([0-9]+)期'
        elif i is 1:
            reg = '第([0-9]+)集'
        elif i is 2:
            reg = '第([0-9]+)章'
        elif i is 3:
            reg = '[^0-9]+([0-9]+)期'
        elif i is 4:
            reg = '[^0-9]+([0-9]+)集'
        elif i is 5:
            reg = '[^0-9]+([0-9]+)章'
        elif i is 6:
            reg = '([0-9]+)'
        else:
            return '0'
        i += 1
        result_list = re.findall(reg, name)
        list_len = len(result_list)
        if list_len is 0:
            return Base.get_order_by_name(name, i)
        elif list_len is 1:
            num_str = str(int(result_list[0]))

            time_array = time.localtime(int(time.time()))
            year = time.strftime("%Y", time_array)
            if num_str.startswith(year):
                return Base.get_order_by_name(name, i)
            else:
                return num_str
        else:
            def int_(x): return int(x)
            result_list = map(int_, result_list)
            result_list.sort()
            num_str = str(int(result_list.pop()))

            time_array = time.localtime(int(time.time()))
            year = time.strftime("%Y", time_array)
            if num_str.startswith(year):
                return Base.get_order_by_name(name, i)
            else:
                return num_str
