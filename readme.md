# IMonitor
使用Python实现的一款Linux服务器监控系统。
Use Python implementation of a Linux server monitoring system

## 目录介绍

### Agent
该目录为客户端,用来获取服务器监控项的数据,并发送到Server端.

### Alarm
该目录为报警模块,用来对数据进行分析处理,对比报警阈值,实现邮件报警,短信报警,微信报警等.

### Server
该目录为服务端,用来接收客户端所获取到的数据,并简单处理存入数据库中.

### Web
该目录用来实现Web展示,并收集报警阈值的设置等功能.
