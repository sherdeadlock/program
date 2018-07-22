#!/usr/bin/env bash


# seed https://gist.github.com/clintongormley/8579281

curl -i http://192.168.59.103:9200
curl -i http://192.168.59.103:9200/_count

curl -XPUT http://192.168.59.103:9200/megacorp/employee/1 -d '
{
    "first_name" : "John",
    "last_name" :  "Smith",
    "age" :        25,
    "about" :      "I love to go rock climbing",
    "interests": [ "sports", "music" ],
    "xxx": [
        {"f1": 1, "f2": 2},
        {"f1": 3, "f2": 4}
    ]

}'

curl -XPUT http://192.168.59.103:9200/megacorp/employee/2 -d '
{
    "first_name" : "John",
    "last_name" :  "Smith",
    "age" :        25,
    "about" :      "I love to go rock climbing",
    "interests": [ "sports", "music" ],
    "xxx": [
        {"f1": 11, "f2": 12},
        {"f1": 13, "f2": 14}
    ]

}'

curl -XPUT http://192.168.59.103:9200/megacorp/employee/4 -d '
{
    "first_name" : "John",
    "last_name" :  "Smith",
    "age" :        25,
    "about" :      "I love to go rock climbing",
    "interests": [ "sports", "music" ]
}'

#-----------------------------------------------------------------------


curl -XPUT http://192.168.59.103:9200/megacorp/employee/1 -d '
{
    "first_name" : "John",
    "last_name" :  "Smith",
    "age" :        25,
    "about" :      "I love to go rock climbing",
    "interests": [ "sports", "music" ]
}'

curl -XPUT http://192.168.59.103:9200/megacorp/employee/2 -d'
{
    "first_name" :  "Jane",
    "last_name" :   "Smith",
    "age" :         32,
    "about" :       "I like to collect rock albums",
    "interests":  [ "music" ]
}'

curl -XPUT http://192.168.59.103:9200/megacorp/employee/3 -d'
{
    "first_name" :  "Douglas",
    "last_name" :   "Fir",
    "age" :         35,
    "about":        "I like to build cabinets",
    "interests":  [ "forestry" ]
}'


# create
curl -XPOST http://192.168.59.103:9200/megacorp/employee -d'
{
    "first_name" :  "Douglas",
    "last_name" :   "Fir",
    "age" :         99,
    "about":        "I like to build cabinets",
    "interests":  [ "movie" ]
}'

# specify id, throw exception while id is duplicate
curl -XPUT http://192.168.59.103:9200/megacorp/employee/1/_create -d '
{
    "first_name" : "John",
    "last_name" :  "Smith",
    "age" :        25,
    "about" :      "I love to go rock climbing",
    "interests": [ "sports", "music" ]
}'

# update
curl -XPOST http://192.168.59.103:9200/megacorp/employee/1/_update -d'
{
    "doc": {
        "age" : 99
    }
}'

# upsert
curl -XPOST http://192.168.59.103:9200/megacorp/employee/1/_update -d'
{
    "doc": {
        "age2" : 98
    },
    "upsert": {
        "age2": 22
    }
}'
# age2=98


curl http://192.168.59.103:9200/megacorp/employee/1
curl http://192.168.59.103:9200/megacorp/employee/1?pretty
curl http://192.168.59.103:9200/megacorp/employee/1/_source
curl http://192.168.59.103:9200/megacorp/employee/1?_source=last_name,age


curl -i -XHEAD http://192.168.59.103:9200/megacorp/employee/1

curl -XDELETE http://192.168.59.103:9200/megacorp/employee/1

curl http://192.168.59.103:9200/megacorp/employee/_search
curl http://192.168.59.103:9200/megacorp/employee/_search?q=last_name:Smith

curl http://192.168.59.103:9200/megacorp/employee/_search -d '{
    "query" : {
        "match" : {
            "last_name" : "Smith"
        }
    }
}'

curl http://192.168.59.103:9200/megacorp/employee/_search -d '{
    "query" : {
        "filtered" : {
            "filter" : {
                "range" : {
                    "age" : { "gt" : 30 }
                }
            },
            "query" : {
                "match" : {
                    "last_name" : "smith"
                }
            }
        }
    }
}'

curl http://192.168.59.103:9200/megacorp/employee/_search -d '{
    "query" : {
        "match_phrase" : {
            "about" : "rock climbing"
        }
    }
}'


curl http://192.168.59.103:9200/megacorp/employee/_search -d '{
    "query" : {
        "match_phrase" : {
            "about" : "rock climbing"
        }
    },
    "highlight": {
        "fields" : {
            "about" : {}
        }
    }
}'


curl http://192.168.59.103:9200/megacorp/employee/_search -d '{
    "aggs": {
        "all_interests": {
            "terms": { "field": "interests" }
        }
    }
}'

curl http://192.168.59.103:9200/megacorp/employee/_search -d '{
    "query": {
        "match": {
            "last_name": "smith"
        }
    },
    "aggs": {
        "all_interests": {
            "terms": { "field": "interests" }
        }
    }
}'

curl http://192.168.59.103:9200/megacorp/employee/_search -d '{
    "aggs": {
        "all_interests": {
            "terms": { "field": "interests" },
            "aggs" : {
                "avg_age" : {
                    "avg" : { "field" : "age" }
                }
            }
            
        }
    }
}'



curl http://192.168.59.103:9200/megacorp/employee/_search?size=5
curl http://192.168.59.103:9200/megacorp/employee/_search?size=5&from=5
