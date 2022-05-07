# Required packages

```
$ apt install qemu-kvm libvirt-daemon-system virtinst
```

# libvirt usage

## Machine

Create VM

```
$ virt-install --name kvm1 --ram 1024 --disk debian.img,format=raw --graphics vnc,listen=0.0.0.0 --noautoconsole --hvm --import
```

List VM

```
$ virsh list --all
```

Start VM

```
$ virsh start kvm1
```

Stop VM

```
$ virsh shutdown kvm1
$ virsh destroy kvm1
```

Remove VM

```
$ virsh undefine kvm1
```

Edit VM

```
$ virsh edit kvm1
```

Enable Virsh Console Access For KVM Guests

```
guest$ systemctl enable serial-getty@ttyS0.service
guest$ systemctl start serial-getty@ttyS0.service
```

Connect to VM

```
$ virsh console kvm1
```

Get VNC display port

```
$ virsh vncdisplay kvm1
$ virsh domdisplay kvm1
```

Show info

```
$ virsh dominfo kvm1
```

Enable autostart VM

```
$ virsh autostart kvm1
```

Disable autostart VM

```
$ virsh autostart kvm1 --disable
```

## Disk

Create Disk

```
$ qemu-img create -f qcow2 disk2.img 8g
```

Attach Disk

```
$ virsh attach-disk vm_name disk.img vdc --live --persistent
```

Detach Disk

```
$ virsh detach-disk kvm1 vda --live
```


## Network

List network

```
$ virsh net-list --all
```

Start network

```
$ virsh net-start default
```

Get IP

```
$ virsh net-info default
$ virsh net-dhcp-leases default
```

