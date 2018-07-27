Ext.ns('Ext.project');
Ext.project.SynthesizeSummaryGridPanel = new Ext.extend(Ext.Panel, {
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
            deleteUrl : 'project/establish/delete',
		},

            /** 项目列表 */
            this.projectTree = new Ext.project.ProjectTreePanel({
                treeType : 0,
                rootVisible : false,
                width : 150,
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
		this.cm = new Ext.grid.ColumnModel([ this.sm, {
			dataIndex : 'id',
			hidden : true
		}, {
            header : '报告标题',
            dataIndex : 'title'
        }, {
            header : '负责人',
            dataIndex : 'leader'
        }, {
            header : '年度',
            dataIndex : 'annual',
            hidden:true,
            renderer : Ext.util.Format.dateRenderer('Y')
        }, {
            header : '总结时间',
            dataIndex : 'summaryTime',
            renderer : Ext.util.Format.dateRenderer('Y/m/d')
        },{
            header : '任务完成情况综述',
            dataIndex : 'taskSummarize',
			width : 200
		},{
            header : '存在问题与对策',
            dataIndex : 'problem',
            width : 200
        },{
            header : '经费使用情况综述',
            dataIndex : 'fundsSummarize',
            width : 200
        },{
            header : '特色与亮点',
            dataIndex : 'feature',
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
			fields : [ 'id', 'title', 'leader',{
                name : 'annual',
                type : 'date',
                dateFormat : 'time'
            },{
                name : 'summaryTime',
                type : 'date',
                dateFormat : 'time'
            },'taskSummarize','problem','fundsSummarize','feature'],
            data: {
                "results" : 4,
                "rows" : [
                    {id: '1',title: '教师队伍建设总结',leader: '张三',annual: '1522339200000',summaryTime: '1522339200000',taskSummarize:'教师队伍建设任务完成情况综述',problem:'教师队伍建设任务存在问题与对策',fundsSummarize:'教师队伍建设任务经费使用情况综述',feature:'教师队伍建设任务特色与亮点'},
                    {id: '2',title: '综合改革项目总结',leader: '王五',annual: '1522339200000',summaryTime: '1522339200000',taskSummarize:'在新时代的引领下，综合改革项目建设紧跟新时代的发展，加大对综合项目的投入，在教学方式、教学成果上取得了一定的成功，项目建设任务全部完成。',problem:'存在问题：普及度不高\\n" +\n' +
                    '                    "\\n" +\n' +
                    '                    "对策：加大项目投入，通过制定在线创新教学课程，进一步摸索出良好可行的在线教学模式，让广大学生实现在线学习，从中受益。',fundsSummarize:'综合改革项目经费使用情况综述',feature:'亮点：综合创新教学方法，实践“校企合作办学”模式，更好提高了学生的专业能力和创新能力，实现产学研'},
                    {id: '3',title: '高水平专业建设项目总结',leader: '赵四',annual: '1522425600000',summaryTime: '1522425600000',taskSummarize:'高水平专业建设项目任务完成情况综述',problem:'高水平专业建设项目存在问题与对策',fundsSummarize:'高水平专业建设项目经费使用情况综述',feature:'高水平专业建设项目特色与亮点'},
                    {id: '4',title: '科研研究和社会服务建设项目总结',leader: '李六',annual: '1522425600000',summaryTime: '1522425600000',taskSummarize:'科研研究和社会服务建设项目任务完成情况综述',problem:'科研研究和社会服务建设项目存在问题与对策',fundsSummarize:'科研研究和社会服务建设项目经费使用情况综述',feature:'科研研究和社会服务建设项目特色与亮点'}
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
        this.actionToolBar.add(
            [{
                text : '一键生成报告',
                scope : this,
                iconCls : 'edit',
                handler : this.getReportDoc,
                },'-'
                ,this.cycleButton,'-',this.searchField ]);

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

        Ext.project.SynthesizeSummaryGridPanel.superclass.constructor.call(this,{
            layout : 'border',
            items : [this.projectTree,this.grid]
        });

	},

	/** 实现新增操作按钮功能 */
	showInsertWindow : function() {
		if (this.addSynthesizeSummaryWindow == null) {
			this.addSynthesizeSummaryWindow = new Ext.project.SynthesizeSummaryWindow({
				saveUrl : this.Url.insertUrl,
				store : this.store
			});
			this.addSynthesizeSummaryWindow.setTitle('新增总结报告');
		}
		this.addSynthesizeSummaryWindow.show();
		this.addSynthesizeSummaryWindow.reset();
	},
	/** 实现修改操作按钮功能 */
    showUpdateWindow : function() {
        var records = this.grid.getSelectionModel().getSelections();
        if (records == null || records.length != 1) {
            Ext.Msg.alert('提示', '请选中一个项目');
            return false;
        }
        if (this.updateSynthesizeSummaryWindow == null) {
            this.updateSynthesizeSummaryWindow = new Ext.project.SynthesizeSummaryWindow({
                saveUrl : this.Url.insertUrl,
                store : this.store
            });
            this.updateSynthesizeSummaryWindow.setTitle('项目总结报告');
        }
        this.updateSynthesizeSummaryWindow.show();
        this.updateSynthesizeSummaryWindow.reset();
        this.updateSynthesizeSummaryWindow.loadRecord(records[0]);
    },

    getReportDoc:function(){
        var records = this.grid.getSelectionModel().getSelections();
        if (records == null || records.length != 1) {
            Ext.Msg.alert('提示', '请选中一个项目');
            return false;
        }
        //http://localhost:8080/filecabinet/personalFile/downloadFile?fileId=6DCCA37A61F19862E0501EDEDFC25A00
       window.open("http://localhost:8080/filecabinet/personalFile/downloadFile?fileId=6DCCA37A61F19862E0501EDEDFC25A00");

    }



});