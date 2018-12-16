FastCGI
=======

* https://fast-cgi.github.io/
* https://fastcgi-archives.github.io/
* https://github.com/FastCGI-Archives/fcgi2


apache httpd
------------

* https://wiki.apache.org/httpd/PHP-FPM#apache_httpd_2.4
* http://httpd.apache.org/docs/2.4/programs/fcgistarter.html
* https://httpd.apache.org/docs/2.4/mod/mod_proxy_fcgi.html
* https://httpd.apache.org/docs/2.4/mod/mod_authnz_fcgi.html


ex1_tiny_cgi.c
--------------

1. `gcc ex1_tiny_fcgi.c -lfcgi`
2. `spawn-fcgi -p 8888 -n a.out` or `fcgistarter -c ./a.out -p 8888`


ex2_tiny_cgi.c
--------------

1. `g++ ex2_tiny_fcgi.cpp -lfcgi++ -lfcgi -std=c++14`
2. Apache conf `ProxyPass unix:/tmp/fcgi.sock|fcgi:`
3. `curl http://localhost:8087/fcgi?a=1,b=2 -H "X-FOO:123" -H "x-bar:567" -X POST -H 'Content-type:application/json' -d '{"foo":1,"bar":2}'`


Example
-------

* [fastcgi with cpp](http://chriswu.me/blog/writing-hello-world-in-fcgi-with-c-plus-plus/)
* [pthread](https://gist.github.com/dermesser/e2f9b66457ae19ebd116)

nginx setting

```
location /foobar {
	include fastcgi.conf;
	fastcgi_pass 127.0.0.1:8888;
}
```

libs
====

* [mariadb-connector-c](https://mariadb.com/kb/en/library/mariadb-connector-c/)
* [libcurl](https://curl.haxx.se/libcurl/c/libcurl.html)
* [json](https://github.com/nlohmann/json)
* man urandom

Others
------

* [FlatBuffers](http://google.github.io/flatbuffers/)
* [msgpack-lite](https://github.com/kawanet/msgpack-lite)
* [nghttp2](https://github.com/nghttp2/nghttp2)
* [http-parser](https://github.com/nodejs/http-parser)

