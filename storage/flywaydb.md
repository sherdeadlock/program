# flywaydb

不該與spring project放在一起，應該獨立管理 sql。

選擇 flywaydb 原因:

* 簡單
* 寫sql，不管dialect，production不該有mysql突然要換成其他sql的需求
* 不需要 downgrade，就像 git 的 revert commit


# Implementation

Flywaydb create a table schema_version which schema is 

```
+----------------+---------------+------+-----+-------------------+-------+
| Field          | Type          | Null | Key | Default           | Extra |
+----------------+---------------+------+-----+-------------------+-------+
| installed_rank | int(11)       | NO   | PRI | NULL              |       |
| version        | varchar(50)   | YES  |     | NULL              |       |
| description    | varchar(200)  | NO   |     | NULL              |       |
| type           | varchar(20)   | NO   |     | NULL              |       |
| script         | varchar(1000) | NO   |     | NULL              |       |
| checksum       | int(11)       | YES  |     | NULL              |       |
| installed_by   | varchar(100)  | NO   |     | NULL              |       |
| installed_on   | timestamp     | NO   |     | CURRENT_TIMESTAMP |       |
| execution_time | int(11)       | NO   |     | NULL              |       |
| success        | tinyint(1)    | NO   | MUL | NULL              |       |
+----------------+---------------+------+-----+-------------------+-------+
```
