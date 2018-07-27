Ext.ns('Ext.project');
Ext.project.AnnualAchievementFormPanel = Ext.extend(Ext.form.FormPanel, {
	constructor : function(_config) {
		Ext.apply(this, _config || {});

		Ext.project.AnnualAchievementFormPanel.superclass.constructor.call(this, {
			frame : true,
            fileUpload:true,
			labelWidth : 100,
			defaults : {
				anchor : '95%',
				bodyStyle : 'border:0px;'
			},
            bodyStyle : 'border:0px;scrollable:true;overflow-x:hidden;overflow-y:auto;',
			layout : 'form',
			// 把窗口显示的东西放到数组里
			items : [{
                fieldLabel : '专业名称',
                name : 'majorName',
                xtype : 'textfield',
                allowBlank : false
            },{
                fieldLabel : '年度',
                name : 'annual',
                xtype : 'textfield',
                allowBlank : false
            }, {
                fieldLabel : '计划完成国家级标志性成果',
                name : 'countryAchievement',
                height : 50,
                xtype : 'textarea',
                allowBlank : false
            }, {
                fieldLabel : '国家级标志性成果目前进展情况',
                name : 'countryAchievementMoment',
                height : 50,
                xtype : 'textarea',
                allowBlank : false
            }, {
                fieldLabel : '计划完成省级标志性成果',
                name : 'provinceAchievement',
                height : 50,
                xtype : 'textarea',
                allowBlank : false
            }, {
                fieldLabel : '省级标志性成果目前进展情况',
                name : 'provinceAchievementMoment',
                height : 50,
                xtype : 'textarea',
                allowBlank : false
            },{
                xtype : 'textfield',
                name : 'file',
                regex : /\.((x|X)(l|L)(s|S)|(x|X)(l|L)(s|S)(x|X))$/,
                regexText : '请导入Excel格式文件',
                inputType : 'file',
                fieldLabel : '上传佐证材料',
                allowBlank : false,
                width : 300
            }]
		});
	}
});