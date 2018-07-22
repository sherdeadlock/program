# linux

* https://www.kernel.org
	* https://www.kernel.org/doc/
	* https://www.kernel.org/doc/man-pages/
	* https://www.kernel.org/doc/Documentation/
		* https://www.kernel.org/doc/Documentation/filesystems/sysfs.txt
* [The Linux Document Project](http://www.tldp.org/)
* [Linux Kernel Mailing List](https://lkml.org/)
* [Linux Commands In Structured Order](http://linoxide.com/guide/linux-command-shelf.html)
* https://github.com/jlevy/the-art-of-command-line
* https://github.com/tldr-pages/tldr
* https://www.ted.com/talks/linus_torvalds_the_mind_behind_linux?language=zh-tw#t-1278108 Linus TED演講
* https://snapcraft.io/  新的套件管理
* https://buildroot.org/

# env

* global env /etc/environment
* /etc/profile.d

/etc/timezone
sudo dpkg-reconfigure tzdata

# eth0 rename

* http://www.itzgeek.com/how-tos/mini-howtos/change-default-network-name-ens33-to-old-eth0-on-ubuntu-16-04.html


# hostname

http://ubuntuhandbook.org/index.php/2016/06/change-hostname-ubuntu-16-04-without-restart/


# localepurge

節省空間

# listen port
* netstat -tulpn | grep :3000
* sudo lsof -i:3000

# osquery
* https://osquery.io/

# date
```
date --date="+1 day" +"%Y-%m-%d"
```

# job control
* http://stackoverflow.com/questions/625409/how-do-i-put-an-already-running-process-under-nohup
```
進入 bg 並 suspend
$ ctrl-z

在 bg 執行
$ bg JOB-ID

列出所有jobs
$ jobs -l

進入 fg
$ fg JOB-ID
```

# network
/etc/network/interfaces
```
auto lo
iface lo inet loopback

auto eth0
iface eth0 inet static
address 192.168.1.2
netmask 255.255.255.0
gateway 192.168.1.1
dns-nameservers 8.8.8.8 8.8.4.4
```

sudo ifdown eth0 && sudo ifup eth0

# dns
/etc/resolvconf/resolv.conf.d/base
```
options single-request-reopen
```

# ufw
```
sudo ufw allow in on ppp0 to any port 80 proto tcp
sudo ufw allow from 192.168.1.215 proto tcp to any port 88
sudo ufw allow from 192.168.1.0/24 to any port 22
```

```
sudo ufw enable
sudo ufw default deny
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw status verbose
```
關掉ping, comment the following lines or change ACCEPT to DROP, /etc/ufw/before.rules
```
# ok icmp codes for INPUT
-A ufw-before-input -p icmp --icmp-type destination-unreachable -j ACCEPT
-A ufw-before-input -p icmp --icmp-type source-quench -j ACCEPT
-A ufw-before-input -p icmp --icmp-type time-exceeded -j ACCEPT
-A ufw-before-input -p icmp --icmp-type parameter-problem -j ACCEPT
-A ufw-before-input -p icmp --icmp-type echo-request -j ACCEPT

# ok icmp code for FORWARD
-A ufw-before-forward -p icmp --icmp-type destination-unreachable -j ACCEPT
-A ufw-before-forward -p icmp --icmp-type source-quench -j ACCEPT
-A ufw-before-forward -p icmp --icmp-type time-exceeded -j ACCEPT
-A ufw-before-forward -p icmp --icmp-type parameter-problem -j ACCEPT
-A ufw-before-forward -p icmp --icmp-type echo-request -j ACCEPT
```


```
Backing up 'after6.rules' to '/etc/ufw/after6.rules.20150526_110004'
Backing up 'before6.rules' to '/etc/ufw/before6.rules.20150526_110004'
Backing up 'before.rules' to '/etc/ufw/before.rules.20150526_110004'
Backing up 'user6.rules' to '/lib/ufw/user6.rules.20150526_110004'
Backing up 'after.rules' to '/etc/ufw/after.rules.20150526_110004'
Backing up 'user.rules' to '/lib/ufw/user.rules.20150526_110004'
```


# 中文
在Ubuntu 12.04 及Ubuntu 14.04 我們利用Terminal登入主機 卻不能顯示中文  一定要顯示中文時
請如下修改
1. 編修 /var/lib/locales/supported.d/local 檔案
```
加入
zh_TW BIG5
zh_TW.UTF-8 UTF-8
```

2. 重新製作local
```
sudo locale-gen
```

3.

```
sudo update-locale LANG="zh_TW.UTF-8" LANGUAGE="zh_TW" LC_ALL="zh_TW.UTF-8"

sudo update-locale LANG="en_US.UTF-8" LANGUAGE="en_US.UTF-8" LC_ALL="en_US.UTF-8"
```


3. 修改預設的顯示語系
http://wiki.ubuntu.org.cn/index.php?title=%E4%BF%AE%E6%94%B9locale&variant=zh-hant
```
sudo vim /etc/default/locale
```
主要是 LC_ALL 有影響

全改為zh_TW.UTF-8
如下所示
```
LANG="zh_TW.UTF-8"
LANGUAGE="zh_TW.UTF-8"
LC_NUMERIC="zh_TW.UTF-8"
LC_TIME="zh_TW.UTF-8"
LC_MONETARY="zh_TW.UTF-8"
LC_PAPER="zh_TW.UTF-8"
LC_NAME="zh_TW.UTF-8"
LC_ADDRESS="zh_TW.UTF-8"
LC_TELEPHONE="zh_TW.UTF-8"
LC_MEASUREMENT="zh_TW.UTF-8"
LC_IDENTIFICATION="zh_TW.UTF-8"
```

這樣登出再登入就可以看到中文了


# mount

```bash
ntfs
$ sudo ntfs-3g /dev/hda3 /media/data -o locale=zh_TW.UTF8

exfat
$ sudo apt-get install exfat-utils exfat-fuse
$ sudo mount -t exfat /dev/sdc1 /media/data

HFS
$ sudo mount -t hfsplus -o force,rw /dev/sdXY /media/mntpoint
$ sudo mount -t hfsplus -o remount,force,rw /mount/point
$ sudo fsck.hfsplus -f /dev/sdXY
```

# apt
* [do-release-upgrade](https://help.ubuntu.com/lts/serverguide/installing-upgrading.html)

## print upgrade
```
apt-get --just-print upgrade
```
## tw mirror
- https://launchpad.net/ubuntu/+archivemirrors
- http://tw.archive.ubuntu.com/ubuntu/
```
sudo sed -i 's/us.archive.ubuntu.com/tw.archive.ubuntu.com/' /etc/apt/sources.list
sudo sed -i 's/tw.archive.ubuntu.com/us.archive.ubuntu.com/' /etc/apt/sources.list
```

# ssh

http://blog.oddbit.com/2011/05/08/converting-openssh-public-keys/
```
ssh-keygen -f key.pub -e -m pem
```


```
authorized_keys

$ ssh-keygen -t rsa -b 4096
$ ssh-copy-id USER@HOST
or
$ ssh USER@HOST 'mkdir -p ~/.ssh;cat >> ~/.ssh/authorized_keys' < ~/.ssh/id_rsa.pub

client
$ chmod 600 id_rsa
```

disable password, vi /etc/ssh/sshd_config
```
PermitRootLogin no
PasswordAuthentication no
PubkeyAuthentication yes
```
restart sshd
```
$ /etc/init.d/sshd restart
```

synology id_rsa.pub 裡面的 host 與機器不同而無法登入

# user group
```
groupadd docker -g 999

# append group
usermod -aG docker jenkins
```

# create user
server
```
$ sudo useradd --shell /bin/bash --groups sudo,adm,docker,tomcat7,jenkins --create-home USERNAME
$ usermod -aG sudo nil
$ usermod -aG adm nil
$ copy id_rsa.pub > authorized_keys
```
daemon user
```
$ sudo useradd --system --shell /usr/sbin/nologin --user-group --base-dir /opt --create-home USERNAME
```
change to daemon user
```
$ sudo su --shell /bin/bash daemon_name
```


# tcpdump
```
sudo tcpdump -i bond0 -xx '(dst port 443 and dst host 192.168.80.92) or (src port 443 and src host 192.168.80.92)' -w tcpdumpfile

tcpdump -i eth0 -nn -X 'port 2002'

- Choose the interface
   tcpdump -i eth0
- do not display FQDN (print out numeric IP address only)
   tcpdump -i eth0 -n

- output in verbose mode
   tcpdump -i eth0 -n -v
   tcpdump -i eth0 -n -vv    (very verbose)
- Only listen to those traffic destinated to you eth (turn off promiscuous mode)
   tcpdump -i eth0 -p

- only listen to a particular port
   tcpdump -i eth0 'port 80'

- only listen on port 80 from specific source host
   tcpdump -i eth0 tcp dst port 80 and src host 192.168.0.10
- When parsing and printing, in addition to printing the headers of each packet, print the data of each packet
   tcpdump -i eth0 -x 'port 80’

HTTP

sudo tcpdump -s 0 -A '(tcp[((tcp[12:1] & 0xf0) >> 2):4] = 0x47455420) or (tcp dst port 80 and (tcp[((tcp[12:1] & 0xf0) >> 2):4] = 0x504f5354))'


26 down vote

There are tcpdump filters for HTTP GET & HTTP POST (or for both plus message body):
Run man tcpdump | less -Ip examples to see some examples

1. Here’s a tcpdump filter for HTTP GET:
sudo tcpdump -s 0 -A 'tcp[((tcp[12:1] & 0xf0) >> 2):4] = 0x47455420'

2. Here’s a tcpdump filter for HTTP POST:
sudo tcpdump -s 0 -A 'tcp dst port 80 and (tcp[((tcp[12:1] & 0xf0) >> 2):4] = 0x504f5354)'

3. Monitor HTTP traffic including request and response headers and message body (source):
tcpdump -A -s 0 'tcp port 80 and (((ip[2:2] - ((ip[0]&0xf)<<2)) - ((tcp[12]&0xf0)>>2)) != 0)' tcpdump -X -s 0 'tcp port 80 and (((ip[2:2] - ((ip[0]&0xf)<<2)) - ((tcp[12]&0xf0)>>2)) != 0)'

tcpdump -X -s 0 'tcp port 80 and (((ip[2:2] - ((ip[0]&0xf)<<2)) - ((tcp[12]&0xf0)>>2)) != 0)'
For more information on the bit-twiddling in the TCP header see: String-Matching Capture Filter Generator (link to Sake Blok's explanation).
```

1. To monitor HTTP traffic including request and response headers and message body:

tcpdump -A -s 0 'tcp port 80 and (((ip[2:2] - ((ip[0]&0xf)<<2)) - ((tcp[12]&0xf0)>>2)) != 0)'

2. To monitor HTTP traffic including request and response headers and message body from a particular source:

tcpdump -A -s 0 'src example.com and tcp port 80 and (((ip[2:2] - ((ip[0]&0xf)<<2)) - ((tcp[12]&0xf0)>>2)) != 0)'

3. To monitor HTTP traffic including request and response headers and message body from local host to local host:

tcpdump -A -s 0 'tcp port 80 and (((ip[2:2] - ((ip[0]&0xf)<<2)) - ((tcp[12]&0xf0)>>2)) != 0)' -i lo

4. To only include HTTP requests, modify “tcp port 80” to “tcp dst port 80” in above commands

5. Capture TCP packets from local host to local host

tcpdump -i lo


# netstat
* http://www.cyberciti.biz/faq/what-process-has-open-linux-port/

listen port
```
netstat -tulpn
```

# tar

指定目錄
* tar zxvf xxx.tar.gz -C path_to_dir
去掉目錄
* tar zxvf  xxx.tar.gz --strip 3

* tar zcvf release.tar.gz -C parent target

# wget
ssl
* http://stackoverflow.com/questions/28757232/unable-to-establish-ssl-connection-upon-wget-on-ubuntu-14-04-lts

# lftp
mirror 下載目錄
mirror -R 上傳目錄
set net:limit-rate 2M  限制速度 2M/s

# kill process
* ps aux | grep apache | awk ‘{print $2}’ | xargs kill -9
* ps -C apache2 -o pid=|xargs kill -9

# Makefile
```
DOLLAR:=$$
dollar:
  echo '$$'  >  $@
  echo "\$$" >> $@
  echo '$(DOLLAR)'  >> $@
  echo "\$(DOLLAR)" >> $@
  cat dollar
```



# crontab
* http://crontab.guru/


# estimate file space usage
du -a . | sort -n -r | head -n 50
du --max-depth=1 -a . | sort -n -r | head -n 50

/User/lin/Libraries/Caches
/User/lin/Libraries/Logs


# rlwrap
readline wrapper
* http://superuser.com/questions/82408/sqlite-with-readline-support-on-ubuntu


# nvidia
* 下載driver http://www.nvidia.com.tw/Download/index.aspx?lang=tw
* $ sudo update-initramfs -u


# z-command

看 log.gz

zgrep, zcat, zegrep, zmore, zless


# nmap

* https://www.digitalocean.com/community/tutorials/how-to-use-nmap-to-scan-for-open-ports-on-your-vps


# editor

* select-editor
* sudo update-alternatives --config editor


sudo update-initramfs -u
