Ext.ns('Ext.project');
Ext.project.RegimeBuildFormPanel = Ext.extend(Ext.form.FormPanel, {
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

		Ext.project.RegimeBuildFormPanel.superclass.constructor.call(this, {
			frame : true,
            fileUpload:true,
			labelWidth : 150,
			defaults : {
				anchor : '95%',
				bodyStyle : 'border:0px;'
			},
			bodyStyle : 'border:0px;',
			layout : 'form',
			// 把窗口显示的东西放到数组里
			items : [{
                xtype : 'textfield',
                name : 'file',
                regex : /\.((x|X)(l|L)(s|S)|(x|X)(l|L)(s|S)(x|X))$/,
                regexText : '请导入Excel格式文件',
                inputType : 'file',
                fieldLabel : '上传制度建设文件',
                allowBlank : false,
                width : 350
            }, {
                fieldLabel : '文件描述',
                name : 'fileDesc',
                height : 50,
                xtype : 'textarea',
                allowBlank : false
            }]
		});
	}
});