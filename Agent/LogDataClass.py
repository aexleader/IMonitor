# -*- coding:utf-8 -*-
from BaseClass import Base
import linecache
class LogData(Base):
    '''
    日志监控基础类
    '''

    log_dir = ''

    def __init__(self, log_dir):
        if not log_dir:
             self.log_dir = ''
        self.log_dir = log_dir

    def getLogLine(self):
        '''
        获取日志文件行数
        :return:
        '''
        count = 0
        try:
            count = len(linecache.getlines(self.log_dir))
        except Exception as e:
            exit(e)
        return count

    def isSetAppointStr(self, str):
        '''
        获取指定字符是否存在
        :return:
        '''
        data = ''
        try:
            with open(self.log_dir) as fp:
                data = fp.read()
        except Exception as e:
            exit(e)

        if str in data:
            return True
        else:
            return False