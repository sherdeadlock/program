# 系統啟動
/etc/init.d/

/etc/environment - This file is specifically meant for system-wide environment variable settings. It is not a script file, but rather consists of assignment expressions, one per line. Specifically, this file stores the system-wide locale and path settings.

開機初始化
/etc/profile
/etc/profile.d/
~/.profile

bash初始化
$BASH_ENV
/etc/bash.bashrc
~/.bashrc


# 參數

* `$@`
* `$*`
* `$#` argc
* `$0` file name
* `$1` first argument

```bash
#!/usr/bin/env bash
ls "$@"
```

# Exit Code

* `$?` last exit code
* `!` not 與其他變數之間要留有空格, ex: `! true`


# pushd and popd
```bash
pushd ./build ; python -m SimpleHTTPServer ; popd
```

# dir
```bash
# current directory
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
```

# date

```
DATE=`date +%Y-%m-%d`
DATETIME=`date +%Y-%m-%d:%H:%M:%S`
```


# crontab
需要escape %
```
echo 'test' > /logs/`date +\%Y-\%m-\%d`.log 2>&1
```

# find

刪除N日前檔案
```
find ./my_dir -mtime +10 -type f -delete

./my_dir your directory (replace with your own)
-mtime +10 older than 10 days
-type f only files
-delete no surprise. Remove it to test your find filter before executing the whole command
```

# variable comparison

```
if [ "x$a" = "xtrue" ]
then
    echo "true"
fi
```

ref: https://unix.stackexchange.com/questions/490393/whats-the-purpose-of-adding-a-prefix-on-both-sides-of-a-shell-variable-comparis?utm_source=pocket-app&utm_medium=share
