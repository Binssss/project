Ext.ns('Ext.project');
Ext.project.AnnualFinishTaskFormPanel = Ext.extend(Ext.FormPanel, {
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

		Ext.project.AnnualFinishTaskFormPanel.superclass.constructor.call(this, {
			frame : true,
			labelWidth : 100,
			defaults : {
				anchor : '95%',
				bodyStyle : 'border:0px;'
			},
			bodyStyle : 'border:0px;',
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
            },/* {
                xtype : 'textfield',
                fieldLabel : '年度',
                name : 'annual',
                allowBlank : false
            }, {
                fieldLabel : '经费预算',
                name : 'budget',
                xtype : 'textfield',
                allowBlank : false
            }, {
                fieldLabel : '项目大类别',
                name : 'projectType',
                xtype : 'textfield',
                allowBlank : false
            }, {
                fieldLabel : '项目负责人',
                name : 'leader',
                xtype : 'textfield',
                allowBlank : false
            }, {
                fieldLabel : '预期成果',
                name : 'acceptance',
                xtype : 'textarea',
                height : 150,
                allowBlank : false
            }, */{
                fieldLabel : '完成情况',
                name : 'finished',
                xtype : 'textarea',
                height : 150,
                allowBlank : false
            }]
		});



	}
});