(function() {
'use strict';
Ext.ns('qnap.tree');

var TreexNodeUI = Ext.extend(Ext.tree.TreeNodeUI, {
    refreshUI: function() {
        var me = this;
        var node = me.node;
        var attr = node.attributes;
        var tree = node.getOwnerTree();
        tree.refreshNodeUI.call(tree, node, attr, me);
    }
});

var RootTreexNodeUI = Ext.extend(Ext.tree.RootTreeNodeUI, {
    refreshUI: function() {
        var me = this;
        var node = me.node;
        var attr = node.attributes;
        var tree = me.getOwnerTree();
        tree.refreshNodeUI.call(tree, node, attr, me);
    }
});

var TreexNode = Ext.extend(Ext.tree.TreeNode, {
      defaultUI: TreexNodeUI
    , refresh: function(next) {
        next = next || me.attributes;
        var me = this;
        var prev = me.attributes;
        var i = 0;
        var prevLen = me.childNodes.length;
        var nextLen = next.children && next.children.length || 0;
        var len = Math.min(prevLen, nextLen);

        // Update exist node
        while (i < len) {
            var childNode = me.item(i);
            childNode.refresh(next.children[i]);
            i++;
        }

        // Add node
        while (i < nextLen) {
            var childNode = new TreexNode();
            me.appendChild(childNode);
            childNode.refresh(next.children[i]);
            i++;
        }

        // Remove node
        while (--prevLen >= i) {
            var childNode = me.item(prevLen);
            childNode.remove(true);
        }

        Ext.apply(prev, next);
        me.ui.refreshUI();
    }
});

var RootTreexNode = Ext.extend(TreexNode, {
    uiProvider: RootTreexNodeUI
});


var tree = new Ext.tree.TreePanel({
	  width: 500
	, height: 500
	, rootVisible:false
	, autoScroll:true
	, title: 'Example Tasks'
	, root: new RootTreexNode({text: 'Tasks'})
    , refresh: function(data) { this.root.refresh(data); }
    , refreshNodeUI: function(node, attr, ui) {
        node.setText(attr.value);
    }
});

var data1 = {
    value: 'root 1',
    children: [
        {
            value: '1',
            children: [
                {
                    value: '1.1',
                    leaf: true
                },
                {
                    value: '1.2',
                    leaf: true
                },
                {
                    value: '1.3',
                    leaf: true
                },
            ]
        },
        {
            value: '2',
            children: [
                {
                    value: '2.1',
                    leaf: true
                },
                {
                    value: '2.2',
                    leaf: true
                },
                {
                    value: '2.3',
                    leaf: true
                },
            ]
        },
        {
            value: '3',
            children: [
                {
                    value: '3.1',
                    leaf: true
                },
                {
                    value: '3.2',
                    leaf: true
                },
                {
                    value: '3.3',
                    leaf: true
                },
            ]
        }
    ]
};

var data2 = {
    value: 'root 1',
    children: [
        {
            value: '1',
            children: [
                {
                    value: '1.1',
                    leaf: true
                },
                {
                    value: '1.2',
                    leaf: true
                },
                {
                    value: '1.3',
                    leaf: true
                },
            ]
        },
        {
            value: '2',
            children: [
                {
                    value: '2.1',
                    leaf: true
                },
                {
                    value: '2.2',
                    leaf: true
                },
            ]
        },
        {
            value: '3',
            children: [
                {
                    value: '3.3',
                    leaf: true
                },
            ]
        }
    ]
};


var panel = new Ext.Panel({
    items: [
        {
              xtype: 'button'
            , text: 'Load Data 1'
            , handler() {
                tree.refresh(data1);
            }
        }
        , {
              xtype: 'button'
            , text: 'Load Data 2'
            , handler() {
                tree.refresh(data2);
            }
        }
        , tree
    ],
});


qnap.tree.databinding = panel;

}());

