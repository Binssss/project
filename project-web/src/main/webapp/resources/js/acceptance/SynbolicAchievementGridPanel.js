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
			fields : [ 'id', 'countryAchievement', 'countryAchievementMoment','provinceAchievement','provinceAchievementMoment']

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

        /** 定义操作按钮 */
        this.toolbar = new Ext.Toolbar([ {
            text : '新增',
            scope : this,
            iconCls : 'add',
            handler : this.showInsertWindow
        }, '-', {
            text : '修改',
            scope : this,
            iconCls : 'edit',
            handler : this.showUpdateWindow
        }, '-', {
            text : '删除',
            scope : this,
            iconCls : 'delete',
            handler : this.deleteData
        },'-', {
            text : '查看成果图表',
            scope : this,
            iconCls : 'search',
            handler : this.showAchievementWindow
        }, '-',this.cycleButton,'-',this.searchField]);

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
		this.store.load();

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
    //展示项目成果图表
    showAchievementWindow : function(){
        if (this.chartWindow == null) {
            this.chartWindow = new Ext.project.AchievementDetailChartWindow({
                saveUrl : this.Url.insertUrl,
                store : this.store
            });
            this.chartWindow.setTitle('项目成果');
        }
        this.chartWindow.show();
        this.chartWindow.reset();

    },
    setProjectId : function(projectId){
        this.projectId = projectId;
    }


});