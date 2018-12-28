import sys

import os

path = os.path.dirname(os.path.abspath(sys.argv[0]).replace('\\', '/')) + '/'
os.chdir(path)
for i in range(1, len(path.split('/')) - 2):
    sys.path.append(path + '../' * i)

from src.lib.Add_babelDecorator import Add_babelDecorator
from src.lib.Add_tplDecorator import Add_tplDecorator
from src.lib.Add_js_hashDecorator import Add_js_hashDecorator
from src.lib.JsPack import JsPack

if __name__ == '__main__':
    file = JsPack(sys.argv[1])
    Add_js_hashDecorator(file)
    Add_tplDecorator(file)
    Add_babelDecorator(file)
    file.process()



