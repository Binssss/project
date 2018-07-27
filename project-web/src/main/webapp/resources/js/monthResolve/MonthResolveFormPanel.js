Ext.ns('Ext.project');
Ext.project.MonthResolveFormPanel = Ext.extend(Ext.FormPanel, {
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

		Ext.project.MonthResolveFormPanel.superclass.constructor.call(this, {
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
                fieldLabel : '第一季度',
                name : 'firstQuarter',
                xtype : 'textarea',
                height : 100,
                allowBlank : false
            }, {
                fieldLabel : '第二季度',
                name : 'secondQuarter',
                xtype : 'textarea',
                height : 100,
                allowBlank : false
            }, {
                fieldLabel : '第三季度',
                name : 'threeQuarter',
                xtype : 'textarea',
                height : 100,
                allowBlank : false
            }, {
                fieldLabel : '第四季度',
                name : 'fourQuarter',
                xtype : 'textarea',
                height : 100,
                allowBlank : false
            }]
		});



	}
});