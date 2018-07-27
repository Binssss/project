Ext.ns('Ext.project');
Ext.project.QuantitativeIndexGridPanel = new Ext.extend(Ext.grid.GridPanel, {
	projectId : null,
	constructor : function(config) {
		if (config == null) {
			config = {};
		}
		Ext.apply(this, config);
		// 每页显示10条
		this.pageSize = 10;
		// 增删改查方法路径
		this.Url = {
			queryUrl : 'project/achievement/queryListForPage',
			insertUrl : 'project/achievement/insert',
			updateUrl : 'project/achievement/update',
			deleteUrl : 'project/achievement/delete'
		},
		/** 选择模型界面四方选择框 * */
		this.sm = new Ext.grid.CheckboxSelectionModel({
			/*
			 * //多选模式 Multiselect : true
			 */
			singleSelect : true,
		});
		/** 定义表头* */
		this.columnModel = new Ext.grid.ColumnModel([ this.sm, {
            dataIndex : 'id',
            hidden : true
        }, {
            header : '指标名称(单位)',
            dataIndex : 'name'
        }, {
            header : '说明(含定义等)',
            dataIndex : 'desc'
        }, {
            header : '基础',
            dataIndex : 'basic'
        }, {
            header : '时间',
            dataIndex : 'time',
            renderer : Ext.util.Format.dateRenderer('Y')
        },{
            header : '预期目标',
            dataIndex : 'target'
        }]);
		/** 定义数据源 */
		this.store = new Ext.data.JsonStore({
			url : this.Url.queryUrl,
			method : 'POST',
			root : 'rows',
			totalProperty : 'results',
			baseParams : {
				start : 0,
				limit : this.pageSize
			},
			fields : ['id','name','desc','basic', {
                name : 'time',
                type : 'date',
                dateFormat : 'time'
            }, 'target']

		});

		/** 底部工具栏 */
		this.bbar = new Ext.PagingToolbar({
			store : this.store,
			pageSize : this.pageSize,
			displayInfo : true
		});

		/** 执行构造函数 */
		Ext.project.QuantitativeIndexGridPanel.superclass.constructor.call(this, {
			/** 选择模型 */
			sm : this.sm,
			/** 表头 */
			cm : this.columnModel,
			/** 数据源 */
			store : this.store,
			/** 底部工具栏 */
			bbar : this.bbar,

			/** 页面显示平铺 */
			viewConfig : {
				forceFit : true
			},
			loadMask : true
		});
		this.store.load();

	}

});