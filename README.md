# IMonitor
使用Python实现的一款Linux服务器监控系统。

Use Python implementation of a Linux server monitoring system.

## 目录介绍

### Agent
客户端,用来采集服务器数据,并将数据发送给服务端.

### Alarm
报警模块,通过对数据的分析处理,与Web端收集的阈值比对,实现报警功能.

### Server
服务端,收集Agent获取到的数据,并将数据进行简单处理并存入数据库中.

### Web
将数据进行图表化展示,并用Web端收集阈值.