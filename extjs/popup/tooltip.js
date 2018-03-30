(function() {
'use strict';
Ext.ns('qnap.popup');


let panel = new Ext.Panel({
    items: [
        {
            xtype: 'box',
            id: 'box1',
            width: 300,
            height: 200,
            html: 'Box1',
        },
        {
            xtype: 'box',
            width: 300,
            height: 200,
            html: 'Box2',
        },
    ],
    listeners: {
        afterrender() {
            new Ext.ToolTip({
                target: 'box1',
                html: 'Hello World',
            });

            new Ext.ToolTip({
                target: this.items.get(1).getEl(),
                trackMouse: true,
                html: `
                <table>
                <thead>
                <tr> <th>Foo</th><th>Bar</th><th>XXX</th> </tr>
                </thead>
                <tbody>
                <tr> <td>A</td><td>B</td><td>C</td> </tr>
                <tr> <td>D</td><td>E</td><td>F</td> </tr>
                <tr> <td>G</td><td>H</td><td>I</td> </tr>
                </tbody>
                </table>
                `,
            });
        },
    },
});


Ext.QuickTips.init();
qnap.popup.tooltip = panel;

}());
