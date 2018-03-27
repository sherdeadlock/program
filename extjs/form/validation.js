Ext.ns('qnap.form');

qnap.form.validation = new Ext.FormPanel({
      'title'       : 'Hello'
    , 'frame'       : true
    , 'items'       : [
        {
              'xtype'       : 'textfield'
            , 'fieldLabel'  : 'No Blank'
            , 'name'        : 'user'
            , 'allowBlank'  : false
        }
        , {
              'xtype'       : 'textfield'
            , 'fieldLabel'  : 'Alpha'
            , 'name'        : 'password'
            , 'vtype'       : 'alpha'
        }
        , {
              'xtype'       : 'textfield'
            , 'fieldLabel'  : 'Custom'
            , 'name'        : 'directory'
            , 'vtype'       : 'name'
        }
        , {
              'xtype'       : 'datefield'
            , 'fieldLable'  : 'Birthday'
            , 'name'        : 'birthday'
            , 'disabledDays': [0, 6]
        }
    ],
});

Ext.apply(Ext.form.VTypes, {
      nameVal   : /^[A-Z][A-Za-z]+\s[A-Z][A-Za-z]+$/
    , nameMask  : /[A-Za-z ]/
    , nameText  : 'Invalid directory name'
    , name      : function(v) {
        return this.nameVal.test(v);
    }
});

