Ext.ns('qnap.grid');


let store = new Ext.data.JsonStore({
    url: 'fixtures/users.json',
    autoLoad: true,
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


const CheckModel = Ext.extend(Ext.grid.CheckboxSelectionModel, {
    // override: toggle the selected row
    handleMouseDown(g, rowIndex, e) {
        if(e.button !== 0 || this.isLocked()){
            return;
        }
        var view = this.grid.getView();
        if(e.shiftKey && !this.singleSelect && this.last !== false){
            var last = this.last;
            this.selectRange(last, rowIndex, e.ctrlKey);
            this.last = last; // reset the last
            view.focusRow(rowIndex);
        }else{
            var isSelected = this.isSelected(rowIndex);
            if(isSelected){
                this.deselectRow(rowIndex);
            }else {
                this.selectRow(rowIndex, true);
                view.focusRow(rowIndex);
            }
        }
    },
});

let sm = new CheckModel({
    // checkOnly: true,
    // singleSelect: false,
});


let grid = new Ext.grid.GridPanel({
    store,
    stripeRows: true,  // zebra style
    disableSelection: true,
    enableColumnHide: false,
    enableColumnMove: false,
    enableHdMenu: false,
    sm,
    colModel: new Ext.grid.ColumnModel({
        defaults: {
            sortable: true,
        },
        columns: [
            sm,
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
        ],
    }),
});

qnap.grid.simple = grid;


