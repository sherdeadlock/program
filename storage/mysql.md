# tutorial
* The 12 Essential MySQL Topics for Newbies
* http://mysqlresources.com/
* http://stackoverflow.com/questions/7027450/how-to-do-a-like-considering-two-columns


# backup

* export: mysqldump --host hostname -u user -pPASSWORD db_name | gzip -9 -c > db_name.sql.gz
* import: gzip -c -d db_name.sql.gz | mysql --host hostname -u user -pPASSWORD db_name
* https://www.percona.com/doc/percona-xtrabackup/2.4/index.html

* data only: --no-create-info --skip-triggers --no-create-db
* structure only: --no-data

# mysql

* mysql_upgrade
* mysql_secure_installation
* 5.5 之後必須是 default charset utf8mb4
    * http://blog.webgolds.com/view/232
    * http://blog.xdite.net/posts/2013/12/19/mysql-with-utf8mb4


ALTER TABLE table_name CONVERT TO CHARACTER SET utf8mb4;

```
-v /my/custom:/etc/mysql/conf.d

[client]
default-character-set=utf8mb4

[mysql]
default-character-set=utf8mb4


[mysqld]
collation-server = utf8mb4_unicode_ci
init-connect='SET NAMES utf8mb4'
character-set-server = utf8mb4
```

import data on startup
http://stackoverflow.com/questions/25920029/setting-up-mysql-and-importing-dump-within-dockerfile#answer-33397185

tmp
```
docker run -it --rm --name tmpmysql -e MYSQL_ROOT_PASSWORD=5566 -p 3306:3306 mysql --character-set-server=utf8mb4 --collation-server=utf8mb4_unicode_ci
docker run -it --rm -v /etc/localtime:/etc/localtime:ro -v /etc/timezone:/etc/timezone:ro --name tmpmyadmin --link tmpmysql:db -p 8087:80 phpmyadmin/phpmyadmin

docker run -d --name fruitpay_db \                                                                                                                          
--restart unless-stopped \                                                      
-v /etc/localtime:/etc/localtime:ro \                                           
-v /etc/timezone:/etc/timezone:ro \                                             
-v /opt/fruitpay/db_data:/var/lib/mysql \                                       
-v /opt/fruitpay/docker/initdb.d/:/docker-entrypoint-initdb.d \                 
-e MYSQL_ROOT_PASSWORD=P@ssw0rd \                                               
-e MYSQL_DATABASE=fruitpay_db_formal \                                          
-p 3306:3306 yoursql
```

```bash
# connect local docker
mysql  --protocol=tcp -u root -p
```

```sql
CREATE DATABASE db_name;
CREATE DATABASE db_name CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
SHOW databases;
USE db_name;

/* create table */
CREATE TABLE orders (
    order_id INT NOT NULL,
    order_number INT NOT NULL,
    person_id INT,
    PRIMARY KEY (order_id),
    CONSTRAINT fk_person_order FOREIGN KEY (person_id) REFERENCES persons(person_id)
);


/* create user & permission */
CREATE USER 'user'@'localhost' IDENTIFIED BY 'password';
GRANT ALL ON db_name.* TO 'user'@'localhost';
CREATE USER 'user'@'%' IDENTIFIED BY 'password';
GRANT ALL ON db_name.* TO 'user'@'%';
/* read-only user */
GRANT LOCK TABLES, SELECT ON DATABASE.* TO 'BACKUPUSER'@'%' IDENTIFIED BY 'PASSWORD';
FLUSH PRIVILEGES;

/* show db size */
SELECT table_schema                                        "DB Name",
   Round(Sum(data_length + index_length) / 1024 / 1024, 1) "DB Size in MB"
FROM   information_schema.tables
GROUP  BY table_schema;

/* show version */
SHOW VARIABLES LIKE "%version%";

/* show user */
SELECT Host,User FROM mysql.user;
SHOW GRANTS FOR 'user'@'%';

/* upgrade database */
mysql_upgrade -h 192.168.99.100 -u root -p

/* profile */
SHOW PROFILE FOR QUERY 2;

/* 設定MySQL連線數
https://kiki.longwin.com.tw/?p=16
*/
SHOW status WHERE `variable_name` = 'Threads_connected';
SHOW processlist;
SHOW variables LIKE 'max_connections';
SET GLOBAL max_connections=200;

/* engine */
SHOW ENGINES;

/* table schema*/
SHOW COLUMNS FROM tbl_name;
SHOW INDEX FROM tbl_name;

/* 修改欄位 */
ALTER TABLE tbl_name ADD COLUMN new_column DOUBLE;
ALTER TABLE tbl_name ADD COLUMN (field1 DOUBLE, field2 DOUBLE, field3 DOUBLE);

/* int to double */
ALTER TABLE tablename MODIFY COLUMN columnname DOUBLE;
```



# terminology

Associations
* unidirectional
* [bidirectional]

[bidirectional]: https://docs.jboss.org/hibernate/orm/current/userguide/html_single/Hibernate_User_Guide.html#associations-one-to-many-bidirectional

# OP
sudo service mysql start
sudo service mysql stop

# ERROR
* ERROR 1047 (08S01): WSREP has not yet prepared node for application use


# mariadb
* https://mariadb.com/kb/en/mariadb/documentation/
* https://mariadb.com/kb/en/mariadb/installing-and-using-mariadb-via-docker/

show create table table_name;
url=jdbc:mariadb://IP:3306/DATABASE?user=XXX&password=XXX

show status like '%wsrep%';    cluster 訊息
ps aux | grep rsync  查看 sync 狀態

# phpmyadmin
```
docker run -v /etc/localtime:/etc/localtime:ro -v /etc/timezone:/etc/timezone:ro --name myadmin -d -e PMA_HOST=dbhost -e PMA_PORT=3307 -p 8080:80 phpmyadmin/phpmyadmin
```


# SUBPARTITION
partition table


# python

* https://mariadb.com/blog/how-connect-python-programs-mariadb
* https://dev.mysql.com/doc/connector-python/en/connector-python-reference.html
* [connection config](https://dev.mysql.com/doc/connector-python/en/connector-python-connectargs.html)
```
pip install mysql-connector-python-rf
```

* https://mariadb.com/blog/how-connect-python-programs-mariadb
```py
import mysql.connector as mariadb
mariadb_connection = mariadb.connect(user='python_user', password='some_pass', database='employees')
cursor = mariadb_connection.cursor()
cursor = conn.cursor(dictionary=True, buffered=True)
```


# connection timeout

* show global variables like 'wait_timeout';
* http://zeusami.iteye.com/blog/1112827



# replication

* Galera Cluster
* MySQL Group Replication
* https://www.digitalocean.com/community/tutorials/how-to-configure-mysql-group-replication-on-ubuntu-16-04
