(function () {
'use strict';
Ext.ns('qnap.util');


qnap.util.loadNS = function (namespace) {
	return namespace.split('.').reduce((module, path) => module[path], window);
};


}());
