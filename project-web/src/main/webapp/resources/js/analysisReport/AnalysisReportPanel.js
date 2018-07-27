Ext.ns('Ext.project');
Ext.project.AnalysisReportPanel = new Ext.extend(Ext.Panel, {
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
            queryUrl : 'project/analysisReport/queryListForPage',
            insertUrl : 'project/analysisReport/insert',
            updateUrl : 'project/analysisReport/update',
            deleteUrl : 'project/analysisReport/delete'
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
            header : '标题',
            dataIndex : 'title',
            width : 150
        }, {
            header : '时间',
            dataIndex : 'createTime',
            renderer : Ext.util.Format.dateRenderer('Y/m/d  H:i:s')
        }, {
            header : '撰写人',
            dataIndex : 'writer'
        }, {
            header : '内容',
            dataIndex : 'reportContent',
            width : 200
        }, {
            header : '备注',
            dataIndex : 'remark',
            width : 150
        }]);

        this.store=new Ext.data.JsonStore({
           // url:this.Url.queryUrl,
            fields : [ 'id', 'title', {
                name : 'createTime',
                type : 'date',
                dateFormat : 'time'
            },'writer','reportContent','remark'],
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
                    {id: '1',title: '铁道通信技术分析报告',createTime: '1522425600000',writer: '张三',reportContent: '近几年来由通信技术的快速发展,其在许多领已经得到广泛的应用. 为了完成铁路速度、调整和重载运输的目标,我国积极引进先进的技术,铁路通信工程施工技术不断的在提高.本文主要分析和总结现阶段铁路通信工程施工技术, 以确保铁路通信成为提高列车运输速度和运行安全的一个重要工具.',remark: '铁道通信技术分析报告'},
                    {id: '2',title: '城市轨道交通车辆技术分析报告',createTime: '1522339200000',writer: '王五',reportContent: '截至2014年末,全国共开通城市轨道交通运营线路长度3173km。其中地铁2361km,轻轨239km,单轨89km,现代有轨电车141km,磁浮交通30km,市域快轨308km,APM4km',remark: '城市轨道交通车辆技术分析报告'},
                    {id: '3',title: '数控技术分析报告',createTime: '1522339200000',writer: '老六',reportContent: '数控枝术的应用是提高制造业的产品质量和劳动生产率必不可少的重要手段;数控机床是国防工业现代化的重要战略装备.作者通过社会调研分析数控专业社会背景、行业背景,数控技术专业人才的层次和来源.对本地区数控技术人才的需求,作出具体预测,为数控专业建设提供理论基础.',remark: '数控技术分析报告'},
                    {id: '4',title: '机械制造与自动化分析报告',createTime: '1522425600000',writer: '赵四',reportContent: '通过对企业机械制造与自动化工程技术人才现状的分析,进行了本专业人才需求预测,提出了知识结构要求',remark: '机械制造与自动化分析报告'}
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
                text : '撰写人',
                value : 'writer'
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

        Ext.project.AnalysisReportPanel.superclass.constructor.call(this,{
            layout : 'border',
            items : [this.projectTree,this.grid]
        });

    },

    /** 实现新增操作按钮功能 */
    showInsertWindow : function() {
        if (this.addAnalysisReportWindow == null) {
            this.addAnalysisReportWindow = new Ext.project.AnalysisReportWindow({
                saveUrl : this.Url.insertUrl,
                store : this.store
            });
            this.addAnalysisReportWindow.setTitle('撰写报告');
        }
        this.addAnalysisReportWindow.show();
        this.addAnalysisReportWindow.reset();
    },
    /** 实现修改操作按钮功能 */
    showUpdateWindow : function() {
        var records = this.grid.getSelectionModel().getSelections();
        if (records == null || records.length != 1) {
            Ext.Msg.alert('提示', '请选中一个报告');
            return false;
        }
        if (this.updateAnalysisReportWindow == null) {
            this.updateAnalysisReportWindow = new Ext.project.AnalysisReportWindow({
                saveUrl : this.Url.insertUrl,
                store : this.store
            });
            this.updateAnalysisReportWindow.setTitle('修改报告');
        }
        this.updateAnalysisReportWindow.show();
        this.updateAnalysisReportWindow.reset();
        this.updateAnalysisReportWindow.loadRecord(records[0]);
    }




});