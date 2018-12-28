import threading

import gevent
import time

from gevent import thread

from util.STD import STD
from util.Util import Util


class Spider:
    def __init__(self, max_thread_num, debug):
        self.start_time = Util.time()
        print('开始执行时间：' + str(self.start_time))

        self.task = []
        self.thread_task = {}
        self.max_task_num = max_thread_num

        self.thread_fail_set = set()
        self.thread_running_set = set()
        self.thread_complete_set = set()
        self.max_thread_num = max_thread_num

        self.mutex = threading.Lock()

        self.debug = debug

    def add_task(self, spawn):
        self.task.append(spawn)
        if len(self.task) >= self.max_task_num:
            STD.out('run run run run run run run run run run run ')
            gevent.joinall(self.task)
            self.task = []

    def thread_wait_for_can_start(self):
        #  开始线程之前检查线程的个数
        while 1:
            now_running = len(self.thread_task)
            # STD.out('now running :' + str(now_running))
            # print self.thread_running_set
            if now_running <= self.max_thread_num:
                break
            else:
                time.sleep(0.5)

    def start_thread_id(self, thread_id):
        if self.debug:
            print("start thread thread_id:" + str(thread_id))
        thread_id = int(thread_id)
        self.thread_running_set.add(thread_id)
        if thread_id in self.thread_fail_set:
            self.thread_fail_set.remove(thread_id)
        if thread_id in self.thread_complete_set:
            self.thread_complete_set.remove(thread_id)

    def stop_thread_id(self, thread_id):
        if self.debug:
            print(">>>>>>>>>>>>>>>>>>>>stop thread thread_id:" + str(thread_id))
        thread_id = int(thread_id)
        self.thread_fail_set.add(thread_id)
        if thread_id in self.thread_complete_set:
            self.thread_complete_set.remove(thread_id)
        if thread_id in self.thread_running_set:
            self.thread_running_set.remove(thread_id)

    def complete_thread_id(self, thread_id):
        if self.debug:
            print("complete thread thread_id:" + str(thread_id))
        thread_id = int(thread_id)
        self.thread_complete_set.add(thread_id)
        if thread_id in self.thread_fail_set:
            self.thread_fail_set.remove(thread_id)
        if thread_id in self.thread_running_set:
            self.thread_running_set.remove(thread_id)

    def handle_fail_thread(self):
        for key in self.thread_fail_set:
            self.complete_thread_id(key)

    def wait_task(self):
        if len(self.task) > 0:
            STD.out('run run run run run run run run run run run ')
            gevent.joinall(self.task)
            self.task = []
        else:
            while 1:
                if len(self.thread_task) > 0:
                    time.sleep(1)
                    continue
        for k in Util.file_dict:
            Util.file_dict[k].close()
        print('全部执行时间：' + str(Util.time() - self.start_time))
        print('444444')

    def start_new_thread(self, key, func, tup):
        if self.max_thread_num <= 0:
            func(*tup)
        else:
            try:
                self.thread_wait_for_can_start()
                self.start_thread_id(key)
                thread.start_new_thread(func, tup)
                self.complete_thread_id(key)
            except Exception as error:
                print(error)
                self.stop_thread_id(key)
