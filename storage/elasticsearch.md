# es core
* http://www.mednoter.com/all-about-analyzer-part-one.html
* https://github.com/elastic/elasticsearch-definitive-guide/
  * https://github.com/looly/elasticsearch-definitive-guide-cn
* https://www.elastic.co/guide/en/elasticsearch/reference/current/search-suggesters-completion.html

https://github.com/kzwang/elasticsearch-image

# elk

* http://www.evanlin.com/using-logstash-elsticsearch-and-kibana/
* http://blog.91app.com/use-elk-to-process-system-log/


# client
* [java](https://www.elastic.co/guide/en/elasticsearch/client/java-api/current/index.html)
* https://github.com/elastic/elasticsearch-py
* https://github.com/elastic/elasticsearch-dsl-py
* https://github.com/elastic/elasticsearch-js


data
tokenizer
token stream
filter

analyzer can be used for different field


Apache Lucene uses the TF/IDF (term frequency / inverse document frequency) scoring mechanism
http://lucene.apache.org/core/4_6_0/core/org/apache/lucene/search/similarities/TFIDFSimilarity.html


indexing
search
aggregations


suggestions
geolocation
percolation
fuzzy
partial matching


distributed nature
- Life Inside a Cluster
- Distributed Document Store
- Distributed Search Execution
- Inside a Shard


* `_index`  is a collection of document, 類似 mongodb collection
  * Every index is built of one or more shards, and each shard can have many replicas.
* `_type`  sub-partitions, 不同schema給不同type
  * name
  * mapping  定義 field type, 將 document 轉成 lucene 格式
  * lucene 並沒有 type, mapping
  * all types in an index share same mapping, 即時在不同type也不能重複定義mapping
  * 同一個index的types, schema 要相近, sparse 會有 performance issue
* `_id`  uniquely identifies a document, provide your own `_id` or let Elasticsearch generate one for you
* `_version`  
  * Every time a change is made to a document (including deleting it), the `_version` number is incremented.
  * ensure that one part of your application doesn’t overwrite changes made by another part
  * 20 character long, URL-safe, Base64-encoded GUID strings
  * FlakeID scheme
  * Optimistic Concurrency Control
* `_source`  contains the original JSON document
* `_uid`  The `_type` and `_id` concatenated together as type#id


# action

* __create__
  Create a document only if the document does not already exist. See Creating a New Document.
* __index__
  Create a new document or replace an existing document. See Indexing a Document and Updating a Whole Document.
* __update__
  Do a partial update on a document. See Partial Updates to Documents.
* __delete__
  Delete a document. See Deleting a Document.


# Optimistic Concurrency Control, 指定版本, application 自行處理 conflict
* 409 Conflict
* `update` or `delete` accept a version parameter

```
PUT /website/blog/1?version=1
DELETE /website/blog/123?version=1
```

query
* structured query  on concrete fields by *exact values*, 類似 SQL
* full-text query  finds all documents
* A combination of the two


Search
* `search lite`  a query-string search
* `search`  Full-Body Search, json body
  * highlighted snippets
  * aggregate analytics across all results
  * suggestions


Search in Depth:
* Mapping
  How the data in each field is interpreted, 選擇 analyzer
* Analysis
  How full text is processed to make it searchable
* Query DSL
  The flexible, powerful query language used by Elasticsearch

# analyzer

1. analyzes the text
  * tokenization
  * normalization
2. build an *inverted index*

* Character filters, `char_filter`
  * tidy up the string
  * strip out HTML
  * convert `&` to `and`
* Tokenizer, `tokenizer`
  * tokenized into individual terms
  * An analyzer must have a single tokenizer
* Token filters, `filter`
  * change terms
    * lowercasing
    * stopwords (`a`, `and`, `the`)
  * add/remove terms
    * synonyms

built-in analyzers
* `standard` analyze
  * splits the text by [Unicode Consortium](http://www.unicode.org/reports/tr29/)
  * removes most punctuation
  * lowercases all terms
* `simple` analyzer
  * splits the text on anything that isn’t a letter
  * lowercases all terms
* `whitespace` analyzer
  * splits the text on whitespace
* Language analyzers
  * `english`
    * remove English stopwords
    * stem English words


When search
* full-text field
  the query will apply the same analyzer to the query string
* exact-value field
  search for the exact value that you have specified

# Support types:
* String: `string`
* Whole number: `byte`, `short`, `integer`, `long`
* Floating-point: `float`, `double`
* Boolean: `boolean`
* Date: `date`
* Multivalue Fields, `Array`
  * all the values of an array must be of the same datatype
  * the first value in the array determine the datatype
  * index is unordered, 不能照順序算 score
* Empty Fields, would not be indexed
  * `null`, `[]`, `[null]`
* Multilevel Objects, `object`
  * Root object
    * 比 `Inner object` 多一些 metadata, `_source`, `_all`
  * Inner object
    * `lucene` 不支援 `inner object`, 所以展開 `"user.name.full": [john, smith]`
* Arrays of Inner Objects
  ```
  {
    "followers": [
      { "age": 35, "name": "Mary White"},
      { "age": 26, "name": "Alex Jones"},
      { "age": 19, "name": "Lisa Smith"}
    ]
  }

  {
    "followers.age": [19, 26, 35],
    "followers.name": [alex, jones, lisa, smith, mary, white]
  }
  ```


string field:
* `index`
  * `analyzed`  index this field as full text
  * `not_analyzed`  index the value exactly as specified
  * `no`  Don’t index this field
* `analyzer`
  * specify an analyzer, `standard` by default
```
{
  "tag": {
    "type": "string",
    "index": "not_analyzed",
    "analyzer": "english"
  }
}
```

# Update the Mapping
* can add a new field
* can’t change existing field mappings

# query clause
* `Leaf clauses`  compare a field, `match`
* `Compound clauses`  combine other query clauses, ex:
  `bool` combines `must`, `must_not`, `should`, `filter`

```
{
  QUERY_NAME: {
    ARGUMENT: VALUE,
    ARGUMENT: VALUE,
    ...
    FIELD_NAME: {
      ARGUMENT: VALUE,
      ...
    }
  }
}
```

* `query context`  score
* `filtering context`  yes or no
filter減少需要scoring的document, 可以加快速度

* `match_all`  matches all documents
  ```
  { "match_all": {}}
  ```
* `match`  match field
  ```
  { "match": { "tweet": "About Search" }}
  ```
* `multi_match`  match multiple fields
  ```
  {
    "multi_match": {
      "query":    "full text search",
      "fields":   [ "title", "body" ]
    }
  }
  ```
* `range`  find numbers or dates, `gt`, `gte`, `lt`, `lte`
  ```
  {
    "range": {
      "age": {
        "gte":  20,
        "lt":   30
      }
    }
  }
  ```
* `term`  search by exact value
  ```
  {"term": { "age": 26}}
  ```
* `terms`  search by exact multiple values
  ```
  { "terms": { "tag": [ "search", "full_text", "nosql" ] }}
  ```
* `exists`  field has one or more values
  ```
  {
    "exists":   {
      "field":    "title"
    }
  }
  ```
* `missing`  field doesn’t have any values


# Combining queries
* `must`
  Clauses that must match for the document to be included.
* `must_not`
  Clauses that must not match for the document to be included.
* `should`
  If these clauses match, they increase the `_score`; otherwise, they have no effect.
  They are simply used to refine the relevance score for each document.
* `filter`  類似 SQL `where`
  Clauses that must match, but are run in non-scoring, filtering mode.
  These clauses do not contribute to the score,
  instead they simply include/exclude documents based on their criteria.
* `constant_score`  execute a filter and nothing else, all documents have score of 1
  ```
  {
    "constant_score":   {
      "filter": {
        "term": { "category": "ebooks" }
      }
    }
  }
  ```


# `doc`
* column-store  在 inverted index 存欄位資料
* created at index-time
* Sorting on a field
* Aggregations on a field
* Certain filters (for example, geolocation filters)
* Scripts that refer to fields


# Index Aliases
* point to one or more indices
* Switch transparently between one index and another on a running cluster
* Group multiple indices (for example, last_three_months)
* Create “views” on a subset of the documents in an index


# API
http://localhost:9200/_index/_type/_id

### status
```
curl 'http://localhost:9200
```

### shutdown es node
```
curl -XPOST 'http://localhost:9200/_shutdown'
```


# docker
```
$ docker run --rm -p 9200:9200 elasticsearch -Des.node.name="TestNode"
```

# 中文
更改 cjk Analyzer
* https://www.elastic.co/guide/en/elasticsearch/reference/current/analysis-lang-analyzer.html
* https://github.com/medcl/elasticsearch-rtf

## ik
https://github.com/medcl/elasticsearch-analysis-ik

## ansj
https://github.com/NLPchina/ansj_seg
https://github.com/4onni/elasticsearch-analysis-ansj

## mmseg
https://github.com/medcl/elasticsearch-analysis-mmseg


```
import static dwarf.Dwarf.puts;
import static org.elasticsearch.common.xcontent.XContentFactory.jsonBuilder;

import java.io.IOException;
import java.util.Arrays;
import java.util.List;

import ans.AnsType;
import api.db.TopicField;
import org.elasticsearch.action.admin.indices.delete.DeleteIndexRequest;
import org.elasticsearch.action.admin.indices.delete.DeleteIndexResponse;
import org.elasticsearch.action.bulk.BulkRequestBuilder;
import org.elasticsearch.action.deletebyquery.DeleteByQueryResponse;
import org.elasticsearch.action.index.IndexRequestBuilder;
import org.elasticsearch.action.index.IndexResponse;
import org.elasticsearch.client.transport.TransportClient;
import org.elasticsearch.common.settings.ImmutableSettings;
import org.elasticsearch.common.settings.Settings;
import org.elasticsearch.common.transport.InetSocketTransportAddress;
import org.elasticsearch.common.xcontent.XContentBuilder;
import org.elasticsearch.index.query.QueryBuilders;

import com.google.common.net.HostAndPort;
import org.jooq.Field;
import org.jooq.Record;

public class ES {

	static String sm_mongoIndex = "_river";
	static String sm_mongoId_meta = "_meta";
	static String sm_mongoId_riverStatus = "_riverstatus";
	static String sm_mongoId_status = "_status";
	TransportClient m_client;

	public ES(String clusterName, String host, int port) {
		Settings settings = ImmutableSettings.settingsBuilder()
		        .put("cluster.name", clusterName).build();
		m_client = new TransportClient(settings).addTransportAddress(
				new InetSocketTransportAddress(host, port));
	}

    public IndexRequestBuilder put(AnsType type, List<? extends Record> rows) {
        try {
            XContentBuilder b = jsonBuilder();
            //b.prettyPrint();
            b.startObject()
                .startObject(TopicField.AnsType.getVar())
                    .field(TopicField.Title.getVar(), type.getVar())
                .endObject()
                .startArray(TopicField.AnsDoc.getVar());
                    for (Record r : rows) {
                        b.startObject();
                        for (Field<?> field : r.fields()) {
                            Object value = r.getValue(field);
                            b.field(field.getName(), value);
                        }
                        b.endObject();
                    }
                b.endArray()
            .endObject();

            return m_client.prepareIndex("ansdoc", type.getVar()).setSource(b);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    public BulkRequestBuilder bulkPut(AnsType ansType, List<? extends List<? extends Record>> rows) {
        BulkRequestBuilder bulk = m_client.prepareBulk();
        rows.stream().map(x -> put(ansType, x)).forEach(bulk::add);
        return bulk;
    }

	// ------------------------------------------------------------------------------------
	public void addMongoRiver(String sIndex, String sTypes, List<HostAndPort> servers) {
		try {
			XContentBuilder builder = jsonBuilder().prettyPrint()
					.startObject()
						.field("type", "mongodb")
						.startObject("mongodb")
							.startArray("servers");
			for (HostAndPort server: servers) {
								builder.startObject()
									.field("host", server.getHostText()).field("port", server.getPort())
								.endObject();
			}
					 builder.endArray()
							.field("db", sIndex)
							.field("collection", sTypes)
							.startObject("options")
								.field("secondary_read_preference", true)
							.endObject()
							.field("gridfs", false)
						.endObject()
						.startObject("index")
							.field("name", sIndex)
							.field("type", sTypes)
						.endObject()
					.endObject();

		    puts(builder.string());


			IndexResponse resp = m_client.prepareIndex(sm_mongoIndex, mongoRiverTypes(sIndex, sTypes), sm_mongoId_meta).setSource(builder).execute().actionGet();
			puts(resp);
		} catch (IOException ex) {
			ex.printStackTrace();
		}
	}

	String mongoRiverTypes(String sIndex, String sTypes) {
		return sIndex + "_" + sTypes;
	}

	public void removeMongoRiver(String sIndex, String sTypes) {
		String mongoRiverTypes = mongoRiverTypes(sIndex, sTypes);
		m_client.prepareDeleteByQuery(sm_mongoIndex).setQuery(QueryBuilders.matchQuery("_type", mongoRiverTypes)).execute().actionGet();
//		m_client.prepareDelete(sm_mongoIndex, mongoRiverTypes, sm_mongoId_meta).execute().actionGet();
//		m_client.prepareDelete(sm_mongoIndex, mongoRiverTypes, sm_mongoId_riverStatus).execute().actionGet();
//		m_client.prepareDelete(sm_mongoIndex, mongoRiverTypes, sm_mongoId_status).execute().actionGet();
//		m_client.prepareDelete(sm_mongoIndex, mongoRiverTypes, sIndex + "." + sTypes).execute().actionGet();
	}

	// ------------------------------------------------------------------------------------
	public DeleteIndexResponse deleteIndex(String index) {
		return m_client.admin().indices().delete(new DeleteIndexRequest(index)).actionGet();
	}

	public DeleteByQueryResponse deleteTypes(String sIndex, String sType) {
		return m_client.prepareDeleteByQuery(sIndex).setQuery(QueryBuilders.matchQuery("_type", sType)).execute().actionGet();
	}



	public static void main(String[] args) {
		String sIndex = "mops";
		ES es = new ES("elasticsearch_", "127.0.0.1", 9300);
		for (String sTypes : Arrays.asList("ShareBal", "ShareXfer", "ShareNotXfer", "SharePledge")) {
//			es.addMongoRiver(sIndex, sTypes, Arrays.asList(HostAndPort.fromParts("127.0.0.1", 27017)));
		}

//		es.deleteTypes(sIndex, "ShareBal");
//		es.removeMongoRiver(sIndex, "ShareBal");
		es.addMongoRiver(sIndex, "ShareBal", Arrays.asList(HostAndPort.fromParts("127.0.0.1", 27017)));
//		es.deleteTypes(sIndex, "ShareXfer");
	}
}
```
