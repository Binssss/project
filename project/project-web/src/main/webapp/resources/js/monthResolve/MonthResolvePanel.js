Ext.ns('Ext.project');
Ext.project.MonthResolvePanel = new Ext.extend(Ext.Panel, {
	projectId : null,
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
			queryUrl : 'project/monthResolve/queryListForPage',
			insertUrl : 'project/monthResolve/insert',
			updateUrl : 'project/monthResolve/update',
			deleteUrl : 'project/monthResolve/delete'
		},
		/** 项目列表 */
		this.projectTree = new Ext.project.ProjectTreePanel({
			treeType : 0,
			rootVisible : false,
			width : 200,
			url : this.Url,
			userType:1,
			region : 'west',
			title : '项目列表',
			listeners : {
				'click' : function(node) {
					this.projectId = node.id;
					this.grid.getStore().baseParams.projectId = node.id;
					//this.grid.getStore().load();
				},
				scope : this
			}
		});
        this.projectTree.expandAll();
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
		this.cm = new Ext.grid.ColumnModel([this.sm, {
            dataIndex : 'id',
            hidden : true
        }, {
            header : '子项目',
            dataIndex : 'name'
        }, {
            header : '年度',
            dataIndex : 'annual'
        }, {
            header : '难点',
            dataIndex : 'difficulty'
        }, {
            header : '项目负责人',
            dataIndex : 'leader'
        }, {
            header : '第一季度',
            dataIndex : 'firstQuarter',
            width : 200
        }, {
            header : '第二季度',
            dataIndex : 'secondQuarter',
            width : 200
        }, {
            header : '第三季度',
            dataIndex : 'threeQuarter',
            width : 200
        }, {
            header : '第四季度',
            dataIndex : 'fourQuarter',
            width : 200
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
			fields : ['id','name','annual','difficulty','leader', 'firstQuarter', 'secondQuarter','threeQuarter','fourQuarter'],
            data: {
                "results" : 4,
                "rows" : [
                    {id: '1',name: '数控技术',annual: '2018',difficulty:'掌握数控技术',leader: '张三',firstQuarter: '省级标志性成果1项',secondQuarter: '国家级标志性成果1项',threeQuarter: '校级标志性成果1项',fourQuarter: '省级标志性成果1项'},
                    {id: '2',name: '铁道通信技术',annual: '2017',difficulty:'熟悉通信',leader: '王五',firstQuarter: '国家级标志性成果1项',secondQuarter: '校级标志性成果1项',threeQuarter: '国家级标志性成果1项',fourQuarter: '省级标志性成果1项'},
                    {id: '3',name: '城市轨道交通技术',annual: '2016',difficulty:'熟悉交通技术',leader: '赵四',firstQuarter: '校级标志性成果1项',secondQuarter: '省级标志性成果1项',threeQuarter: '国家级标志性成果1项',fourQuarter: '省级标志性成果1项'},
                    {id: '4',name: '商务英语',annual: '2015',difficulty:'熟练英文6级',leader: '李六',firstQuarter: '省级标志性成果1项',secondQuarter: '省级标志性成果1项',threeQuarter: '国家级标志性成果1项',fourQuarter: '校级标志性成果1项'}
                ]
            },
            autoLoad:true

		});


		/** 模糊查询框 */
		this.cycleButton = new Ext.CycleButton({
			width : 80,
			showText : true,
			items : [ {
				text : '项目名称',
				value : 'name'
			}, {
				text : '项目负责人',
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

        //底部工具栏
        this.pagingBar = new Ext.PagingToolbar({
            store : this.store,
            displayInfo : true,
            pageSize : this.pageSize,
            displayMsg : '显示从第{0}到第{1}记录,共有{2}条',
            emptyMsg : '没有数据',
            prevText : '上一页',
            nextText : '下一页',
            refreshText : '刷新',
            lastText : '最后页',
            firstText : '第一页',
            beforePageText : '当前页',
            afterPageText : '共{0}页'

        });

        //顶部工具栏
        this.actionToolBar = new Ext.ActionToolbar({
            actionPanel : this,
            actionJson : this.actionJson,
            addFunction : this.showInsertWindow,
            editFunction : this.showUpdateWindow
        });

        // 添加查询
        this.actionToolBar.add([this.cycleButton,'-',this.searchField ]);

        this.grid = new Ext.grid.GridPanel({
            sm : this.sm,
            cm : this.cm,
            region : 'center',
            frame : true,
            store : this.store,
            bbar : this.pagingBar,
            tbar : this.actionToolBar,
            loadMask : {
                msg : '正在加载...'
            }
        });
        //this.store.load();

        Ext.project.MonthResolvePanel.superclass.constructor.call(this,{
            layout : 'border',
            items : [this.projectTree,this.grid]
        });

	},

	/** 实现新增操作按钮功能 */
	showInsertWindow : function() {
		if(this.projectId == null){
            Ext.Msg.alert('提示', '请先选中项目!');
            return false;
		}else{
            if (this.addMonthResolveWindow == null) {
                this.addMonthResolveWindow = new Ext.project.MonthResolveWindow({
                    saveUrl : this.Url.insertUrl,
                    store : this.store,
                    projectId : this.projectId
                });
                this.addMonthResolveWindow.setTitle('新增年度任务分解表');
            }
            this.addMonthResolveWindow.show();
            this.addMonthResolveWindow.reset();
		}

	},

	/** 实现修改操作按钮功能 */
	showUpdateWindow : function() {
		var records = this.grid.getSelectionModel().getSelections();
		if (records == null || records.length != 1) {
			Ext.Msg.alert('提示', '请选中一条记录');
			return false;
		}
		if (this.updateMonthResolveWindow == null) {
			this.updateMonthResolveWindow = new Ext.project.MonthResolveWindow({
				saveUrl : this.Url.updateUrl,
				store : this.store
			});
			this.updateMonthResolveWindow.setTitle('修改年度任务分解表');
		}
		this.updateMonthResolveWindow.show();
		this.updateMonthResolveWindow.reset();
		this.updateMonthResolveWindow.loadRecord(records[0]);

	},
	/** 实现删除操作按钮功能 */

	deleteData : function() {
		var records = this.getSelectionModel().getSelections();
		if (records == null || records.length == 0) {
			Ext.MessageBox.show({
				title : '提示',
				icon : Ext.MessageBox.WARNING,
				buttons : Ext.MessageBox.OK,
				msg : '请选择要删除的数据'
			});
			return false;
		}
		/** 遍历记录将id放入数组 实现删除 */
		Ext.MessageBox.confirm('提示', '你确定要删除选中的记录吗？', function(btn) {
			if (btn == 'yes') {
				Ext.Ajax.request({
					url : this.Url.deleteUrl,
					method : 'post',
					params : {
						id : records[0].data.id
					},
					success : function(response, options) {
						var text = Ext.decode(response.responseText);
						Ext.Msg.alert('提示', text.msg);
						if (text.success) {
							this.store.reload();
						}

					},
					failure : function(response, options) {
						Ext.MessageBox.alert('提示', '删除失败');
					},
					scope : this
				});

			}

		}, this);

	}


});