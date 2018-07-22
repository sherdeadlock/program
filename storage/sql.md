# sql

* https://docs.oracle.com/en/database/
	* https://docs.oracle.com/database/121/TGSQL/toc.htm
* [ACID](https://zh.wikipedia.org/wiki/ACID)
	* Atomicity
	* Consistency
	* Isolation
	* Durability
* https://db-engines.com/en/ranking
* 資料庫正規化
* 資料完整性
	* 實體完整性（Entity Integrity, EI）：透過最底層級的索引物件來限制資料的完整性，如使用 PK, Unique 條件約束來限制資料的完整性。
	* 網域完整性（Domain Integrity, DI）：透過 CHECK 條件約束來限制資料的完整性。
	* 參考完整性（Referential Integrity, RI）：透過 FOREIGN KEY 條件約束來限制資料的完整性。
* Soft delete
	* filter by view
	* trigger to remove FK

# Convention

* pk      primary key
* fk_tablename_pk  foreign key
* uk_tablename_xxx  unique key
* ix_tablename_xxx  index

# SQL:1999

* With-Clause


# SQL:2003

* Window function over(partition by)
* CTAS
* Recursive-select
* inline view
* Rank()


# SQL:2008

* Case-when expression
