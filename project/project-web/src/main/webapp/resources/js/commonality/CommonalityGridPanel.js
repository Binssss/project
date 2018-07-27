Ext.ns('Ext.project');
Ext.project.CommonalityGridPanel = new Ext.extend(Ext.grid.GridPanel, {
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
			header : '公告标题',
			dataIndex : 'title',
			width : 150
		}, {
			header : '发布人',
			dataIndex : 'sender'
		}, {
			header : '发布时间',
			dataIndex : 'sendTime',
            renderer : Ext.util.Format.dateRenderer('Y/m/d  H:i:s')
		},{
			header : '查阅人数',
			dataIndex : 'reader'
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
			fields : [ 'id', 'title', 'sender',{
						name : 'sendTime',
						type : 'date',
						dateFormat : 'time'
					},'reader' ],
            data: {
                "results" : 4,
                "rows" : [
                    {id: '1',title: '轨道交通方案发布',sender:'王五',sendTime: '1522339200000',reader: '52'},
                    {id: '2',title: '机电学院方案发布',sender:'老六',sendTime: '1522696586000',reader: '34'},
                    {id: '3',title: '国际高铁合作学院方案发布',sender:'张三',sendTime: '1522339200000',reader: '45'},
                    {id: '4',title: '科学研究和社会服务方案发布',sender:'张三',sendTime: '1522696586000',reader: '63'}
                ]
            },
            autoLoad:true

		});

		/** 模糊查询框 */
		this.cycleButton = new Ext.CycleButton({
			width : 80,
			showText : true,
			items : [ {
				text : '标题',
				value : 'title'
			}, {
				text : '发布人',
				value : 'sender'
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
		Ext.project.CommonalityGridPanel.superclass.constructor.call(this, {
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
			loadMask : true
		});
		//this.store.load();

	},

	/** 实现新增操作按钮功能 */
	showInsertWindow : function() {
		if (this.addCommonalityWindow == null) {
			this.addCommonalityWindow = new Ext.project.CommonalityWindow({
				saveUrl : this.Url.insertUrl,
				store : this.store
			});
			this.addCommonalityWindow.setTitle('发送公告');
		}
		this.addCommonalityWindow.show();
		this.addCommonalityWindow.reset();
	},
	/** 实现修改操作按钮功能 */
    showUpdateWindow : function() {
        var records = this.getSelectionModel().getSelections();
        if (records == null || records.length != 1) {
            Ext.Msg.alert('提示', '请选中一个公告');
            return false;
        }
        if (this.updateCommonalityWindow == null) {
            this.updateCommonalityWindow = new Ext.project.CommonalityWindow({
                saveUrl : this.Url.insertUrl,
                store : this.store
            });
            this.updateCommonalityWindow.setTitle('修改公告');
        }
        this.updateCommonalityWindow.show();
        this.updateCommonalityWindow.reset();
        this.updateCommonalityWindow.loadRecord(records[0]);
    }




});