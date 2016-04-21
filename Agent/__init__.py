# -*- coding:utf-8 -*-
from ProcDataClass import ProcData
from LogDataClass import LogData
if __name__ == '__main__':
    proc_data = ProcData()
    log_data = LogData('/var/log/apache2/access.log')
    print log_data.getLogLine()
    print log_data.isSetAppointStr('Firefox')