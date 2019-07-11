# Required packages

$ apt install qemu grub-pc debootstrap

# Install debian on the image with debootstrap

$ qemu-img create -f raw debian.img 10G
$ qemu-nbd --format=raw --connect=/dev/nbd0 debian.img
$ sfdisk /dev/nbd0 << EOF
>,1024,82
>;
>EOF
$ mkswap /dev/nbd0p1
$ mkfs.ext4 /dev/nbd0p2
$ mount /dev/nbd0p2 /mnt/
$ debootstrap --arch=amd64 --include="openssh-server vim" stable /mnt/ http://httpredir.debian.org/debian/
$ mount --bind /dev/ /mnt/dev

$ chroot /mnt/
$ mount -t proc none /proc
$ mount -t sysfs none /sys
$ apt-get install -y --force-yes linux-image-amd64 grub2
$ grub-install /dev/nbd0 --force
$ update-grub2
$ passwd
$ echo "pts/0" >> /etc/securetty
$ systemctl set-default multi-user.target
$ echo "/dev/sda2 / ext4 defaults,discard 0 0" > /etc/fstab
$ umount /proc/ /sys/ /dev/
$ exit

$ grub-install /dev/nbd0 --root-directory=/mnt/debian/  --modules="biosdisk part_msdos" --force --target=i386-pc
$ sed -i 's/nbd0p2/sda2/g' /mnt/boot/grub/grub.cfg
$ umount /mnt
$ qemu-nbd --disconnect /dev/nbd0
$ virt-install --name kvm1 --ram 1024 --disk debian.img,format=raw --graphics vnc,listen=0.0.0.0 --noautoconsole --hvm --import
$ vi /etc/network/interfaces
auto lo
iface lo inet loopback

allow-hotplug ens3
iface ens3 inet dhcp

