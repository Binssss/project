Ext.ns('Ext.project');
Ext.project.InstituteSchemeWindow = Ext.extend(Ext.Window, {
	saveUrl : null,
	store : null,
	//点击增加和修改弹出窗
	constructor : function(_config) {
		Ext.QuickTips.init();
		Ext.apply(this, _config || {});
		this.formPanel = new Ext.project.InstituteSchemeFormPanel();//实例化一个窗体面板
		Ext.project.InstituteSchemeWindow.superclass.constructor.call(this, {
			width : 600,
			height : 250,
			layout : 'fit',
			//弹出窗口显示内容
			items : [this.formPanel],
			bodyStyle : 'padding:5 5 5 5',
			closeAction : 'hide',
			modal : true,
			resizable : true,
			buttons : [ {
				text : '提交',
				handler : this.submit,
				scope : this
			}, {
				text : '取消',
				handler : this.cancel,
				scope : this
			}]
		});
	},
	//实现提交按钮
	submit : function(){
		//判断FormPanel是否是有效的如果是提交成功
		if(this.formPanel.getForm().isValid()){
			this.formPanel.getForm().submit({
				url : this.saveUrl,
				waitMsg : '提交中...',
				scope : this,
				success : function(from,action){
					Ext.Msg.alert('提示',action.result.msg);
					//操作成功跳回主页（隐藏窗口）
					this.hide();
					this.store.reload();
				},
				failure : function(form,action){
					Ext.Msg.alert('提示',action.result.msg);
				}
			});
		}
	},
	reset : function(){
		this.formPanel.getForm().reset();
	},
	//实现取消按钮
	cancel : function(){
		this.formPanel.getForm().reset();
		this.hide();
	},
	//修改回填数据
	loadRecord : function(records){
		this.formPanel.getForm().loadRecord(records);
	}

});