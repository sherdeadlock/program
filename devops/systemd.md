# systemd

# Resources

## Tutorial

* https://www.digitalocean.com/community/tutorials/how-to-use-systemctl-to-manage-systemd-services-and-units
* http://www.ibm.com/developerworks/cn/linux/1407_liuming_init3/index.html
* https://www.digitalocean.com/community/tutorials/systemd-essentials-working-with-services-units-and-the-journal
* $ man systemd.service

## Auto Restart

* http://northernlightlabs.se/systemd.status.mail.on.unit.failure !!!
* https://www.freedesktop.org/software/systemd/man/systemd.unit.html
* https://www.freedesktop.org/software/systemd/man/systemd.kill.html
* https://www.freedesktop.org/software/systemd/man/systemd.service.html
* http://alanthing.com/blog/2017/05/03/auto-restart-tomcat-with-systemd/ tomcat
* https://serverfault.com/questions/694818/get-notification-when-systemd-monitored-service-enters-failed-state

RestartSec  This value is how long to sleep before restarting the service. The default is only 100ms,
so I like to set it higher to allow for a busy operation to continue before systemd gets too aggressive 
with restarting.

## nodejs

* https://www.digitalocean.com/community/tutorials/how-to-deploy-node-js-applications-using-systemd-and-nginx
* https://www.digitalocean.com/community/tutorials/how-to-use-pm2-to-setup-a-node-js-production-environment-on-an-ubuntu-vps
