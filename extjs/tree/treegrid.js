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
		var max = Math.min(20, users.length);
        for (let i = 0, len = max; i < len; i++) {
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

const MyTree = Ext.extend(Ext.ux.tree.TreeGrid, {
	updateColumnWidths2: function() {
		console.log('width', this.getWidth());
		console.log('innerWidth', this.getInnerWidth());
		console.log('frameWidth', this.getFrameWidth());
		console.log('height', this.getHeight());
		console.log('innerHeight', this.getInnerHeight());
		console.log('frameHeight', this.getFrameHeight());
		console.log(this.mainHd);
		console.log(this.innerHd);
		console.log(this.scrollOffset);
		console.log(this.innerBody, this.innerBody.dom.scrollHeight, this.innerBody.dom.clientHeight);
		console.log('innerCt', this.innerCt, this.innerCt.dom.scrollHeight, this.innerCt.dom.clientHeight);

		var hasVScrollBar = this.innerBody.dom.scrollHeight > this.innerBody.dom.clientHeight;
		var cs = this.columns.filter(function(c) { return !c.hidden; });
		var TableMaxWidth = this.getWidth() - this.scrollOffset;
		console.log('mainHd width', this.mainHd.getWidth());
		console.log('innerHd width', this.innerHd.getWidth());
		console.log('scrollOffset', this.scrollOffset);
		console.log('TableMaxWidth', TableMaxWidth);

		var totalScore = cs.reduce(function(sum, c) { return sum + c.width; }, 0);
		var widthSum = 0;
		cs.forEach(function(c) {
			var score = c.width;
			var width = Math.floor(TableMaxWidth * score / totalScore);
			widthSum += width;
			c.width = width;
		});
		if (!hasVScrollBar && this.scrollOffset) {
			cs[cs.length - 1].width += (this.scrollOffset - 2);
		}

		console.log(cs);

		MyTree.superclass.updateColumnWidths.call(this);
	}
});

let tree = new MyTree({
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
			minWidth: 300,
			maxWidth: 400,
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
