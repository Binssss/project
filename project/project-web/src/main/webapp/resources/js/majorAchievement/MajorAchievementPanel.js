Ext.ns('Ext.project');
Ext.project.MajorAchievementPanel = new Ext.extend(Ext.Panel, {
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
			queryUrl : 'project/achievement/queryListForPage',
			insertUrl : 'project/achievement/insert',
			updateUrl : 'project/achievement/update',
			deleteUrl : 'project/achievement/delete'
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
                       // this.grid.getStore().load();
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
            header : '专业名称',
            dataIndex : 'major'
        }, {
            header : '成果名称',
            dataIndex : 'name',
            width : 150
        }, {
            header : '所属单位',
            dataIndex : 'unit',
            width : 150
        }, {
            header : '完成人',
            dataIndex : 'leader'
        }, {
            header : '类别',
            dataIndex : 'type'
        }, {
            header : '预期成果',
            dataIndex : 'support',
            width : 150
        }, {
            header : '目前进展情况',
            dataIndex : 'moment',
            width : 150
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
			fields : ['id','major','name','unit','leader','type', 'support','moment'],
            data: {
                "results" : 4,
                "rows" : [
                    {id: '1',major:'城市轨道交通运营管理',name: '教学成果奖',unit: '轨道交通办公室',leader: '张三',type: '国家级',support: '10',moment: '15'},
                    {id: '2',major:'铁道通信',name: '国内外访问学者',unit: '质量管理办公室',leader: '王五',type: '省级',support: '15',moment: '20'},
                    {id: '3',major:'商务英语',name: '教学名师',unit: '质量管理办公室',leader: '老六',type: '校级',support: '18',moment: '23'},
                    {id: '4',major:'铁道供电技术',name: '精品在线开发课程',unit: '铁道办公室',leader: '赵四',type: '独创',support: '13',moment: '13'}
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
            //tbar : this.actionToolBar,
            loadMask : {
                msg : '正在加载...'
            }
        });
        //this.store.load();

        Ext.project.MajorAchievementPanel.superclass.constructor.call(this,{
            layout : 'border',
            items : [this.grid]
        });

	},

	/** 实现新增操作按钮功能 */
	showInsertWindow : function() {
		if (this.addAchieveWindow == null) {
			this.addAchieveWindow = new Ext.project.AchievementWindow({
				saveUrl : this.Url.insertUrl,
				store : this.store,
				projectId : this.projectId
			});
			this.addAchieveWindow.setTitle('项目成果');
		}
		this.addAchieveWindow.show();
		this.addAchieveWindow.reset();

	},

	/** 实现修改操作按钮功能 */
	showUpdateWindow : function() {
		var records = this.getSelectionModel().getSelections();
		if (records == null || records.length != 1) {
			Ext.Msg.alert('提示', '请选中一条记录');
			return false;
		}
		if (this.updateAchieveWindow == null) {
			this.updateAchieveWindow = new Ext.project.AchievementWindow({
				saveUrl : this.Url.updateUrl,
				store : this.store
			});
			this.updateAchieveWindow.setTitle('修改信息');
		}
		this.updateAchieveWindow.show();
		this.updateAchieveWindow.reset();
		this.updateAchieveWindow.loadRecord(records[0]);

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

	},
	setProjectId : function(projectId){
		this.projectId = projectId;
	}


});