import shelve

import os

from src.lib.NormalPack import NormalPack
from util.OS import OS


class JsPack(NormalPack):
    def __init__(self, watch_file):
        print("dfdfasdfadfadfdddddddddddddddddddd")
        super().__init__(watch_file)
        files = []
        for root, dirs, files in os.walk('../'):
            break
        print(files)
        file_name = ''
        for file in files:
            if file.startswith("require_js"):
                file_name = file
                break
        print("dfdfasdfadfadfdddddddddddddddddddd")
        print(file_name)
        self.file = shelve.open("../" + file_name)
        self.require_js = set()

    def process(self):
        self.file[os.path.abspath(self.watch_file)] = self.require_js
        for parent in self.file:
            if os.path.abspath(self.watch_file) in self.file[parent]:
                parent = parent.replace('\\dist', '')

                f = OS.open(parent)
                content = f.read(99999)
                if content[-1:] == '\n':
                    content = content[:-1]
                else:
                    content += '\n'
                f.close()

                f = OS.open(parent, 'w')
                f.write(content)
                f.close()
        self.file.close()
        super().process()
