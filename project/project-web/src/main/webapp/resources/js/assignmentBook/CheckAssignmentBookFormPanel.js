Ext.ns('Ext.project');
Ext.project.CheckAssignmentBookFormPanel = Ext.extend(Ext.form.FormPanel, {
	constructor : function(_config) {
		Ext.apply(this, _config || {});

        this.project = new Ext.data.JsonStore({
            url : 'project/application/queryApplication',
            fields : ['id','name']/*,
            data : [
                {id : '1',project : '大数据'},
                {id : '2',project : '云计算'},
                {id : '3',project : '人工智能'},
                {id : '4',project : '智能监控'}
            ]*/
        });

		Ext.project.CheckAssignmentBookFormPanel.superclass.constructor.call(this, {
			frame : true,
            fileUpload:true,
			labelWidth : 100,
			defaults : {
				anchor : '95%',
				bodyStyle : 'border:0px;'
			},
			bodyStyle : 'border:0px;',
			layout : 'form',
			// 把窗口显示的东西放到数组里
			items : [{
                name : 'id',
                xtype : 'hidden'
            }, {
                xtype : 'displayfield',
                fieldLabel : '子项目',
                name : 'name',
                allowBlank : false
            }, {
                fieldLabel : '经费预算',
                name : 'budget',
                xtype : 'displayfield',
                allowBlank : false
            }, {
                fieldLabel : '项目大类别',
                name : 'projectType',
                xtype : 'displayfield',
                allowBlank : false
            }, {
                fieldLabel : '项目负责人',
                name : 'leader',
                xtype : 'displayfield',
                allowBlank : false
            }, {
                fieldLabel : '预期成果',
                name : 'acceptance',
                xtype : 'displayfield',
                height : 150,
                allowBlank : false
            },{
                xtype : 'radiogroup',
                fieldLabel : '审核',
                name : 'status',
                items : [{
                    boxLabel : '通过',
                    name : 'status',
                    inputValue : 1
                }, {
                    boxLabel : '退回',
                    name : 'status',
                    inputValue : 0
                }]

            }]
		});
	}
});