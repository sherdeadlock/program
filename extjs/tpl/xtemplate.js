(function() {
'use strinct';
Ext.ns('qnap.tpl');

let store = new Ext.data.Store({
    url: 'fixtures/users.json',
    autoLoad: true,
    reader: qnap.fixtures.userReader,
});


let view = new Ext.DataView({
    store: store,
    tpl: `
    <h1>Hello</h1>
    <tpl for=".">
        <div>Index:{#}</div>
        <div>{id}</div>
        <tpl if="active">
            <div><b>{name}</b></div>
        </tpl>
        <tpl if="!active">
            <div>{name}</div>
        </tpl>
        <br>
    </tpl>
    `,
});


qnap.tpl.xtemplate = view;

}());
