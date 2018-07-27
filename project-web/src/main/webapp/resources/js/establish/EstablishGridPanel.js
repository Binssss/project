Ext.ns('Ext.project');
Ext.project.EstablishGridPanel = new Ext.extend(Ext.grid.GridPanel, {
    actionJson : null,
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
			singleSelect : true,//单选模式
            listeners : {
                'rowselect' : function(selectionModel, rowIndex, record) {
                    this.actionToolBar.enableEditDelete();
                },
                'rowdeselect' : function(selectionModel, rowIndex,
                                         record) {
                    if (!selectionModel.hasSelection()) {
                        this.actionToolBar.disableEditDelete();
                    }
                },
                scope : this
            }
		});
		/** 定义表头* */
		this.columnModel = new Ext.grid.ColumnModel([ this.sm, {
			dataIndex : 'id',
			hidden : true
		}, {
			header : '项目名称',
			dataIndex : 'projectName'
		}, {
			header : '项目简介',
			dataIndex : 'projectDetail'
		}, {
			header : '项目类型',
			dataIndex : 'projectType'
		}, {
			header : '开始时间',
			dataIndex : 'projectCreateTime',
            renderer : Ext.util.Format.dateRenderer('Y/m/d  H:i:s')
		}, {
            header : '结束时间',
            dataIndex : 'projectEndTime',
            renderer : Ext.util.Format.dateRenderer('Y/m/d  H:i:s')
        }/*, {
            header : '总进度',
            dataIndex : 'projectTotalUser',
            renderer: function (value) {
                return '<div style="background:#4ef037;color:#03002c;width:'+value+'%">'+value+'%</div>';
            }
        }*/, {
            header : '总负责人',
            dataIndex : 'leader',
            renderer : function(value) {
            if (value) {
                return value.realName;
            }
        }
        },{
			header : '是否完结',//0 未完結  1 已完結
			dataIndex : 'projectIsFinish',
            renderer : function(value) {
                if (value == 1) {
                    return '<div style=";color:#4ef037;">已完結</div>';
                }else {
                    return '<div style=";color:red;">未完結</div>';
                }
            }
		} ]);
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
			fields : [ 'id', 'projectName', 'projectDetail',
					'projectType', 'projectIsFinish',{
						name : 'projectCreateTime',
						type : 'date',
						dateFormat : 'time'
					},{
                    name : 'projectEndTime',
                    type : 'date',
                    dateFormat : 'time'
                }/*,'projectTotalUser'*/,'leader', 'projectIsFinish' ]

		});

		/** 模糊查询框 */
		this.cycleButton = new Ext.CycleButton({
			width : 80,
			showText : true,
			items : [ {
				text : '项目名',
				value : 'projectName'
			}, {
				text : '项目类型',
				value : 'projectType'
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


        //顶部工具栏
        this.actionToolBar = new Ext.ActionToolbar({
            actionPanel : this,
            actionJson : this.actionJson,
            addFunction : this.showInsertWindow,
            editFunction : this.showUpdateWindow
        });

        // 添加查询
        this.actionToolBar.add([/*{
            text : '导出',
            scope : this,
            iconCls : 'xsxz_xyyktts',
            handler : this.showDownWindow
        },*/this.cycleButton,'-',this.searchField ,'-','筛选状态：',this.cycleButton1]);

		/** 底部工具栏 */
		this.bbar = new Ext.PagingToolbar({
			store : this.store,
			pageSize : this.pageSize,
			displayInfo : true
		});

		/** 执行构造函数 */
		Ext.project.EstablishGridPanel.superclass.constructor.call(this, {
			/** 选择模型 */
			sm : this.sm,
			/** 表头 */
			cm : this.columnModel,
			/** 数据源 */
			store : this.store,
			/** 操作按钮 */
			tbar : this.actionToolBar,
			/** 底部工具栏 */
			bbar : this.bbar,

			/** 页面显示平铺 */
			viewConfig : {
				forceFit : true
			},
			loadMask : true
		});
		this.store.load();

	},

	/** 实现新增操作按钮功能 */
	showInsertWindow : function() {
		if (this.addEstablishWindow == null) {
			this.addEstablishWindow = new Ext.project.EstablishWindow({
				saveUrl : this.Url.insertUrl,
				store : this.store
			});
			this.addEstablishWindow.setTitle('项目申报');
		}
		this.addEstablishWindow.show();
		this.addEstablishWindow.reset();
	},
	/** 实现修改操作按钮功能 */
    showUpdateWindow : function() {
        var records = this.getSelectionModel().getSelections();
        if (records == null || records.length != 1) {
            Ext.Msg.alert('提示', '请选中一个项目');
            return false;
        }
        if (this.updateEstablishWindow == null) {
            this.updateEstablishWindow = new Ext.project.EstablishWindow({
                saveUrl : this.Url.insertUrl,
                store : this.store
            });
            this.updateEstablishWindow.setTitle('修改项目');
        }
        this.updateEstablishWindow.show();
        this.updateEstablishWindow.reset();
        this.updateEstablishWindow.loadRecord(records[0]);
    },
    showDownWindow : function(){
        Ext.Msg.alert('提示', '导出成功');
	}





});