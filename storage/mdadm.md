# RAID (Redundant Array of Independent Disks)

* man mdadm
* https://raid.wiki.kernel.org/index.php/Linux_Raid
	* https://raid.wiki.kernel.org/index.php/Write-intent_bitmap
* http://www.tldp.org/HOWTO/Software-RAID-HOWTO.html
* https://www.kernel.org/doc/html/latest/admin-guide/md.html


# MD devices in sysfs

https://www.kernel.org/doc/html/latest/admin-guide/md.html#md-devices-in-sysfs

/sys/block/md_/



cat /proc/mdstat
mdadm --detail /dev/mdxxx
