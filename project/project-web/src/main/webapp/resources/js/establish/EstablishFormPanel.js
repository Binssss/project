Ext.ns('Ext.project');
Ext.project.EstablishFormPanel = Ext.extend(Ext.form.FormPanel, {
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

		Ext.project.EstablishFormPanel.superclass.constructor.call(this, {
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
			items : [ {
                fieldLabel : '项目名称',
                name : 'projectName',
                xtype : 'textfield',
                allowBlank : false
			},{
                fieldLabel : '项目简介',
                name : 'projectDetail',
                xtype : 'textarea',
                height : 150,
                allowBlank : false
            }, {
                xtype : 'textfield',
                fieldLabel : '项目类型',
                name : 'projectType',
                allowBlank : false
            }, {
                fieldLabel : '项目负责人',
                name : 'leader',
                xtype : 'textfield',
                allowBlank : false
            },{
                fieldLabel : '开始时间',
                name : 'projectCreateTime',
                height : 20,
                xtype : 'datefield',
                format : 'Y-m-d',
                allowBlank : false
            },{
                fieldLabel : '计划结束时间',
                name : 'projectEndTime',
                xtype : 'datefield',
                format : 'Y-m-d',
                allowBlank : false
            }/*,{
                xtype : 'textfield',
                name : 'file',
                regex : /\.((x|X)(l|L)(s|S)|(x|X)(l|L)(s|S)(x|X))$/,
                regexText : '请导入Excel格式文件',
                inputType : 'file',
                fieldLabel : '上传项目文件',
                allowBlank : false,
                width : 300
            }, {
                fieldLabel : '文件描述',
                name : 'fileDesc',
                height : 50,
                xtype : 'textarea',
                allowBlank : false
            }, {
                fieldLabel : '备注',
                name : 'projectDetail',
                height : 360,
                xtype : 'kindeditor',
                allowBlank : false
            } */]
		});
	}
});