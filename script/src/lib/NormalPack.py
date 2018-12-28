import paramiko
import os

from util.OS import OS


class NormalPack:
    def __init__(self, watch_file):
        self.watch_file = watch_file
        self.watch_file_dir = os.path.dirname(self.watch_file) + '/'
        if not OS.is_file(self.watch_file):  # 删除操作
            exit()

        f = OS.open(self.watch_file)
        self.lines = f.readlines(99999)
        f.close()
        self.host = '118.89.56.147'  # 主机
        self.port = 22  # 端口
        self.username = 'root'  # 用户名
        self.password = 'Roger123'  # 密码

    def upload(self):
        sf = paramiko.Transport(self.host, self.port)
        sf.connect(username=self.username, password=self.password)
        sftp = paramiko.SFTPClient.from_transport(sf)
        try:
            if os.path.isdir(self.watch_file):  # 判断本地参数是目录还是文件
                for f in os.listdir(self.watch_file):  # 遍历本地目录
                    sftp.put(os.path.join(self.watch_file + f), os.path.join(self.watch_file + f))  # 上传目录中的文件
            else:
                sftp.put(self.watch_file, '/var/www/wx/hsm' + self.watch_file.split('hsm')[1])  # 上传文件
        except Exception as e:
            print('upload exception:', e)
        sf.close()

    def process(self):
        f = OS.open(self.watch_file, 'w')
        f.write(''.join(self.lines))
        f.close()
        self.upload()
