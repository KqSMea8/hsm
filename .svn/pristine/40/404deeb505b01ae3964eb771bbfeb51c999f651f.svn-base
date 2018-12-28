import sys

import os

path = os.path.dirname(os.path.abspath(sys.argv[0]).replace('\\', '/')) + '/'
os.chdir(path)
for i in range(1, len(path.split('/')) - 2):
    sys.path.append(path + '../' * i)

from src.lib.Add_css_hashDecorator import Add_css_hashDecorator
from src.lib.Add_js_hashDecorator import Add_js_hashDecorator
from src.lib.JsPack import JsPack

if __name__ == '__main__':
    file = JsPack(sys.argv[1])
    Add_css_hashDecorator(file)
    Add_js_hashDecorator(file)
    file.process()
