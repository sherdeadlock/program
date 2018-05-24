Ext.ns('qnap.form');

const RenderField = Ext.extend(Ext.form.DisplayField, {
	renderer: Ext.emptyFn,

	setValue(v) {
		v = this.renderer(v);
		RenderField.superclass.setValue.call(this, v);
	},
});


const RadioGroup = Ext.extend(Ext.form.RadioGroup, {
	// override, return inputValue instead of item
    getValue(){
        var out = null;
        this.eachItem(function(item){
            if(item.checked){
                out = item.inputValue;
                return false;
            }
        });
        return out;
    },
});


const FormStore = Ext.extend(Object, {
	form: null,

	constructor: function (config) {
		Ext.apply(this, config);
	},

	loadData(data) {
		this.form.getForm().setValues(data);
	},

	getData() {
		return this.form.getForm().getFieldValues();
	},
});


let genres = new Ext.data.ArrayStore({
	fields: ['id', 'genre_name'],
	data : [
		[0, 'New Genre'],
		[1, 'Comedy'],
		[2, 'Drama'],
		[3, 'Action']
	],
});


let form = new Ext.FormPanel({
	title: 'My Form',
	defaults: {
		// default props for items
		xtype: 'displayfield',
		value: '--',  // default value
		width: 200,
	},
	items: [
		new RenderField({
			fieldLabel: 'FirstName',
			name: 'firstName',
			renderer(v) {
				return String.format('({0})', v);
			},
		}),
		{
			fieldLabel: 'LastName',
			name: 'lastName',
		},
		{
			xtype: 'textfield',
			inputType: 'password',
			fieldLabel: 'Password',
			name: 'password',
		},
		{
			  'xtype'       : 'datefield'
			, 'fieldLable'  : 'Birthday'
			, 'name'        : 'birthday'
			, 'disabledDays': [0, 6]
		},
	    new RadioGroup({
			columns: 1,
			fieldLabel: 'Filmed In',
			name: 'filmed_in',
			items: [{
				name: 'filmed_in',
				boxLabel: 'Color',
				inputValue: 1
			}, {
				name: 'filmed_in',
				boxLabel: 'Black & White',
				inputValue: 2
			}],
	    }),
		{
			xtype: 'checkbox',
			fieldLabel: 'Bad Movie',
			name: 'bad_movie'
		},
		{
			xtype: 'combo',
			name: 'genre',
			fieldLabel: 'Genre',
			mode: 'local',
			store: genres,
			displayField:'genre_name',
			valueField: 'id',
			autoSelect: false,
			triggerAction: 'all',
			// editable: false,
			value: null,
		},
	],
});


let output = new Ext.BoxComponent({
	flex: 1,
	tpl: '<pre><code class="json">{content}</code></pre>',
});


let data = {
	firstName: 'Neil',
	lastName: 'Lin',
	password: 'password',
	filmed_in: '2',
};


let store = new FormStore({form});


let loadBtn = new Ext.Button({
	text: 'Load',
	handler() {
		store.loadData(data);
	},
});


let printBtn = new Ext.Button({
	text: 'Print',
	handler() {
		let data = store.getData();
		output.update({content: JSON.stringify(data, null, 4)});
	},
});


let simple = new Ext.Container({
	layout: {
		type: 'vbox',
		align: 'stretch',
	},
	items: [
		{
			xtypes: 'box',
			html: 'update a form and retrieve data from it',
		},
		form,
		{
			xtype: 'buttongroup',
			frame: false,
			items: [
				loadBtn,
				printBtn,
			],
		},
		output,
	],
});

qnap.form.simple = simple;

