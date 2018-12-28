import re

import os

from util.OS import OS


class Add_js_hashDecorator:
    def __init__(self, pack):
        for i, line in enumerate(pack.lines):
            pattern = '[\'|\"](.*\.js)[\'|\"]'
            res = re.findall(pattern, line)
            if len(res) <= 0:
                continue

            s = res[0]

            if s.startswith('http'):
                continue

            for a in range(30):
                js_path = pack.watch_file_dir + '../' * a + s
                if OS.is_file(js_path):
                    break

            ctime = str(os.path.getmtime(js_path))
            pack.require_js.add(os.path.abspath(js_path))
            pack.lines[i] = re.sub('[\'|\"].*\.js[\'|\"]', '"' + s + '?v=' + ctime + '"', line)
