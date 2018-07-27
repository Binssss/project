Ext.ns('Ext.project');
Ext.project.AssignmentBookFormPanel = Ext.extend(Ext.FormPanel, {
	constructor : function(_config) {
		Ext.apply(this, _config || {});

		Ext.project.AssignmentBookFormPanel.superclass.constructor.call(this, {
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
                fieldLabel : '子项目',
                name : 'name',
                allowBlank : false
            }, {
                fieldLabel : '经费预算',
                name : 'budget',
                xtype : 'textfield',
                allowBlank : false
            }, {
                fieldLabel : '项目大类别',
                name : 'projectType',
                xtype : 'textfield',
                allowBlank : false
            }, {
                fieldLabel : '项目负责人',
                name : 'leader',
                xtype : 'textfield',
                allowBlank : false
            }, {
                fieldLabel : '预期成果',
                name : 'acceptance',
                xtype : 'textarea',
                height : 150,
                allowBlank : false
            }]
		});



	}
});