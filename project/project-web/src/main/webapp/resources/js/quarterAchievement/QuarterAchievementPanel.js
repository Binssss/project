Ext.ns('Ext.project');
Ext.project.QuarterAchievementPanel = new Ext.extend(Ext.Panel, {
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
            queryUrl : 'project/quarterAchievement/queryListForPage',
            insertUrl : 'project/quarterAchievement/insert',
            updateUrl : 'project/quarterAchievement/update',
            deleteUrl : 'project/quarterAchievement/delete'
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
            header : '专业名称',
            dataIndex : 'majorName'
        }, {
            header : '完成人',
            dataIndex : 'leader'
        }, {
            header : '年度',
            dataIndex : 'annual'/*,
            renderer : Ext.util.Format.dateRenderer('Y/m/d')*/
        }, {
            header : '季度',
            dataIndex : 'quarter'
        }, {
            header : '级别',
            dataIndex : 'rank'
        }, {
            header : '计划完成数',
            dataIndex : 'supportCount'
        }, {
            header : '实际完成数',
            dataIndex : 'actualCount'
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
            fields : [ 'id','majorName','leader','annual'/*{
                name : 'annual',
                type : 'date',
                dateFormat : 'time'
            }*/,'quarter', 'rank', 'supportCount','actualCount'],
            data: {
                "results" : 4,
                "rows" : [
                    {id: '1',majorName: '数控自动化',leader:'张三、爱德华',annual: '2018',quarter: '第一季度',rank: '国家级',supportCount: '1',actualCount: '1'},
                    {id: '2',majorName: '铁道通信',leader:'王五、埃德加',annual: '2017',quarter: '第一季度',rank: '省级',supportCount: '1',actualCount: '2'},
                    {id: '3',majorName: '轨道交通技术',leader:'老李、佛龛、乐世达',annual: '2016',quarter: '第一季度',rank: '省级',supportCount: '2',actualCount: '2'},
                    {id: '4',majorName: '商务英语',leader:'赵四、青峰',annual: '2015',quarter: '第一季度',rank: '校级',supportCount: '3',actualCount: '5'},
                    {id: '5',majorName: '数控自动化',leader:'老李、木村乃',annual: '2018',quarter: '第二季度',rank: '国家级',supportCount: '1',actualCount: '1'},
                    {id: '6',majorName: '铁道通信',leader:'王五、宫本武藏',annual: '2017',quarter: '第二季度',rank: '省级',supportCount: '2',actualCount: '3'},
                    {id: '7',majorName: '轨道交通技术',leader:'赵四、花明楼',annual: '2016',quarter: '第二季度',rank: '校级',supportCount: '4',actualCount: '4'},
                    {id: '8',majorName: '商务英语',leader:'张三、普乐士',annual: '2015',quarter: '第二季度',rank: '国家级',supportCount: '2',actualCount: '2'},

                ]
            },
            autoLoad:true

        });


        /** 模糊查询框 */
        this.cycleButton = new Ext.CycleButton({
            width : 80,
            showText : true,
            items : [{
                text : '专业名称',
                value : 'majorName'
            }],
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

        Ext.project.QuarterAchievementPanel.superclass.constructor.call(this,{
            layout : 'border',
            items : [this.projectTree,this.grid]
        });

    },

    /** 实现新增操作按钮功能 */
    showInsertWindow : function() {
        if (this.addQuarterAchievementWindow == null) {
            this.addQuarterAchievementWindow = new Ext.project.QuarterAchievementWindow({
                saveUrl : this.Url.insertUrl,
                store : this.store
            });
            this.addQuarterAchievementWindow.setTitle('新增成果');
        }
        this.addQuarterAchievementWindow.show();
        this.addQuarterAchievementWindow.reset();
    },
    /** 实现修改操作按钮功能 */
    showUpdateWindow : function() {
        var records = this.grid.getSelectionModel().getSelections();
        if (records == null || records.length != 1) {
            Ext.Msg.alert('提示', '请选中一个成果');
            return false;
        }
        if (this.updateQuarterAchievementWindow == null) {
            this.updateQuarterAchievementWindow = new Ext.project.QuarterAchievementWindow({
                saveUrl : this.Url.insertUrl,
                store : this.store
            });
            this.updateQuarterAchievementWindow.setTitle('修改完成情况');
        }
        this.updateQuarterAchievementWindow.show();
        this.updateQuarterAchievementWindow.reset();
        this.updateQuarterAchievementWindow.loadRecord(records[0]);
    }




});