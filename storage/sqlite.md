# sqlite
- http://souptonuts.sourceforge.net/readme_sqlite_tutorial.html
* https://github.com/sqlcipher/sqlcipher  加密

library version
```
select sqlite_version();
```

import csv
```
sqlite> .mode csv
sqlite> .import file.csv tableName
```

has table
```
select * from sqlite_master where type in('table') and name = '" + tableName +"'"
```

get table names
```
m_ctx.selectFrom(SQLITE_MASTER)
      .where(TYPE.in("table"))
      .orderBy(SQLiteMaster.NAME)
      .fetch();
```

getFieldNames
```
m_ctx.fetch("pragma table_info('" + tblName + "')")
      .stream().map(r -> r.getValue("name", String.class))
      .collect(toList());
```


# python
readonly
* conn = sqlite3.connect('file:path/to/database?mode=ro', uri=True)
* sqlite3.connect(database[, timeout, detect_types, isolation_level, check_same_thread, factory, cached_statements, uri])
* c = conn.cursor()
* conn.execute(sql[, parameters])
  * executemany(sql[, parameters])
  * fetchmany(size=cursor.arraysize)
  * fetchone()
  * fetchall()
  * rowcount

### fetch as dict
conn.row_factory = sqlite3.Row

# sql tune
```java
Connection c = DriverManager.getConnection("jdbc:mysql://host:3306/db?useServerPrepStmts=false&rewriteBatchedStatements=true", "username", "password");
```
http://dev.mysql.com/doc/refman/5.0/en/connector-j-reference-configuration-properties.html
