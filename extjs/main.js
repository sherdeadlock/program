import './fixtures/fixtures.js';
import './util.js';
import './form/module.js';
import './tree/module.js';
import './d3/module.js';
import './func/module.js';
import './fx/module.js';
import './grid/module.js';
import './popup/module.js';
import './tpl/module.js';
import './icon/module.js';


/**
 * List all examples.
 */
const TreeNav = Ext.extend(Ext.tree.TreePanel, {
	width: 300,
    rootVisible:false,
	autoScroll:true,

	initComponent() {
		TreeNav.superclass.initComponent.call(this);
		this.addEvents('pagechanged');
		this.on('click', this.onClick, this);
	},

	onClick(node, event) {
		if (node.leaf) {
			const {main, jsFiles, cssFiles=[]} = node.attributes;
            // load js
			// Ext.Loader.load(jsFiles, () => {
			// 	this.fireEvent('pagechanged', main, jsFiles);
			// }, null, true);
			this.fireEvent('pagechanged', main, jsFiles);

            // load css
            for (var i = 0, len = cssFiles.length; i < len; i++) {
                let css = cssFiles[i];
                let id = main + i;
                Ext.util.CSS.swapStyleSheet(id, css);
            }
		}
	},
});


/**
 * Each page has a example.
 */
const PageView = Ext.extend(Ext.Container, {
	flex: 1,
	layout: 'card',

	loadPage(pageNS) {
		const page = qnap.util.loadNS(pageNS);
		if (page == null) {
			Ext.MessageBox.alert(String.format('page not found {0}', pageNS));
			return;
		}

		if (!page.rendered) {
			this.items.add(page);
		}

		this.layout.setActiveItem(page.id);
	},
});


let main = function () {
	let treeNav = new TreeNav({
        requestMethod: 'GET',
        dataUrl:'pages.json',
        root: new Ext.tree.AsyncTreeNode(),
    });
	let pageView = new PageView();
	let rootView = new Ext.Viewport({
		renderTo: Ext.getBody(),
		layout: {
			type: 'hbox',
			align: 'stretch',
		},
		items: [
			treeNav,
			pageView,
		],
	});

	treeNav.on('pagechanged', pageView.loadPage.bind(pageView));
	treeNav.getRootNode().expand(true);
};

Ext.onReady(main);
