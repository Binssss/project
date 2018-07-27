Ext.ns('Ext.project');
Ext.project.QuantitativeIndexFinishFormPanel = Ext.extend(Ext.FormPanel, {
	constructor : function(_config) {
		Ext.apply(this, _config || {});

		Ext.project.QuantitativeIndexFinishFormPanel.superclass.constructor.call(this, {
			frame : true,
            fileUpload:true,
			labelWidth : 100,
			defaults : {
                xtype : 'textfield',
                anchor : '90%',
                disabledClass:'txtDisabled'
			},
			bodyStyle : 'border:0px;',
			layout : 'form',
			// 把窗口显示的东西放到数组里
            items : [ {
                name : 'id',
                xtype : 'hidden'
            }, {
                fieldLabel : '指标名称(单位)',
                name : 'name',
                xtype : 'textfield',
                allowBlank : false
            }, {
                fieldLabel : '说明',
                name : 'desc',
                xtype : 'textfield',
                allowBlank : false
            }, {
                fieldLabel : '年度',
                name : 'time',
                xtype : 'datefield',
                format : 'Y',
                allowBlank : false
            }, {
                fieldLabel : '基础',
                name : 'basic',
                xtype : 'textfield',
                allowBlank : false
            }, {
                fieldLabel : '预期目标',
                name : 'target',
                xtype : 'textfield',
                allowBlank : false
            }]

		});
	}
});