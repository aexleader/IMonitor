# -*- coding:utf-8 -*-
from BaseClass import Base
from collections import OrderedDict
import multiprocessing
class ProcData(Base):
    '''
    该类所有值均从/proc文件夹内获取
    '''

    proc_dir = '/proc/'

    def __init__(self):
        pass

    def getCpuInfoData(self):
        '''
        获取CPU核心数量以及型号,其中核心数量可以使用len()获取
        :return:
        '''
        cpu_info = OrderedDict()
        cpu_num = 0
        cpu_info['cpu0'] = OrderedDict()
        # 获取CPU信息
        try:
            with open(self.proc_dir + 'cpuinfo') as fp:
                for line in fp:
                    if line.strip():
                        tmp = line.split(':')
                        if len(tmp) == 2:
                            cpu_info['cpu' + str(cpu_num)][tmp[0].strip()] = tmp[1].strip()
                        else:
                            cpu_info['cpu' + str(cpu_num)][tmp[0].strip()] = ''
                    else:
                        if line == '\n':
                            cpu_num += 1
                            cpu_info['cpu'+str(cpu_num)] = OrderedDict()
        except Exception as e:
            exit(e)
        # 提取CPU model_name
        model_name = []
        for numKey in cpu_info.keys():
            for infoKey in cpu_info[numKey].keys():
                if infoKey == 'model name':
                    model_name.append(cpu_info[numKey][infoKey])
        return model_name

    def getLoadAvg(self):
        '''
        获取服务器平均负载
        :return:
        '''
        try:
            with open(self.proc_dir + 'loadavg') as fp:
                load_avg = fp.read()
        except Exception as e:
            exit(e)
        return load_avg.split('\n')[0].split(' ')

    def getMemInfo(self):
        '''
        获取服务器内存使用情况
        :return:
        '''
        mem_info_tmp = []
        mem_info = OrderedDict()
        mem = OrderedDict()
        try:
            with open(self.proc_dir + 'meminfo') as fp:
                for line in fp:
                    if line.strip():
                        tmp = line.split(':')
                        if len(tmp) == 2:
                            mem[tmp[0].strip()] = tmp[1].strip()
                        else:
                            mem[tmp[0].strip()] = ''
        except Exception as e:
            exit(e)
        mem_info['MemTotal'] = mem['MemTotal']
        mem_info['MemFree'] = mem['MemFree']
        mem_info['Buffers'] = mem['Buffers']
        mem_info['Cached'] = mem['Cached']
        mem_info['﻿SwapCached'] = mem['SwapCached']
        return mem_info

    def getNetIO(self):
        '''
        获取网络IO信息
        :return:
        '''
        try:
            with open(self.proc_dir + 'net/dev') as fp:

                for line in fp:
                    if 'eth0' in line:
                        data = line.split(' ')
        except Exception as e:
            exit(e)
        # 去除列表中空元素
        while '' in data:
            data.remove('')

        # 换算成MB
        in_net = round(float(data[1])/1024/1024, 3)
        out_net = round(float(data[9])/1024/1024, 3)

        net_data = OrderedDict()
        net_data['in_net'] = in_net
        net_data['out_net'] = out_net
        return net_data

    def getVersion(self):
        '''
        获取内核版本
        :return:
        '''
        try:
            with open(self.proc_dir + 'version') as fp:
                version = fp.read()
        except Exception as e:
            exit(e)

        return version

    def getUptime(self):
        '''
        获取系统运行时间及空闲时间
        :return:
        '''
        date = ['小时', '天']
        try:
            with open(self.proc_dir + 'uptime') as fp:
                uptime = fp.read()
        except Exception as e:
            exit(e)

        run_time = uptime.split(' ')[0].strip()
        free_time = uptime.split(' ')[1].strip()

        if float(run_time) / 3600 / 24 > 0.5:
            run_time = str(round(float(run_time) / 3600 / 24, 2)) + '天'
        else:
            run_time = str(round(float(run_time) / 3600, 2)) + '小时'

        if float(free_time) / 3600 / 24 > 0.5:
            free_time = str(round(float(free_time) / 3600 / 24, 2)) + '天'
        else:
            free_time = str(round(float(free_time) / 3600, 2)) + '小时'

        uptime = OrderedDict()
        uptime['run'] = run_time
        uptime['free'] = free_time
        return uptime

    def getStat(self):
        '''
        获取CPU利用率,该方法需要两次采样,并计算利用率
        idle为列表中第四个元素
        公式:usage=(idle2-idle1)/(cpu2-cpu1)*100
        :return:
        '''
        try:
            with open(self.proc_dir + 'stat') as fp:
                data = fp.read().split('\n')
        except Exception as e:
            exit(e)

        cpuNum = 0
        cpuData = OrderedDict()
        for line in data:
            if 'cpu' in line:
                tmp = line.split(' ')
                # print tmp
                while '' in tmp:
                    tmp.remove('')
                cpuData[tmp[0]] = tmp[1:]
        cpuTotalTime = {}
        for key in cpuData.keys():
            total = 0
            for num in cpuData[key]:
                total += int(num)
            cpuTotalTime[key] = total
        print cpuTotalTime