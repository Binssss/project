Ext.ns('Ext.project');
Ext.project.CommonalityFormPanel = Ext.extend(Ext.form.FormPanel, {
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

		Ext.project.CommonalityFormPanel.superclass.constructor.call(this, {
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
                xtype : 'textfield',
                fieldLabel : '公告标题',
                name : 'title',
                allowBlank : false
            }, {
                fieldLabel : '内容',
                name : 'content',
                xtype : 'textarea',
                height : 150,
                allowBlank : false
            },{
                xtype : 'textfield',
                name : 'file',
                regex : /\.((x|X)(l|L)(s|S)|(x|X)(l|L)(s|S)(x|X))$/,
                regexText : '请导入Excel格式文件',
                inputType : 'file',
                fieldLabel : '上传文件',
                allowBlank : false,
                width : 300
            }]
		});
	}
});