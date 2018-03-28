(function() {
'use strict';
Ext.ns('qnap.tree');


const Sorter = Ext.extend(Ext.ux.tree.TreeGridSorter, {
    constructor : function(tree, config) {
        Sorter.superclass.constructor.call(this, tree, config);

        // remove header hook to prevent sorting
        tree.un('headerclick', this.onHeaderClick, this);
        tree.un('afterrender', this.onAfterTreeRender, this);
        tree.un('headermenuclick', this.onHeaderMenuClick, this);
    }
});


const TreeStore = function TreeStore() {
    this.tree = null;
    this.sorter = null;

    this.init = () => {
        this.sorter = new Sorter(this.tree, {
            // sort by uid
            property: 'uid',
            folderSort: false,
            sortType: 'asInt',
        });
    };

    this.onUpdate = () => {
        let node = this.tree.root.item(0);
        if (!node.isExpanded()) {
            node.expand(false);
        }

        let child = node.item(1);
        child.getUI().elNode.children[1].textContent = "____UPDATE____";

        console.log('update', this.tree.update);
    };

    this.groupByUidModular = (users) => {
        let groups = {};
        for (let i = 0, len = users.length; i < len; i++) {
            let user = users[i];
            user.leaf = true;
            user.uid = user.id;
            delete user.id;
            let groupId = user.uid % 4;
            let defaultGroup = {
                // id: groupId,
                name: 'Group ' + groupId,
                children: [],
            };
            let group = groups[groupId] || defaultGroup;
            group.children.push(user);
            groups[groupId] = group;
        }
        return Object.values(groups);
    };

    this.load = (callback) => {
        Ext.Ajax.request({
            methos: 'GET',
            url: 'fixtures/users.json',

            success: (response, request) => {
                let users = JSON.parse(response.responseText);
                let result = this.groupByUidModular(users);
                callback(result, response);
            },
        });
    };
};

let store = new TreeStore();

let tree = new Ext.ux.tree.TreeGrid({
    tbar: new Ext.Toolbar(),
    store,
    rootVisible: false,
    enableSort: false,
    columns: [
        {
            header: 'Name',
            dataIndex: 'name',
            width: 200,
            sortable: false, // prevent overriding enableSort
        },
        {
            xtype: 'numbercolumn', // it will be replaced with tgnumbercolumn
            header: 'Money',
            dataIndex: 'money',
            width: 200,
            sortable: false,
        },
        {
            header: 'Active',
            dataIndex: 'active',
            width: 200,
            sortable: false,
        },
        {
            header: 'Birthday',
            dataIndex: 'birthday',
            width: 200,
            sortable: false,
        },
        {
            header: 'ID',
            dataIndex: 'uid',
            width: 200,
            sortable: false,
        },
    ],

    loader: new Ext.ux.tree.TreeGridLoader({
        directFn(nodeId, callback) {
            store.load(callback);
        },
    }),

    listeners: {
        afterrender() {
            this.getTopToolbar().insertButton(0, [
                {
                    xtype: 'button',
                    text: 'Update',
                    handler: this.store.onUpdate,
                }
                , {
                    xtype: 'button',
                    text: 'Collapse All',
                    handler: this.collapseAll.createDelegate(this),
                }
                , {
                    xtype: 'button',
                    text: 'Expand All',
                    handler: this.expandAll.createDelegate(this),
                }
            ]);

            this.store.init();

            this.expandAll();
        },
    },
});

tree.store = store;
store.tree = tree;


qnap.tree.treegrid = tree;

}());
