# todo

* [ ] http://blog.jobbole.com/55086/ 十步完全理解 SQL
* [ ] https://github.com/morgo/mysql-compatibility-config
* [ ] [JDBC](https://docs.oracle.com/javase/tutorial/jdbc/basics/index.html)
* [ ] Effective SQL 寫出良好SQL的61個具體作法
* [ ] Sams Teach Yourself SQL in 10 Minutes
* [ ] SQL: QuickStart Guide - The Simplified Beginner's Guide To SQL (SQL, SQL Server, Structured Query Language)
* [ ] Database Design for Mere Mortals: A Hands-On Guide to Relational Database Design (3rd Edition)  (db design)
* SQL Queries for Mere Mortals: A Hands-On Guide to Data Manipulation in SQL (3rd Edition)
* SQL Cookbook: Query Solutions and Techniques for Database Developers
* MySQL Cookbook - Solutions for Database Developers and Administrators
* [SQL-99 Complete, Really](https://mariadb.com/kb/en/the-mariadb-library/sql-99/)
* SQL Pocket Guide  (各種DB查詢)
* The art of SQL
* The Relational Model for Database Management  SQL之父
* MySQL High Availability
* Learning MySQL and MariaDB Heading in the Right Direction with MySQL and MariaDB
* Refactoring SQL Applications
* SQL Antipatterns Avoiding the Pitfalls of Database Programming
* MYSQL in a Nutshell
* 更純正開放的MySQL：MariaDB完全制霸手冊
* MySQL 核心內幕, 祝定澤、張海、黃健昌
* Handbook of Relational Database Design, Candace C. Fleming, Barbara von Halle  (db design)
* [TritonHo Slides](https://github.com/TritonHo/slides)
* MySQL管理之道：性能調優、高可用與監控
* [timezone](https://stackoverflow.com/questions/19023978/should-mysql-have-its-timezone-set-to-utc)
* [Comparison of different SQL implementations](http://troels.arvin.dk/db/rdbms/)
* [Oracle Database SQL Tuning Guide](https://docs.oracle.com/database/121/TGSQL/toc.htm)
* [pagination](https://dev.mysql.com/doc/refman/5.7/en/information-functions.html#function_found-rows)

# applications

* 解密搜索引擎技術實戰：Lucene&Java精華版
* Data Science for Business: What You Need to Know about Data Mining and Data-Analytic Thinking, Foster Provost, Tom Fawcett
* Predictive Analytics: The Power to Predict Who Will Click, Buy, Lie, or Die
* Storytelling with Data: A Data Visualization Guide for Business Professionals

# practices

* https://github.com/TexanInParis/Effective-SQL
* https://github.com/XD-DENG/SQL-exercise
* https://en.wikibooks.org/wiki/SQL_Exercises
* Sakila Database
	* sakila-en.a4.pdf
	* https://www.jooq.org/sakila
* [wordpress db](https://codex.wordpress.org/Database_Description)
* [woocommerce db](https://github.com/woocommerce/woocommerce/wiki/Database-Description)
* [MySQL 5.7分区表性能下降的案例分析](http://database.51cto.com/art/201709/551217.htm)
* [Odoo](http://useopenerp.com/v8)
* https://stackoverflow.com/questions/12102200/get-records-with-max-value-for-each-group-of-grouped-sql-results

## 搶票系統

```
我們的友版有人提問：「像戲院，還是車票系統，我們要怎樣暫時lock著位置等到交易完成？還是沒有這個必要？」
———————————————————————
首先，我們來先定義一下場景吧：
我們現在在做的是一所普通戲院的售票系統，每張票都是指定座位的（像是１３Ｇ這樣的）。
用戶Ｘ的買票流程是：
１　用戶Ｘ挑一個目前還未售出，而且沒有被其他用戶預留的座位。系統會把這個座位給用戶Ｘ預留３０分鐘。
２　然後，用戶被帶到銀行網頁付款
３　如果用戶成功付款，系統便把座位的狀態從「預留中」變成「售出」。否則，３０分鐘後該座位開放給所有人購票。
———————————————————————
對小型系統，最簡單的解法是：
我們現在有個table叫tickets, 其中有column:
showtime (電影開始的時間, 例子: "2017-07-05 22:10")
seat (座位, 例子: "13G")
is_sold (是否為己售出)
reservation_time (開始被預留的時間, nullable)
owner_id (用戶id, 是誰現在有這票的"預約" / "擁有權", nullable)
ticket的PK是(showtime, seat)
———————————————————————
１
當定好節目表後，我會把所有該場次的座位都放進tickets中。
就是說，我會執行：
insert into tickets(showtime, seat, is_sold, reservation_time, owner_id) values
('2017-07-05 22:10', '1A', false, null, null),
('2017-07-05 22:10', '1B', false, null, null),
('2017-07-05 22:10', '1C', false, null, null),
２
然後，有用戶看看'2017-07-05 22:10'的售票狀態時：
單純的跑：select * from tickets where showtime = '2017-07-05 22:10'便好
is_sold = true的顯示為「已售出」
now() - reservation_time <= interval'30 minute'為true的顯示為「已被保留」
否則，顯示為「可選擇」
３
用戶要挑某一「可選擇」的座位時，只需要跑：
update tickets
set reservation_time = now(), owner_id = 'TritonHo'
where showtime = '2017-07-05 22:10' and seat = '13G'
and is_sold = false
and reservation_time is null or diff(now() - reservation_time) > interval'30 minutes'
重點：
如果updated record為１，則代表用戶成功保留了這座位，否則他便被同一時間按下「選擇」的用戶Ｙ搶走了票。
———————————————————————
這方法的優美：
１　在用戶第一步要選擇座位時，他只需要一個update statement便好，而且使用了atomic check-and-set來防止race condition
２　除非２個用戶要選擇相同座位，否則不會發生blocking等待，也不可能有deadlock
３　reservation_time三十分鐘到期後無需後續行動，即使資料庫／web server當掉也不用做data cleanup。


下一問題是: 買電影票一定是多張同時買的啦。
基本上就要transaction，以及按某順序做update (否則deadlock)

先讓新手明白 check-and-set 再談 lock sequencing 吧
```

## 使用aws cn的感想
```
前言：

hypebeast.com目前中國用戶正不斷成長，而中國的用戶不斷投訴我家hypebeast.com很慢很慢。
但是我們的Server Processing Time只有160ms，全世界除了中國都沒人說我們慢。

而老闆未來打算推廣中國業務（心中ＯＳ：又一個無知中年……不過反正我又沒買公司股票，不理了……），建立中國用戶專屬的hypebeast.cn。

所以嘛，我們要使用傳說中的aws cn伺服器，並且需要把aws us-west-2的主資料庫同步到aws cn的replication slave database。

（補充說明１：會同步的只有我們資料庫的非用戶非敏感資料。基於歐盟和美國法規，歐盟和美國用戶相關的資料不能被同步到中國。）
（補充說明２：我以我的人格保證，如果用戶資料被上傳到任何在中國的伺服器，我會立即請辭負責。）

------------------------------------------------------------------------------------------------------------------------------
１　我們在aws us-west-2的主資料庫是RDS mariadb，要知道怎使用RDS作為Replication Master：

請參看這篇：https://blog.cloudinvaders.com/setting-up-replication-from…/

我們試過了，其原理是可行的。
如果你是用自己建的Mariadb作為slave可以100%跟他來做。
如果你是用RDS作為Slave，請別補上--apply-slave-statements，也不用加CHANGE MASTER TO這句，而是使用RDS專屬指令

２　我們在aws cn的資料庫是RDS mariadb，要知道怎使用RDS作為Replication Master：

請參看這篇：http://docs.aws.amazon.com/…/MySQL.Procedural.Importing.Ext…

------------------------------------------------------------------------------------------------------------------------------

我們真正面對問題是：

１　aws cn和aws us-west-2必須要由２個aws用戶來持有，而且因為Region不同而沒法做VPC Peering，所以便需要把RDS Master開放public access。

２　我家的DBA對保安要求極高，說如果打開public access，便容易受到Mariadb的Zero-day attack，這跟他的祼照放aws S3沒分別！

３　aws RDS的Replication不支援SSL加密（有錯請指正，至少我找不到），aws us-west-2 / aws cn之間的通訊如果經由public internet來傳，這真的會給別人看光光的。

４　在中國的伺服器我們是相信是不真正安全（原因你懂的），我們會假設是已經全面被cracker攻陷的狀態。所以我們需要為此作出防禦。

------------------------------------------------------------------------------------------------------------------------------
方案：

１
針對問題２＋３，我們在aws us-west-2建立了一台小型的ubuntu machine作jump_host1，在aws cn建立jump_host2。
然後便在jump_host2上跑ssh -N jump_host1 -L \*:9000:us-mariadb:3306 user@example.com
這樣子，所有傳到jump_host2上的port 9000的東西，便會自動先以加密通訊傳到了jump_host1，然後再在jump_host上丟到了us-mariadb的port 3306。

所以我們的RDS不用打開public access，而且之間的通訊雖然是經由public internet來傳，但是是已經加密的。
（什麼，你用windows server？你怎樣不換工作？）
（補充：有人問為何自建VPN，我的回答是：「我熟悉ssh tunneling，用這一定沒安全問題，而VPN我不肯定一定沒做錯。」）

２
ssh會斷掉的（在GFW下，大約一天斷三次）
所以便用autossh這個ubuntu package好了
我家是在crontab上寫@reboot autossh -f -N jump_host1 -L \*:9000:us-mariadb:3306

３
針對問題１，我們的jump_host1和jump_host2都拿了aws elastic IP，然後互相white list對方的IP。

４
針對問題４，我們在aws-west-2的VPC做了不少security group設定，讓在jump_host1只接觸到他應該能接觸到的RDS。

------------------------------------------------------------------------------------------------------------------------------

最後吐嘈：

junior和senior員工，其中一個分別是：

junior一旦建了Replication，便會停步向老闆說做完了。
而senior員工，他們是會再多走一步，去思考其中是否有不安全的地方。如何在合理成本（伺服器錢和開發時間）下去大幅增加cracker的攻擊難度。如果在一旦系統部份防線失守下，不會全面性的安全性崩潰。

------------------------------------------------------------------------------------------------------------------------------

１０／１的場地已經確定，預計在下星期開賣門票，至少在開賣前三天會再跟大家說一聲的。感謝mit.jobs是次活動的全力幫忙。
```

# 月份比較

```
有人問：
他有一個資料表叫purchase_orders
其內有id, product_id, amount, user_id, purchase_date這些columns。
他想知道：會員在第一筆交易後，下一個月份也有交易，這樣的比率有多少。
——————————————————————————————————————————————————————
很重要的一個觀念：
在RDBMS世界，一切都是dataset，然後什麼where, join, exists, group by這些的，全都是環繞著dataset的行為。
所以，要解複雜的題目，請善用divide-and-conquer，把題目拆成數個子題目（dataset），解決掉再思考怎去把這些dataset去連結，便能輕易解決大部份題目。
（然後做好後，看需要再決定是否再要做optimization把Query寫得更漂亮）
註：以下我沒空去找mysql的date library，我先假設有二個function，一個叫extraxtYYYYMM和add_mouth
extraxtYYYYMM：輸入一個timestamp，返回它的yyyymmdd
add_mouth：輸入一個timestamp，返回把這個timestamp加一個月後的timestamp
——————————————————————————————————————————————————————
首先：
１　
從本來題目，我們應該可以先拆成二個dataset的：
「會員的第一筆交易日期」　ＡＮＤ　「會員每個月的交易數量」
２　
會員的第一筆交易日期：
select user_id, min(purchase_date) as first_purchase_date
from purchase_orders
group by user_id
３
會員每個月的交易數量：
select user_id, extraxtYYYYMM(purchase_date) as yyyymm, count(1)
from purchase_orders
group by user_id, extraxtYYYYMM(purchase_date)
４
要知道「會員在第一筆交易後，下一個月份也有交易」這比率嘛～
便是看看「會員的第一筆交易日期」這個dataset的record t1，是否存在一個相對應的record t2在「會員每個月的交易數量」
而且 extraxtYYYYMM(add_month(t1.first_purchase_date, 1)) = t2.yyyymm and t1.user_id = t2.user_id
５
時間關係～（我是方太在教煮食節目嗎＝＿＝？）
要拿出所有用戶，看他在接下來的一個月有沒有購物：
select user_id, (case when t2.yyyymm is not null then 1 else 0 end) as has_return
from
(
select user_id, min(purchase_date) as first_purchase_date
from purchase_orders
group by user_id
) t1 left join (
select user_id, extraxtYYYYMM(purchase_date) as yyyymm, count(1)
from purchase_orders
group by user_id, extraxtYYYYMM(purchase_date)
) t2 on extraxtYYYYMM(add_month(t1.first_purchase_date, 1)) = t2.yyyymm and t1.user_id = t2.user_id
６
而要拿出比率嘛：
select count(1) as total_user_count, sum(has_return) as has_return_user_count
select user_id, (case when t2.yyyymm is not null then 1 else 0 end) as has_return
from
(
select user_id, min(purchase_date) as first_purchase_date
from purchase_orders
group by user_id
) t1 left join (
select user_id, extraxtYYYYMM(purchase_date) as yyyymm, count(1)
from purchase_orders
group by user_id, extraxtYYYYMM(purchase_date)
) t2 on extraxtYYYYMM(add_month(t1.first_purchase_date, 1)) = t2.yyyymm and t1.user_id = t2.user_id
) t3
把has_return_user_count / total_user_count便可以了。（小心div by zero）
——————————————————————————————————————————————————————
這個Query是算簡單的，我時間全花到打字上＝。＝
另外，如果你是私下問我問題，而我最終沒有回答……
最大可能性：
我在忙亂中忘記你的問題。
畢竟我也是凡人不能做光合作用的，時間要先留給賺錢／自己雜務／陪老婆上，免費的幫忙我也是有限度的。
另外，對於有教學性質的問題，我會優先回答的。
——————————————————————————————————————————————————————
目前正在準備一些煩人的事務，等有進一步結果便會跟大家說一下～～～
```
