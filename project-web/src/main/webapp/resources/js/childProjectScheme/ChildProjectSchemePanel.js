Ext.ns('Ext.project');
Ext.project.ChildProjectSchemePanel = new Ext.extend(Ext.Panel, {
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
            queryUrl : 'project/childProjectScheme/queryListForPage',
            insertUrl : 'project/childProjectScheme/insert',
            updateUrl : 'project/childProjectScheme/update',
            deleteUrl : 'project/childProjectScheme/delete'
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
        this.cm = new Ext.grid.ColumnModel([this.sm,{
            dataIndex : 'id',
            hidden : true
        }, {
            header : '子项目建设方案',
            dataIndex : 'fileName',
            width : 150
        }, {
            header : '上传时间',
            dataIndex : 'uploadTime',
            renderer : Ext.util.Format.dateRenderer('Y/m/d  H:i:s')
        }, {
            header : '上传人',
            dataIndex : 'uploader'
        }, {
            header : '文件描述',
            dataIndex : 'fileDesc',
            width : 200
        }, {
            header : '文件类型',
            dataIndex : 'fileType'
        }/*,{
            header : '状态',
            dataIndex : 'status',
            renderer : function(value) {
                if (value == 1) {
                    return '<div style=";color:#4ef037;">已通过</div>';
                }else {
                    return '<div style=";color:red;">待审核</div>';
                }
            }
        }*/]);

        this.store=new Ext.data.JsonStore({
            //url:this.Url.queryUrl,
            fields : [ 'id', 'fileName', {
                name : 'uploadTime',
                type : 'date',
                dateFormat : 'time'
            },'uploader','fileDesc', 'fileType','status' ],
            method:'POST',
            root:'rows',
            totalProperty:'results',
            baseParams:{
                start:0,
                limit:this.pageSize
            },
            data: {
                "results" : 4,
                "rows" : [
                    {id: '1',fileName: '铁道供电技术',uploadTime: '1522482884000',uploader: '张三',fileDesc: '铁道供电技术建设方案',fileType: '.doc'/*,status:'0'*/},
                    {id: '2',fileName: '商务英语',uploadTime: '1522425600000',uploader: '王五',fileDesc: '商务英语建设方案',fileType: '.doc'/*,status:'1'*/},
                    {id: '3',fileName: '数控技术',uploadTime: '1522482884000',uploader: '老六',fileDesc: '数控技术建设方案',fileType: '.doc'},
                    {id: '4',fileName: '机械制造与自动化',uploadTime: '1522425600000',uploader: '赵四',fileDesc: '机械制造与自动化建设方案',fileType: '.doc'}
                ]
            },
            autoLoad:true
        });


        /** 模糊查询框 */
        this.cycleButton = new Ext.CycleButton({
            width : 80,
            showText : true,
            items : [ {
                text : '文件名称',
                value : 'fileName'
            }, {
                text : '文件类型',
                value : 'fileType'
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
        this.actionToolBar.add([/*{
            text : '审核',
            scope : this,
            iconCls : 'reset_pwd',
            handler : this.showCheckWindow
        },*/this.cycleButton,'-',this.searchField ,'-','筛选状态：',this.cycleButton1]);

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

        Ext.project.ChildProjectSchemePanel.superclass.constructor.call(this,{
            layout : 'border',
            items : [this.projectTree,this.grid]
        });

    },

    /** 实现新增操作按钮功能 */
    showInsertWindow : function() {
        if (this.addChildProjectSchemeWindow == null) {
            this.addChildProjectSchemeWindow = new Ext.project.ChildProjectSchemeWindow({
                saveUrl : this.Url.insertUrl,
                store : this.store
            });
            this.addChildProjectSchemeWindow.setTitle('新增方案');
        }
        this.addChildProjectSchemeWindow.show();
        this.addChildProjectSchemeWindow.reset();
    },
    /** 实现修改操作按钮功能 */
    showUpdateWindow : function() {
        var records = this.grid.getSelectionModel().getSelections();
        if (records == null || records.length != 1) {
            Ext.Msg.alert('提示', '请选中一个方案');
            return false;
        }
        if (this.updateChildProjectSchemeWindow == null) {
            this.updateChildProjectSchemeWindow = new Ext.project.ChildProjectSchemeWindow({
                saveUrl : this.Url.insertUrl,
                store : this.store
            });
            this.updateChildProjectSchemeWindow.setTitle('修改方案');
        }
        this.updateChildProjectSchemeWindow.show();
        this.updateChildProjectSchemeWindow.reset();
        this.updateChildProjectSchemeWindow.loadRecord(records[0]);
    },
    showCheckWindow : function(){
        var records = this.grid.getSelectionModel().getSelections();
        if (records == null || records.length != 1) {
            Ext.Msg.alert('提示', '请选中一个方案');
            return false;
        }
        if (this.checkChildProjectSchemeWindow == null) {
            this.checkChildProjectSchemeWindow = new Ext.project.CheckChildProjectSchemeWindow({
                saveUrl : this.Url.insertUrl,
                store : this.store
            });
            this.checkChildProjectSchemeWindow.setTitle('审核方案');
        }
        this.checkChildProjectSchemeWindow.show();
        this.checkChildProjectSchemeWindow.reset();
        this.checkChildProjectSchemeWindow.loadRecord(records[0]);
    }




});