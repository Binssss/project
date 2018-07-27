Ext.ns('Ext.project');
Ext.project.SynbolicAchievementGridPanel = new Ext.extend(Ext.grid.GridPanel, {
	constructor : function(config) {
		if (config == null) {
			config = {};
		}
		Ext.apply(this, config);
		// 每页显示10条
		this.pageSize = 10;
		// 增删改查方法路径
		this.Url = {
            queryUrl : 'project/establish/queryListForPage',
            insertUrl : 'project/establish/insert',
            updateUrl : 'project/establish/update',
            deleteUrl : 'project/establish/delete'
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
            header : '计划完成国家级标志性成果',
            dataIndex : 'countryAchievement'
        }, {
            header : '国家级标志性成果目前进展情况',
            dataIndex : 'countryAchievementMoment'
        }, {
            header : '计划完成省级标志性成果',
            dataIndex : 'provinceAchievement'
        }, {
            header : '省级标志性成果目前进展情况',
            dataIndex : 'provinceAchievementMoment'
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
			fields : [ 'id', 'countryAchievement', 'countryAchievementMoment','provinceAchievement','provinceAchievementMoment'],
            data: {
                "results" : 4,
                "rows" : [
                    {id: '1',countryAchievement: '5',countryAchievementMoment: '8',provinceAchievement: '13',provinceAchievementMoment: '13'},
                    {id: '2',countryAchievement: '6',countryAchievementMoment: '7',provinceAchievement: '11',provinceAchievementMoment: '12'},
                    {id: '3',countryAchievement: '8',countryAchievementMoment: '9',provinceAchievement: '14',provinceAchievementMoment: '15'},
                    {id: '4',countryAchievement: '9',countryAchievementMoment: '11',provinceAchievement: '16',provinceAchievementMoment: '18'}
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
		Ext.project.SynbolicAchievementGridPanel.superclass.constructor.call(this, {
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