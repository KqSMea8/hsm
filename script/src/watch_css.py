import sys

import os

path = os.path.dirname(os.path.abspath(sys.argv[0]).replace('\\', '/')) + '/'
os.chdir(path)
for i in range(1, len(path.split('/')) - 2):
    sys.path.append(path + '../' * i)

from src.lib.NormalPack import NormalPack

if __name__ == '__main__':
    normalPack = NormalPack(sys.argv[1])
    normalPack.process()
