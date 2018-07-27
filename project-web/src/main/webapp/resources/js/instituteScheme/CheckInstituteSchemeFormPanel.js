Ext.ns('Ext.project');
Ext.project.CheckInstituteSchemeFormPanel = Ext.extend(Ext.form.FormPanel, {
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

		Ext.project.CheckInstituteSchemeFormPanel.superclass.constructor.call(this, {
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
                fieldLabel : '学院建设方案',
                name : 'fileName',
                xtype : 'displayfield',
                allowBlank : false
            },{
                fieldLabel : '上传人',
                name : 'uploader',
                xtype : 'displayfield',
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