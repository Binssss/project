Ext.ns('Ext.project');
Ext.project.QuantitativeIndexFinishPanel = new Ext.extend(Ext.Panel, {
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
                        //this.grid.setProjectId(node.id);
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
            header : '指标名称(单位)',
            dataIndex : 'name'
        }, {
            header : '说明(含定义等)',
            dataIndex : 'desc',
			width : 300
        }, {
            header : '年度',
            dataIndex : 'annual',
            renderer : Ext.util.Format.dateRenderer('Y')
        }, {
            header : '基础',
            dataIndex : 'basic'
        },{
            header : '预期目标',
            dataIndex : 'target'
        },{
            header : '完成度',
            dataIndex : 'current'
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
			fields : ['id','name','desc', {
                name : 'annual',
                type : 'date',
                dateFormat : 'time'
            },'basic', 'target','current'],
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
           // tbar : this.actionToolBar,
            loadMask : {
                msg : '正在加载...'
            }
        });
        //this.store.load();

        Ext.project.QuantitativeIndexFinishPanel.superclass.constructor.call(this,{
            layout : 'border',
            items : [this.projectTree,this.grid]
        });

	},

	/** 实现新增操作按钮功能 */
	showInsertWindow : function() {
		if (this.addIndexWindow == null) {
			this.addIndexWindow = new Ext.project.QuantitativeIndexWindow({
				saveUrl : this.Url.insertUrl,
				store : this.store,
				projectId : this.projectId
			});
			this.addIndexWindow.setTitle('添加量化指标');
		}
		this.addIndexWindow.show();
		this.addIndexWindow.reset();

	},

	/** 实现修改操作按钮功能 */
	showUpdateWindow : function() {
		var records = this.grid.getSelectionModel().getSelections();
		if (records == null || records.length != 1) {
			Ext.Msg.alert('提示', '请选中一条记录');
			return false;
		}
		if (this.updateIndexWindow == null) {
			this.updateIndexWindow = new Ext.project.QuantitativeIndexWindow({
				saveUrl : this.Url.updateUrl,
				store : this.store
			});
			this.updateIndexWindow.setTitle('修改信息');
		}
		this.updateIndexWindow.show();
		this.updateIndexWindow.reset();
		this.updateIndexWindow.loadRecord(records[0]);

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