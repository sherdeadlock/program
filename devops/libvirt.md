# Required packages

$ apt install libvirt-bin libvirt-doc virtinst qemu

# libvirt usage

## Machine

Create VM
$ virt-install --name kvm1 --ram 1024 --disk debian.img,format=raw --graphics vnc,listen=0.0.0.0 --noautoconsole --hvm --import

$ virsh list --all

Start VM
$ virsh start kvm1

Stop VM
$ virsh destroy kvm1

Remove VM
$ virsh undefine kvm1

Connect to VM
$ virsh console kvm1

Show info
$ virsh dominfo kvm1

Enable autostart VM
$ virsh autostart kvm1

Disable autostart VM
$ virsh autostart kvm1 --disable

## Network

$ virsh net-list --all
$ virsh net-start default

Get  IP
$ virsh net-info default
$ virsh net-dhcp-leases default

## Disk

Create Disk
$ qemu-img create -f qcow2 disk2.img 8g

Attach Disk
$ virsh attach-disk vm_name disk.img vdc

Detach Disk
$ virsh detach-disk kvm1 vda --live

