from src.lib.Add_babelDecorator import Add_babelDecorator
from src.lib.Add_js_hashDecorator import Add_js_hashDecorator
from src.lib.Add_tplDecorator import Add_tplDecorator
from src.lib.JsPack import JsPack
from util.lib.STD import STD


class WatchJs:
    def __init__(self, task, require):
        print(11111)
        file = JsPack(task, require)
        print(22222)
        Add_js_hashDecorator(file)
        print(33333)
        Add_tplDecorator(file)
        print(44444)
        Add_babelDecorator(file)
        print(55555)
        file.process()
