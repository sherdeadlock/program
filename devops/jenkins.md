# install

```
#!/usr/bin/env bash
# wget http://mirrors.jenkins-ci.org/war-stable/latest/jenkins.war
DIR=/path/to/jenkins
export JENKINS_HOME=$DIR/home
nohup java -jar $DIR/jenkins.war --httpPort=8091 > $DIR/log 2>&1 &
```

# shutdown

http://jenkins/exit

# docker

```bash
docker run -d --name jenkins-data myjenkins echo "data-only container for Jenkins"
docker run -d --name jenkins --link nexus:nexus -p 8080:8080 --volumes-from jenkins-data myjenkins

docker run -p 8080:8080 -v /your/home:/var/jenkins_home jenkins
```


# plugins

- [EnvInject](https://wiki.jenkins-ci.org/display/JENKINS/EnvInject+Plugin)
- [Dynamic Parameter Plug-in](https://wiki.jenkins-ci.org/display/JENKINS/Dynamic+Parameter+Plug-in)
- [Embeddable Build Status Plugin](https://wiki.jenkins-ci.org/display/JENKINS/Embeddable+Build+Status+Plugin)
- [GitHub pull request builder plugin](https://wiki.jenkins-ci.org/display/JENKINS/GitHub+pull+request+builder+plugin)
- [JobConfigHistory Plugin](https://wiki.jenkins-ci.org/display/JENKINS/JobConfigHistory+Plugin)
- [Job GeneratorPlugin](https://wiki.jenkins-ci.org/display/JENKINS/Job+Generator+Plugin)  job template
- [Travis YML Plugin](https://wiki.jenkins-ci.org/display/JENKINS/Travis+YML+Plugin)
- [Parameterized Trigger Plugin](https://wiki.jenkins-ci.org/display/JENKINS/Parameterized+Trigger+Plugin)
- [Shared workspace plugin](https://wiki.jenkins-ci.org/display/JENKINS/Shared+workspace+plugin)
- [AnsiColor Plugin](https://wiki.jenkins-ci.org/display/JENKINS/AnsiColor+Plugin)
- [Docker Plugin](https://wiki.jenkins-ci.org/display/JENKINS/Docker+Plugin)
- [SCM Sync Configuration Plugin](https://wiki.jenkins-ci.org/display/JENKINS/SCM+Sync+configuration+plugin)
- [Git Plugin](https://wiki.jenkins-ci.org/display/JENKINS/Git+Plugin)
- Gitlab
	- [Gitlab Merge Request Builder Plugin](https://wiki.jenkins-ci.org/display/JENKINS/Gitlab+Merge+Request+Builder+Plugin)
	- [GitLab Plugin](https://wiki.jenkins-ci.org/display/JENKINS/GitLab+Plugin) build trigger that makes GitLab think Jenkins is a GitLab CI.
	- [Gitlab Hook Plugin](https://wiki.jenkins-ci.org/display/JENKINS/Gitlab+Hook+Plugin) trigger SMC polling on Gitlab projects
- code quality
	- [sonarqube](http://www.sonarqube.org/)
- notify
	- [Email-ext plugin](https://wiki.jenkins-ci.org/display/JENKINS/Email-ext+plugin)
	- [Instant Messaging Plugin](https://wiki.jenkins-ci.org/display/JENKINS/Instant+Messaging+Plugin)
	- [Jabber Plugin](https://wiki.jenkins-ci.org/display/JENKINS/Jabber+Plugin)


# 避免anonymouse看到job

* 使用 matrix, 開一個 admin 勾選所有權限
* anonymous uncheck all auth
* 如果使用Jenkins內建資料庫，開完帳號要關閉`允許使用者註冊`


# jenkins systemd

* `$ sudo useradd --system --shell /usr/sbin/nologin --user-group --base-dir /opt --create-home jenkins`
* `$ wget http://mirrors.jenkins-ci.org/war-stable/latest/jenkins.war /usr/share/java/jenkins-2.60.3.war`
* `$ sudo vi /etc/systemd/system/jenkins.service`

```
[Unit]
Description=Jenkins Daemon

[Service]
ExecStart=/usr/bin/java -jar /usr/share/java/jenkins-2.60.3.war --httpPort=8082
User=jenkins

[Install]
WantedBy=multi-user.target
```

# Resources

* https://www.udemy.com/working-with-jenkins
* https://wiki.jenkins-ci.org/display/JENKINS/Installing+Jenkins+as+a+Unix+daemon
