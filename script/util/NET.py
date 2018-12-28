import json

import requests

from util.Util import Util


class NET:
    def get(self):
        pass

    def post(self):
        pass

    @staticmethod
    def browser_get(url, referer=None, req_timeout=30):
        try:
            req_header = {
                'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) '
                              'Chrome/58.0.3029.110 Safari/537.36',
                'Accept': 'text/html;q=0.9,*/*;q=0.8',
                'Accept-Charset': 'ISO-8859-1,utf-8;q=0.7,*;q=0.3',
                'Accept-Encoding': 'gzip',
                'Accept-Language': 'zh-CN,zh;q=0.8',
                'X-Forwarded-For': Util.get_random_ip(),
                'Connection': 'close',
                'Cache-Control': 'no-cache',
                'Referer': referer
            }
            req = requests.get(url, headers=req_header)
            if req.encoding == 'ISO-8859-1':
                encodings = requests.utils.get_encodings_from_content(req.text)
                if encodings:
                    encoding = encodings[0]
                else:
                    encoding = req.apparent_encoding
            else:
                encoding = req.apparent_encoding
            encode_content = req.content.decode(encoding, 'replace').encode('utf-8', 'replace')
            return encode_content
        except Exception as e:
            return ''

    @staticmethod
    def continue_browser_get(url, count, keyword=False, referer=None):
        for i in range(count):
            res_str = NET.browser_get(url, referer)
            if not res_str:
                continue
            if not keyword:
                dictionary = res_str
                # try:
                #     dictionary = Util.gzdecode(res_str)
                # except Exception as e:
                #     dictionary = res_str
            else:
                # try:
                #     res_str = Util.check_gzip(res_str, keyword)
                # except Exception as e:
                #     res_str = res_str
                try:
                    data = json.loads(res_str.replace('\r', '').replace('\n', ''), strict=False)
                    dictionary = Util.get_key(keyword, data)
                except Exception as e:
                    dictionary = False
            if not dictionary:
                continue
            else:
                return dictionary
        return False
