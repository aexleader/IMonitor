# -*- coding:utf-8 -*-
import threading, time

# 需要调用的方法
func = []

def hello():
    for i in range(0, 1000):
        time.sleep(1)
        print 'hello' + str(i)

def world():
    for i in range(0, 1000):
        time.sleep(1)
        print 'World' + str(i)

threading.Thread(target=hello, args=(), name='thread-hello').start()
threading.Thread(target=world, args=(), name='thread-world').start()
