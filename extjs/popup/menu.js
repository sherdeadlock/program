Ext.ns('qnap.popup');

let panel = new Ext.Panel({
    html: 'Right Click',
    listeners: {
        afterrender(self) {
            self.m_contextMenu = new Ext.menu.Menu({
                items: [
                    {
                        text: 'A',
                        scope: self,
                        handler: self.onA,
                    }
                    , {
                        text: 'B',
                        scope: self,
                        handler: self.onB,
                        menu: {
                            items: [
                                {
                                    text: 'B.1',
                                    scope: self,
                                    handler: self.onB,
                                }
                                , {
                                    text: 'B.2',
                                    scope: self,
                                    handler: self.onB,
                                }
                            ],
                        }
                    }
                ],
            }),

            self.mon(self.el, 'contextmenu', self.onContextMenu, self);
        },
    },

    onContextMenu(event) {
        console.log(event);
        event.preventDefault();
        this.m_contextMenu.showAt(event.xy);
        return false;
    },

    onA(menu, event) {
        this.foo(menu.text);
    },

    onB(menu, event) {
        this.foo(menu.text);
    },

    foo(x) {
        console.log('foo', x);
    },
});

qnap.popup.contextmenu = panel;

