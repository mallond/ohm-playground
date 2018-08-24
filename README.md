# ohm-playground
Experimental Ohm Grammar, parser and compiler for DSL - with a little Redis on the side! 

**Beware** - Junkyard of stuff. As I said this is a 'Playground!'

## Using 
[Kue.js Job-Queue](https://github.com/Automattic/kue)

Examples
```
cd /kue/examples
node events
node video
```

http://localhost:3444/


## Redis
- [Node.js Integration](https://redis.io/clients#nodejs)
- [Recomended Client for Node](https://github.com/NodeRedis/node_redis)
- [Install and config Redis on Mac OS X via Homebrew](https://medium.com/@petehouston/install-and-config-redis-on-mac-os-x-via-homebrew-eb8df9a4f298)
- [Redis Cluster Tutorial](https://redis.io/topics/cluster-tutorial)

## docker-compose

>> A fully functional operational enverionment. Nothing but Cloud! 

### Enviornment

- UI: [Cloud9 IDE](http://localhost:8089)
- UI: [Redis Commander (editor)](http://localhost:8094)
- UI: [Postgress Admin (editor)](http://localhost:8093)
- UI: [Mongo Express (editor)](http://localhost:8095)
- Redis 
- Postgres
- Mongo

>> Compose up/Down
```
  cd ./docker
  docker-compose up
  docker-compose down

```

### Redis Notes and memory aids
- Using redis-4.0.11.tar.gz
- /usr/local/Cellar/redis/4.0.9: 
- Start Server: redis-server /usr/local/etc/redis.conf
- Test Redis is running: redis-cli ping 'will return PONG'


## Reading Library
[Queue Jobs with Kue](https://blog.jscrambler.com/queue-jobs-kue)


# AWS Cloud9 Notes

Available Services
```
sudo service --status-all
```

Redis
```
sudo service redis-server start
```

Postgresql
```
sudo service postgresql start
```

Mongo Install
```
sudo apt-get install -y mongodb-org

$ mkdir data
$ echo 'mongod --bind_ip=$IP --dbpath=data --nojournal --rest "$@"' > mongod
$ chmod a+x mongod

$ ./mongod

$ mongo
```