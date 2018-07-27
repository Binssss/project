Ext.ns('Ext.project');
Ext.project.QuarterAchievementFormPanel = Ext.extend(Ext.form.FormPanel, {
	constructor : function(_config) {
		Ext.apply(this, _config || {});

        this.quarter = new Ext.data.JsonStore({
            /*url : 'project/application/queryApplication',*/
            fields : ['id','quarter'],
            data : [
                {id : '1',quarter : '第一季度'},
                {id : '2',quarter : '第二季度'},
                {id : '3',quarter : '第三季度'},
                {id : '4',quarter : '第四季度'}
            ]
        });

        this.major = new Ext.data.JsonStore({
            fields : ['id','type'],
            data : [
                {id :'1',major :'职业教育教学改革与实践项目'},
                {id :'2',major :'技能大师工作室'},
                {id :'3',major :'高职教育教学改革与实践项目'},
                {id :'4',major :'协同机制创新改革研究与实践项目'}
            ]
        });

        this.ranks = new Ext.data.JsonStore({
            /*url : 'project/application/queryApplication',*/
            fields : ['id','quarter'],
            data : [
                {id : '1',ranks : '国家级'},
                {id : '2',ranks : '省级'},
                {id : '3',ranks : '校级'},
                {id : '4',ranks : '独创'}
            ]
        });

		Ext.project.QuarterAchievementFormPanel.superclass.constructor.call(this, {
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
                allowBlank : false,
                mode : 'local',
                store : this.major,
                triggerAction : 'all',
                displayField : 'major',
                valueField : 'id'
            },{
                fieldLabel : '年度',
                name : 'annual',
                xtype : 'textfield',
                allowBlank : false
            },{
                fieldLabel : '完成人',
                name : 'leader',
                xtype : 'textfield',
                allowBlank : false
            },{
                fieldLabel : '季度',
                name : 'quarter',
                xtype : 'combo',
                allowBlank : false,
                editable:false,
                mode : 'local',
                store : this.quarter,
                triggerAction : 'all',
                displayField : 'quarter',
                valueField : 'id'
            }, {
                fieldLabel : '级别',
                name : 'rank',
                xtype : 'textfield',
                allowBlank : false,
                mode : 'local',
                store : this.ranks,
                triggerAction : 'all',
                displayField : 'ranks',
                valueField : 'id'
            }, {
                fieldLabel : '预期完成数',
                name : 'supportCount',
                xtype : 'textfield',
                allowBlank : false
            }, {
                fieldLabel : '实际完成数',
                name : 'actualCount',
                xtype : 'textfield',
                allowBlank : false
            }/*,{
                xtype : 'textfield',
                name : 'file',
                regex : /\.((x|X)(l|L)(s|S)|(x|X)(l|L)(s|S)(x|X))$/,
                regexText : '请导入Excel格式文件',
                inputType : 'file',
                fieldLabel : '上传佐证材料',
                allowBlank : false,
                width : 300
            }*/]
		});
	}
});