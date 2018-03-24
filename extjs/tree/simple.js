(function() {
'use strict';
Ext.ns('qnap.tree');

qnap.tree.simple = new Ext.tree.TreePanel({
	width: 550,
	height: 300,
	rootVisible:false,
	autoScroll:true,
	title: 'Example Tasks',

	loader: new Ext.tree.TreeLoader({
		requestMethod: 'GET',
		dataUrl:'fixtures/folders.json',
	}),

	root: new Ext.tree.AsyncTreeNode({
		text:'Tasks'
	}),
});

}());
