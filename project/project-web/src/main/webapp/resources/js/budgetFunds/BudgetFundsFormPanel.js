Ext.ns('Ext.project');
Ext.project.BudgetFundsFormPanel = Ext.extend(Ext.FormPanel, {
	constructor : function(_config) {
		Ext.apply(this, _config || {});

		Ext.project.BudgetFundsFormPanel.superclass.constructor.call(this, {
			frame : true,
			labelWidth : 100,
			defaults : {
				anchor : '95%',
				bodyStyle : 'border:0px;'
			},
			bodyStyle : 'border:0px;',
			layout : 'form',
			// 把窗口显示的东西放到数组里
			items : [ {
				name : 'id',
				xtype : 'hidden'
			}, {
                xtype : 'textfield',
                fieldLabel : '建设内容',
                name : 'buildContent',
                allowBlank : false
            }, {
                xtype : 'textfield',
                fieldLabel : '省财政投入',
                name : 'province',
                allowBlank : false
            }, {
                xtype : 'textfield',
                fieldLabel : '市财政投入',
                name : 'city',
                allowBlank : false
            }/*, {
                fieldLabel : '举办方投入',
                name : 'having',
                xtype : 'textfield',
                allowBlank : false
            }, {
                fieldLabel : '行业企业投入',
                name : 'enterprice',
                xtype : 'textfield',
                allowBlank : false
            }, {
                fieldLabel : '其他投入',
                name : 'other',
                xtype : 'textfield',
                allowBlank : false
            }*/, {
                fieldLabel : '年度',
                name : 'annual',
                xtype : 'textfield',
                allowBlank : false
            }]
		});



	}
});