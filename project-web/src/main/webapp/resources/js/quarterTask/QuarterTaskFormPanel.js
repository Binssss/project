Ext.ns('Ext.project');
Ext.project.QuarterTaskFormPanel = Ext.extend(Ext.FormPanel, {
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

		Ext.project.QuarterTaskFormPanel.superclass.constructor.call(this, {
			frame : true,
			labelWidth : 100,
			defaults : {
				anchor : '95%',
				bodyStyle : 'border:0px;'
			},
            bodyStyle : 'border:0px;scrollable:true;overflow-x:hidden;overflow-y:auto;',
			layout : 'form',
			// 把窗口显示的东西放到数组里
			items : [ {
				name : 'id',
				xtype : 'hidden'
			}, {
                xtype : 'combo',
                fieldLabel : '子项目',
                name : 'name',
                allowBlank : false,
                mode : 'local',
                editable:false,
                store : this.type,
                triggerAction : 'all',
                displayField : 'type',
                valueField : 'id'
            }, {
                xtype : 'textfield',
                fieldLabel : '年度',
                name : 'annual',
                allowBlank : false
            }, {
                fieldLabel : '项目负责人',
                name : 'leader',
                xtype : 'textfield',
                allowBlank : false
            }, {
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
                xtype : 'textarea',
                fieldLabel : '预期完成情况',
                name : 'supportFinish',
                width:150,
                allowBlank : false
            }, {
                xtype : 'textarea',
                fieldLabel : '实际完成情况',
                name : 'actualFinish',
                width:150,
                allowBlank : false
            }]
		});



	}
});