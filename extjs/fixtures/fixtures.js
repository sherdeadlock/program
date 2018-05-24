Ext.ns('qnap.fixtures');

qnap.fixtures.userReader = new Ext.data.JsonReader({
    fields: [
        {
            name: 'id',
            type: 'int',
        },
        {
            name: 'name',
            type: 'string',
        },
        {
            name: 'money',
            type: 'float',
        },
        {
            name: 'active',
            type: 'boolean',
        },
        {
            name: 'birthday',
            type: 'date',
        },
    ],
});

qnap.fixtures.userColumns = [
    {
        header: 'ID',
        dataIndex: 'id',
        renderer: function(value, metaData, record, rowIndex, colIndex, store) {
            return String.format('({0})', value);
        },
    },
    {
        xtype: 'templatecolumn',
        header: 'Name',
        dataIndex: 'name',
        tpl: '<b>{name}</b>',
    },
    {
        xtype: 'numbercolumn',
        header: 'Money',
        dataIndex: 'money',
    },
    {
        xtype: 'booleancolumn',
        header: 'Active',
        dataIndex: 'active',
    },
    {
        xtype: 'datecolumn',
        header: 'Birthday',
        dataIndex: 'birthday',
        format: 'Y/m/d',
    },
    {
        xtype: 'actioncolumn',
        items: [
            {
                icon: 'lib/ext-3.4.1/resources/images/default/grid/refresh.gif',
                tooltip: 'Refresh',
                handler: function () { console.log('refresh'); },
            },
        ],
    },
];

qnap.fixtures.userColModel = new Ext.grid.ColumnModel({
    columns: qnap.fixtures.userColumns,
});

