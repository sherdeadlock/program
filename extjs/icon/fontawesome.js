(function() {
    'use strict';
    Ext.ns('qnap.icon');

    var FAIcon = Ext.extend(Ext.Component, {
        autoEl: 'i'
    });

    var userIcon = new FAIcon({
          cls: 'fas fa-user'
        , style: 'font-size: 3rem'
    });

    var panel = new Ext.Panel({
        items: [
            userIcon
        ]
    });

    qnap.icon.fontawesome = panel;
}());
