Ext.ns('qnap.fx');


let Fade = Ext.extend(Ext.Panel, {
    initComponent() {
        let self = this;
        self.items = [
            {
                id: 'rbox',
                ref: 'rbox',
                xtype: 'box',
                width: 200,
                height: 200,
                style: {
                    background: 'red',
                },
            },
            {
                xtype: 'button',
                text: 'Fade Out',
                handler() {
                    self.rbox.el.fadeOut({
                        endOpacity: 0,
                        duration: 2,
                    });
                },
            },
            {
                xtype: 'button',
                text: 'Fade In',
                handler() {
                    self.rbox.el.fadeIn({
                        endOpacity: 1,
                        duration: 2,
                    });
                },
            },
            {
                xtype: 'button',
                text: 'Frame',
                handler() {
                    self.rbox.el.frame('blue', 3);
                },
            },
        ];

        Fade.superclass.initComponent.call(this);
    },
});

let fade = new Fade();

let panel = new Ext.Panel({
    layout: {
        type: 'hbox',
        align: 'stretch',
    },
    items: [
        fade,
    ],
});

qnap.fx.transition = panel;

