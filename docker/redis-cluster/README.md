# docker-redis4

## Super Simple Repl set of a Master and readonly Slave

Play with 'it...'

```
# Step 1
> docker-compose up

# A few test items

> docker exec -it redis-master redis-cli info | grep role
> docker exec -it redis-slave redis-cli info | grep role
> docker-compose logs redis-master
> docker-compose logs redis-slave
> docker exec -it redis-master redis-cli -c
> docker exec -it redis-slave redis-cli -c
```

## Quick and Dirty

* keys \*
* flushall
* info
* set <key> value
* set <namespace>:<key> value
* get <key>
* get <namespace>:<key>
* del <key>
* del <namespace>:<key>
* lpush <list> value
* lpush <namespace>:<list> value
* lrange <list> 0 -1
* lrange <namespace>:<list> 0 -1

```

```
