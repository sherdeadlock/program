var main = function () {
	var navPanel = new Ext.tree.TreePanel({
		width: 300,
		root: {
			text: 'Ext JS',
			id: 'source',
		},
	});
	var helloPanel = new Ext.Panel({
		flex: 1,
		html: 'Hello, World!',
	});
	var rootView = new Ext.Viewport({
		renderTo: Ext.getBody(),
		layout: {
			type: 'hbox',
			align: 'stretch',
		},
		items: [
			navPanel,
			helloPanel,
		],
	});
};

Ext.onReady(main);
