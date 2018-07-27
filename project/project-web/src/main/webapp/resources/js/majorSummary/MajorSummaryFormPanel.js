Ext.ns('Ext.project');
Ext.project.MajorSummaryFormPanel = Ext.extend(Ext.FormPanel, {
	constructor : function(_config) {
		Ext.apply(this, _config || {});

        this.type = new Ext.data.JsonStore({
            fields : ['id','type'],
            data : [
                {id :'1',type :'职业教育教学改革与实践项目'},
                {id :'2',type :'技能大师工作室'},
                {id :'3',type :'高职教育教学改革与实践项目'},
                {id :'4',type :'协同机制创新改革研究与实践项目'}
            ]
        });

		Ext.project.MajorSummaryFormPanel.superclass.constructor.call(this, {
			frame : true,
            fileUpload:true,
			labelWidth : 150,
            defaults : {
                anchor : '95%',
                bodyStyle : 'border:0px;'
            },
			bodyStyle : 'border:0px;scrollable:true;overflow-x:hidden;overflow-y:auto;',
			layout : 'form',
			// 把窗口显示的东西放到数组里
            items : [{
                    name : 'id',
                    xtype : 'hidden'
                },{
                    fieldLabel : '项目名称',
                    name : 'project',
                    xtype : 'combo',
                    allowBlank : false,
                    mode : 'local',
                    editable:false,
                    store : this.type,
                    triggerAction : 'all',
                    displayField : 'type',
                    valueField : 'id'
                },{
                    fieldLabel : '任务完成情况综述',
                    name : 'taskSummarize',
                    xtype : 'kindeditor',
                    height : 200,
                    allowBlank : false
                }, {
                    fieldLabel : '经费使用情况综述',
                    name : 'fundsSummarize',
                    xtype : 'kindeditor',
                    height : 200,
                    allowBlank : false
                },{
                    fieldLabel : '年度',
                    name : 'time',
                    xtype : 'textfield',
                    allowBlank : false
                },{
                    fieldLabel : '标志性成果完成情况综述',
                    name : 'achievementSummarize',
                    xtype : 'kindeditor',
                    height : 200,
                    allowBlank : false
                },{
                    fieldLabel : '特色与亮点',
                    name : 'feature',
                    xtype : 'kindeditor',
                    height : 200,
                    allowBlank : false
                },{
                    fieldLabel : '存在问题与对策',
                    name : 'problem',
                    xtype : 'kindeditor',
                    height : 200,
                    allowBlank : false

                }]

		    });
	}
});