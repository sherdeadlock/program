(function() {
    'use strict';
    Ext.ns('qnap.popup');


let panel = new Ext.Panel({
    items: [
        {
            xtype: 'button',
            text: 'Click ME',
            menu: {
                items: [
                    { text: 'foo' },
                    { text: 'bar' },
                    { text: 'xxx' },
                ],
            },
        },
    ],
});

qnap.popup.dropdown = panel;

}());
