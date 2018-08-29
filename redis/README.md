
> Warning: Do not run Redis Sentinel in a Docker container. 
It can be done, as I have, but with the Docker network features 
the run can be unpredictible. Also, there are some amazing Docker builds where
other determined souls have done and succeded. But, beaware! 

> Warning: From Redis Configuration: Sentinel, Docker, or other forms of Network Address 
Translation or Port Mapping should be mixed with care: 
Docker performs port remapping, breaking Sentinel auto discovery of other Sentinel processes 
and the list of slaves for a master. Check the section about Sentinel 
and Docker later in this document for more information.


## Demo on MAC OSx redis command line testing of a Sentinel Cluster
Steps
```
Set up redis artifacts. The reason we do a move is that the Sentinel changes
the configuration file on the run.
   ~/redis Inventory
   sentinel01.src 
   sentinel02.src 
   sentinel03.src
   test_sentinel.js
Enter commands   
  $ cd ~/redis
  $ cp sentinel02.src sentinel02.conf
  $ cp sentinel01.src sentinel01.conf
  $ cp sentinel03.src sentinel03.conf


Below open seperate terminals for each

Enter commands for Redis Processes
Open Terminal Redis Master
  $ cd ~/redis
  $ redis-server ./redis --port 6379 
Open Terminal Redis Slave 1
  $ cd ~/redis
  $ redis-server ./redis --port 6380 --slaveof 127.0.0.1 6379
Open Terminal Redis Slave 2
  $ cd ~/redis
  $ redis-server ./redis --port 6381 --slaveof 127.0.0.1 6379

Enter commands for Redis Sentinel
Open Terminal Sentinel 1
  $ cd ~/redis
  $ redis-server ./redis/sentinel01.conf --sentinel
Open Terminal Sentinel 2 
  $ cd ~/redis
  $ redis-server ./redis/sentinel02.conf --sentinel
Open Terminal Sentinel 3 
  $ cd ~/redis  
  $ redis-server ./redis/sentinel03.conf --sentinel

Test
- nvm use 8
- ps -u david.mallon | grep 'redis-server'
- node ./redis/test_sentinel.js

Info
- redis-cli -p 26379  sentinel get-master-addr-by-name mymaster

```

