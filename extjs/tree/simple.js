(function() {
'use strict';
Ext.ns('qnap.tree');

var tree = new Ext.tree.TreePanel({
	width: 200,
	height: 100,
	rootVisible:false,
	autoScroll:true,
	title: 'Example Tasks',

	loader: new Ext.tree.TreeLoader({
		requestMethod: 'GET',
		dataUrl:'fixtures/folders.json',
        preloadChildren: true,
	}),

	root: new Ext.tree.AsyncTreeNode({
		text:'Tasks'
	}),
});

tree.expandAll();


var panel = new Ext.Panel({
    items: [
        {
              xtype: 'button'
            , text: 'Select Child Node'
            , handler() {
                var node = tree.root.findChild('id', 3, true);
                // if (!node.parentNode.expanded) {
                //     node.parentNode.expand();
                // }
                node.select();

                console.log(tree.selModel);
            }
        }
        , tree
    ],
});


qnap.tree.simple = panel;

}());
