Ext.ns('Ext.project');
Ext.project.AnalysisReportFormPanel = Ext.extend(Ext.form.FormPanel, {
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

		Ext.project.AnalysisReportFormPanel.superclass.constructor.call(this, {
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
                fieldLabel : '标题',
                name : 'title',
                xtype : 'textfield',
                allowBlank : false
            }, {
                fieldLabel : '内容',
                name : 'reportContent',
                height : 360,
                xtype : 'kindeditor',
                allowBlank : false
            }, {
                fieldLabel : '备注',
                name : 'remark',
                height : 50,
                xtype : 'textarea',
                allowBlank : false
            }]
		});
	}
});