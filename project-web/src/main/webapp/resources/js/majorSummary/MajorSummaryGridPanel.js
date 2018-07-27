Ext.ns('Ext.project');
Ext.project.MajorSummaryGridPanel = new Ext.extend(Ext.grid.GridPanel, {
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
            header : '项目',
            dataIndex : 'project'
        }, {
            header : '负责人',
            dataIndex : 'leader'
        }, {
            header : '年度',
            dataIndex : 'annual',
            renderer : Ext.util.Format.dateRenderer('Y')
        }, {
            header : '总结时间',
            dataIndex : 'summaryTime',
            renderer : Ext.util.Format.dateRenderer('Y/m/d')
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
			fields : [ 'id', 'project', 'leader',{
                name : 'annual',
                type : 'date',
                dateFormat : 'time'
            },{
                name : 'summaryTime',
                type : 'date',
                dateFormat : 'time'
            }],
            data: {
                "results" : 4,
                "rows" : [
                    {id: '1',project: '教师队伍建设',leader: '张三',annual: '1522339200000',summaryTime: '1522339200000'},
                    {id: '2',project: '综合改革项目',leader: '王五',annual: '1522252800000',summaryTime: '1522252800000'},
                    {id: '3',project: '高水平专业建设项目',leader: '赵四',annual: '1522252800000',summaryTime: '1522252800000'},
                    {id: '4',project: '科研研究和社会服务建设项目',leader: '李六',annual: '1522339200000',summaryTime: '1522339200000'}
                ]
            },
            autoLoad:true

		});

		/** 模糊查询框 */
		this.cycleButton = new Ext.CycleButton({
			width : 80,
			showText : true,
			items : [ {
				text : '项目',
				value : 'project'
			}, {
				text : '负责人',
				value : 'leader'
			} ],
			changeHandler : function(btn, item) {
				this.searchField.field = item.value;
			},
			scope : this
		});
		// 将默认选中项的value给store
		this.store.baseParams.field = this.cycleButton.getActiveItem().value;
		this.searchField = new Ext.ux.form.SearchField({
			store : this.store,
			field : this.field,
			paramName : 'value',
			emptyText : '查询值',
			style : 'margin-left: 5px;'
		});


        /** 项目是否完结条件查询* */
        this.cycleButton1 = new Ext.CycleButton({
            width : 80,
            showText : true,
            items : [{
                text : '选择状态',
                value : null
            },{
                text : '已完结',
                value : '1'
            }, {
                text : '未完结',
                value : '0'
            }],
            changeHandler : function(btn, item) {
                this.store.baseParams.field = item.value;
                this.store.load();
            },
            scope : this
        });

		/** 定义操作按钮 */
		this.toolbar = new Ext.Toolbar([ {
            text : '新增',
            scope : this,
            iconCls : 'add',
            handler : this.showInsertWindow
        }, '-',{
            text : '查看',
            scope : this,
            iconCls : 'edit',
            handler : this.showUpdateWindow
        }, '-',this.cycleButton,'-',this.searchField ,'-','筛选状态：',this.cycleButton1]);

		/** 底部工具栏 */
		this.bbar = new Ext.PagingToolbar({
			store : this.store,
			pageSize : this.pageSize,
			displayInfo : true
		});

		/** 执行构造函数 */
		Ext.project.MajorSummaryGridPanel.superclass.constructor.call(this, {
			/** 选择模型 */
			sm : this.sm,
			/** 表头 */
			cm : this.columnModel,
			/** 数据源 */
			store : this.store,
			/** 操作按钮 */
			tbar : this.toolbar,
			/** 底部工具栏 */
			bbar : this.bbar,

			/** 页面显示平铺 */
			viewConfig : {
				forceFit : true
			},
			/** 添加双击显示 */
			/*
			 * listeners:{ rowdblclick:this.rowdbClickFn, scope:this },
			 */
			loadMask : true,
		});
		//this.store.load();

	},

	/** 实现新增操作按钮功能 */
	showInsertWindow : function() {
		if (this.addMajorSummaryWindow == null) {
			this.addMajorSummaryWindow = new Ext.project.MajorSummaryWindow({
				saveUrl : this.Url.insertUrl,
				store : this.store
			});
			this.addMajorSummaryWindow.setTitle('新增总结报告');
		}
		this.addMajorSummaryWindow.show();
		this.addMajorSummaryWindow.reset();
	},
	/** 实现修改操作按钮功能 */
    showUpdateWindow : function() {
        var records = this.getSelectionModel().getSelections();
        if (records == null || records.length != 1) {
            Ext.Msg.alert('提示', '请选中一个项目');
            return false;
        }
        if (this.updateMajorSummaryWindow == null) {
            this.updateMajorSummaryWindow = new Ext.project.ShowMajorSummaryWindow({
                saveUrl : this.Url.insertUrl,
                store : this.store
            });
            this.updateMajorSummaryWindow.setTitle('专业项目总结报告');
        }
        this.updateMajorSummaryWindow.show();
        this.updateMajorSummaryWindow.reset();
        this.updateMajorSummaryWindow.loadRecord(records[0]);
    }




});