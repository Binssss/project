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
            }, 'target'],
            data: {
                "results" : 4,
                "rows" : [
                    {id: '1',name: '应届毕业生自主创业比例',desc: '应与平台数据一致',annual: '1522339200000',basic: '3498',target: '3598',current: '3600'},
                    {id: '2',name: '公益性培训服务',desc: '应与质量年报一致',annual: '1522339200000',basic: '10',target: '20',current: '30'},
                    {id: '3',name: '新生报道率',desc: '新生报道率 = 实践报道学生数/实际录取数',annual: '1522339200000',basic: '90',target: '92',current: '93'},
                    {id: '4',name: '专任教师人均企业实践时间',desc: '专任教师人均企业实践时间 = 校内专任教师行业企业一线工作时间总数/专任教师数',annual: '1522339200000',basic: '17',target: '23',current: '30'}
                ]
            },
            autoLoad:true

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
		//this.store.load();

	}

});