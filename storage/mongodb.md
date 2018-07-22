# mongo
* [docs](https://api.mongodb.org/)
* [MongoDB Administration 101](http://www.slideshare.net/mongodb/mongodb-administration-101)
* [Node API](http://mongodb.github.io/node-mongodb-native/2.0/api/index.html)

create db
```
$ use mydb
$ show dbs
```

create collection
```
$ db.createCollection("mycol")
$ show collections
```

create index
```
db.records.createIndex( { userid: 1 } )
```

pretty result
```
db.collection.find().pretty()
```

enable pretty by default, $HOME/.mongorc.js
```
DBQuery.prototype._prettyShell = true
```

document size
```
Object.bsonsize(db.test.findOne({test:"auto"}))
```

# tool
- mongo – It is mongo's interactive shell which lets DBA's view, insert, remove and update data in their databases, as well as get replication information, set up sharding, shut down servers, execute JavaScript, and more.
- mongostat – It’s a command-line tool that displays a summary list of status statistics for a currently running MongoDB instance.
- mongotop – It’s a command-line tool providing a method to track the amount of time a MongoDB instance spends reading and writing data.
- mongoimport, mongoexport – It’s a command-line utilities for creating a binary export of the contents of a Mongo database.
* mongo-express https://github.com/andzdroid/mongo-express  admin
* mongotron https://github.com/officert/mongotron electron ap
* robomongo

# read
- https://blog.rainforestqa.com/2012-11-05-mongodb-gotchas-and-how-to-avoid-them/

# install
- http://docs.mongodb.org/manual/tutorial/install-mongodb-on-ubuntu/
- disable start of service, vi /etc/default/mongod
```
ENABLE_MONGOD="no"
```

# docker
tmp server
```bash
docker run -v /etc/localtime:/etc/localtime:ro -v /etc/timezone:/etc/timezone:ro --rm -p 27017:27017 mongo
docker run --name tmpmongo --rm -p 27017:27017 mongo
```

volume
```
docker run -v /etc/localtime:/etc/localtime:ro -v /etc/timezone:/etc/timezone:ro --name mongodb -v /my/own/datadir:/data/db -d -p 27017:27017 mongo
```

client
```bash
docker run -it --link tmpmongo:mongo --rm mongo sh -c 'exec mongo "$MONGO_PORT_27017_TCP_ADDR:$MONGO_PORT_27017_TCP_PORT"'
```

env
```
"$MONGO_PORT_27017_TCP_ADDR:$MONGO_PORT_27017_TCP_PORT"'
```

# Casbah

## api
http://mongodb.github.io/casbah/api/#com.mongodb.casbah.package

## import
```scala
import com.mongodb.casbah.Imports._
import com.mongodb.casbah.gridfs.Imports._
```

## Connection
```scala
val uri = MongoClientURI("mongodb://localhost:27017,localhost:27018,localhost:27019/")
val mongoClient = MongoClient(uri)
```
simple
```scala
val mongoClient =  MongoClient("mongodb02", 42017)
val db = mongoClient("databaseName")
val collection = db("collectionName")
```

## bulk
```scala
val builder = collection.initializeOrderedBulkOperation
builder.insert(MongoDBObject("_id" -> 1))
builder.insert(MongoDBObject("_id" -> 2))
builder.insert(MongoDBObject("_id" -> 3))

builder.find(MongoDBObject("_id" -> 1)).updateOne($set("x" -> 2))
builder.find(MongoDBObject("_id" -> 2)).removeOne()
builder.find(MongoDBObject("_id" -> 3)).replaceOne(MongoDBObject("_id" -> 3, "x" -> 4))

val result = builder.execute()
```

## GridFS
```
db.fs.files.find({"metadata.some_info" : "sample"});
```

# rocksdb
- http://blog.parse.com/announcements/mongodb-rocksdb-parse/
- https://github.com/mongodb-partners/mongo-rocks
- https://github.com/mongodb-partners/mongo


# Problems
* http://cryto.net/~joepie91/blog/2015/07/19/why-you-should-never-ever-ever-use-mongodb/
  * http://www.infoq.com/cn/news/2015/07/never-ever-mongodb
