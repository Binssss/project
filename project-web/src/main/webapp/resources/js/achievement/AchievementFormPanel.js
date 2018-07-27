Ext.ns('Ext.project');
Ext.project.AchievementFormPanel = Ext.extend(Ext.FormPanel, {
	constructor : function(_config) {
		Ext.apply(this, _config || {});

        this.type = new Ext.data.JsonStore({
            fields : ['id','type'],
            data : [
                {id :'1',type :'国家级'},
                {id :'2',type :'省级'},
                {id :'3',type :'校级'},
                {id :'4',type :'独创'}
            ]
        });

		Ext.project.AchievementFormPanel.superclass.constructor.call(this, {
			frame : true,
            fileUpload:true,
			labelWidth : 100,
			defaults : {
                layout : 'form',
                defaults : {
                    xtype : 'textfield',
                    anchor : '90%',
                    disabledClass:'txtDisabled'
                }
			},
			bodyStyle : 'border:0px;',
			layout : 'column',
			// 把窗口显示的东西放到数组里
            items : [{
                columnWidth : .5,
                items : [ {
                    name : 'id',
                    xtype : 'hidden'
                }, {
                    fieldLabel : '专业名称',
                    name : 'name',
                    xtype : 'textfield',
                    allowBlank : false
                },{
                    fieldLabel : '等级',
                    name : 'rank',
                    xtype : 'combo',
                    allowBlank : false,
                    mode : 'local',
                    editable:false,
                    store : this.type,
                    triggerAction : 'all',
                    displayField : 'type',
                    valueField : 'id'
                }, {
                    fieldLabel : '数量',
                    name : 'count',
                    xtype : 'textfield',
                    allowBlank : false
                }]
            },{
                columnWidth : .5,
                items : [{
                    fieldLabel : '类型',
                    name : 'type',
                    xtype : 'textfield',
                    allowBlank : false
                } , {
                    fieldLabel : '完成人',
                    name : 'leader',
                    xtype : 'textfield',
                    allowBlank : false
                }/*,{
                    fieldLabel : '目前进展情况',
                    name : 'moment',
                    xtype : 'textarea',
                    height : 50,
                    allowBlank : false
                }*/]
            }]

		});
	}
});