# config

* https://www.linode.com/docs/websites/apache-tips-and-tricks/rewrite-urls-with-modrewrite-and-apache
* https://www.linode.com/docs/websites/apache-tips-and-tricks/managing-resources-with-apache-modalias
* https://www.digitalocean.com/community/tutorials/how-to-configure-logging-and-log-rotation-in-apache-on-an-ubuntu-vps
    * http://httpd.apache.org/docs/2.2/programs/rotatelogs.html
* https://www.debuggex.com/cheatsheet/regex/pcre

# ssl

* https://www.digitalocean.com/community/tutorials/how-to-create-a-self-signed-ssl-certificate-for-apache-in-ubuntu-16-04
* https://www.digitalocean.com/community/tutorials/how-to-secure-apache-with-let-s-encrypt-on-ubuntu-14-04
* https://www.digitalocean.com/community/tutorials/how-to-secure-apache-with-let-s-encrypt-on-ubuntu-16-04


# proxy

* http://tomcat.apache.org/connectors-doc/index.html
* https://www.howtoforge.com/apache2_tomcat5_mod_jk

* https://developer.jboss.org/people/mladen.turk/blog/2007/07/16/comparing-modproxy-and-modjk

* https://www.digitalocean.com/community/tutorials/how-to-use-apache-http-server-as-reverse-proxy-using-mod_proxy-extension
* mod_proxy
    * libapache2-mod-proxy-html

* a2enmod proxy
* a2enmod proxy_http
* a2enmod proxy_html

```
<VirtualHost *:*>
    ProxyPreserveHost On
    ProxyRequests Off
    ProxyPass / http://0.0.0.0:8080/
    ProxyPassReverse / http://0.0.0.0:8080/
    ServerName localhost
</VirtualHost>
```


# tuning

* https://www.linode.com/docs/websites/apache-tips-and-tricks/tuning-your-apache-server


# securing

* https://www.linode.com/docs/websites/apache-tips-and-tricks/modsecurity-on-apache
* https://www.linode.com/docs/websites/apache-tips-and-tricks/modevasive-on-apache  HTTP DoS attack
* https://www.digitalocean.com/community/tutorials/how-to-configure-apache-content-caching-on-ubuntu-14-04


```
$ sudo apt install apache2

goto http://host
```

主要目錄：/etc/apache2

apache2.conf  Main configuration
ports.conf  port listened on

環境變數: envvars

conf 裡面可以用 `${APACHE_LOG_DIR}`

以下子目錄：

* mods  manage modules
* conf  global configuration fragments
* sites  virtual host configurations

```
*-available/  可用的 mods, conf, sites
*-enabled/    使用的 mods, conf, sites
```

透過指令 link available 到 enabled, enable or disable conf

* a2enmod / a2dismod
* a2ensite / a2dissite
* a2enconf / a2disconf
* apache2ctl -M  list enabled mods
* apache2ctl -S  list enabled vhosts
* apache2ctl -t  To check the syntax of config


### 啟動：

* /etc/init.d/apache2
    * sudo /etc/init.d/apache2 force-reload
    * sudo service apache2 reload
    * sudo service apache2 restart
* apache2ctl


### static files：

* /var/www
* [public_html] directories (when enabled)
* /usr/share (for web applications)


[public_html]: http://httpd.apache.org/docs/2.4/mod/mod_userdir.html "public html"


# multi-processing modules

* The Prefork Module
* The Event Module


# virtual host

```conf
<VirtualHost *:80>
    ServeName my_domain_name
    DocumentRoot static_file_root
    ServerAdmin my_email
    ErrorLog /var/log/my_domain_name/logs/error.log
    CustomLog /var/log/my_domain_name/logs/access.log combined(LogFormat)
</VirtualHost>
```


# starup on boot

* sudo update-rc.d apache2 disable
* sudo update-rc.d apache2 enable

# Directives

order of preference:

* <Directory>
* .htaccess
* <DirectoryMatch>
* <Files> / <FilesMatch>
* <Location> / <LocationMatch>

### <Directory> / <DirectoryMatch>

`<DirectoryMatch "^.+/images">` == `<Directory ~ "^.+/images">`


### <Files> / <FilesMatch>

### <Location> / <LocationMatch>


### Redirect

```
Redirect 301 /username http://team.example.com/~username/
Redirect 302 /username http://team.example.com/~username/
Redirect 303 /username http://team.example.com/~username/
Redirect 410 /username
RedirectMatch (.*)\.jpg$ http://static.example.com$1.jpg
```


# mod_rewrite

* https://httpd.apache.org/docs/current/mod/mod_rewrite.html

```
RewriteEngine on
```


# analyze log file

```
# Get unique IP from apache log file
cat /var/log/apache2/access.log |awk '{print $1}' | sort | uniq | wc -l

# filter out unique requests for a given day, in this case September 5th 2010
cat /var/log/apache2/access.log |  grep "\[05/Sep/2010" |awk '{print $1}' | sort | uniq | wc -l

# number of hits
cat /var/log/apache2/access.log | wc -l

# getting a list of unique referrers
cat /var/log/apache2/access.log | awk '{print $11};' | awk -F / '{print $3}' | sort | uniq
```
