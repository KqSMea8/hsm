import re

from util.OS import OS


class Add_tplDecorator:
    def __init__(self, pack):
        for i, line in enumerate(pack.lines):
            pattern = 'require\([\'|\"](.*?)[\'|\"]\)'
            res = re.search(pattern, line)
            if res is None:
                continue

            tpl_path = pack.watch_file_dir + res.group(1)
            try:
                tpl_fp = OS.open(tpl_path)
                content = tpl_fp.read(9999999)
                tpl_fp.close()
                line = re.sub('require\([\'|\"](.*?)[\'|\"]\)', '`' + content + '`', line)
            except Exception as e:
                print(e)
            pack.lines[i] = line
