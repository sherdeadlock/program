(function () {
'use strict';
Ext.ns('qnap.grid');


let store = new Ext.data.GroupingStore({
    url: 'fixtures/users.json',
    autoLoad: true,
    reader: qnap.fixtures.userReader,
    sortInfo: {
        field: 'id',
        direction: 'DESC',
    },
});


let grid = new Ext.grid.GridPanel({
    store,
    stripeRows: true,  // zebra style
    view: new Ext.grid.GroupingView({
        forceFit:true,
        groupTextTpl: '{group} ({[values.rs.length]} {[values.rs.length > 1 ? "Users" : "User"]})',
    }),
    colModel: qnap.fixtures.userColModel,
});

store.groupBy('active', false, 'DESC');

qnap.grid.group = grid;

}());
