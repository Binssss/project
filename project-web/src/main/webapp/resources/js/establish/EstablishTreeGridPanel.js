Ext.ns('Ext.project');
Ext.project.EstablishTreeGridPanel = new Ext.extend(Ext.ux.tree.TreeGrid, {

    constructor: function (_config) {

        Ext.apply(this, _config || {});

        /** 当前页面的请求路径 */
        this.baseModulesUrl = {
            treeLoadUrl: 'project/establish/treeGridLoad',
            insertUrl: 'project/establish/insert',
            updateUrl: 'project/establish/update',
            deleteUrl: 'project/establish/delete'
        };

        /** 顶部工具栏 */
        this.actionToolBar = new Ext.ActionToolbar({
            actionPanel: this,
            actionJson : this.actionJson,
            addFunction : this.showInsertWindow,
            editFunction : this.showUpdateWindow
        });


        Ext.project.EstablishTreeGridPanel.superclass.constructor.call(this, {
            columns: [/*{
                dataIndex : 'id',
                hidden : true
            }, */{
                header : '项目名称',
                dataIndex : 'projectName',
                width:200
            }, {
                header : '项目简介',
                dataIndex : 'projectDetail',
                width:200
            }, {
                header : '项目类型',
                dataIndex : 'projectType',
                width:200
            }, {
                header : '开始时间',
                dataIndex : 'projectCreateTime',
                renderer : Ext.util.Format.dateRenderer('Y/m/d  H:i:s'),
                width:150
            }, {
                header : '结束时间',
                dataIndex : 'projectEndTime',
                width:200,
                renderer : Ext.util.Format.dateRenderer('Y/m/d  H:i:s')
            }, {
                header : '总负责人',
                dataIndex : 'leader',
                width:200
            },{
                header : '是否完结',//0 未完結  1 已完結
                dataIndex : 'projectIsFinish',
                width:200,
                renderer : function(value) {
                    if (value == 1) {
                        return '<div style=";color:#4ef037;">已完結</div>';
                    }else {
                        return '<div style=";color:red;">未完結</div>';
                    }
                }
            } ],
            enableSort: false,
            loader: new Ext.ux.tree.TreeGridLoader({
                dataUrl: this.baseModulesUrl.treeLoadUrl,
                baseParams: {
                    appId: 0
                }
            }),
            tbar: this.actionToolBar,
            listeners: {
                'click': this.enableToolBar,
                'dblclick': function (node, e) {
                    if (!node.leaf) {
                        this.showDetailWindow;
                    } else {

                    }
                },
                scope: this
            }

        });
    },

    enableToolBar: function (node) {
        if (node) {
            this.actionToolBar.enableEditDelete();
        } else {
            this.actionToolBar
        }
        node.select();
    },
    /** 显示新增窗口 */
    showAddWindow: function () {
        var node = this.getSelectionModel().getSelectedNode();
        var parent;
        var record;
        if (node) {
            parent = {
                moduleId: node.attributes.moduleId,
                moduleName: node.attributes.moduleName
            };
            record = new Ext.data.Record({
                parent: parent,
                parentId: node.attributes.moduleId,
                app: node.attributes.app
            });
        } else {
            record = new Ext.data.Record({
                app: this.app
            });
        }

        if (this.addWin == null) {
            this.addWin = new Ext.basic.ModuleFormWin({
                saveUrl: this.baseModulesUrl.insertUrl,
                rootNode: this.getRootNode(),
                module: this.module
            });
            this.addWin.setTitle('新增模块');
        }
        this.addWin.show();
        this.addWin.reset();
        if (record) {
            this.addWin.loadRecord(record);
        }
    },

    showEditWindow: function () {
        var node = this.getSelectionModel().getSelectedNode();
        if (node) {
            this.showDetailWindow(node);
        } else {
            Ext.MessageBox.alert('提示', '你必须选中一个模块！');
        }
    },
    /** 显示详细信息窗口 */
    showDetailWindow: function (node) {
        var parentNode = node.parentNode;
        var parent;
        if (parentNode != this.getRootNode()) {
            parent = {
                moduleId: parentNode.attributes.moduleId,
                moduleName: parentNode.attributes.moduleName
            };
        }
        var record = new Ext.data.Record({
            moduleId: node.attributes.moduleId,
            moduleName: node.attributes.moduleName,
            moduleUrl: node.attributes.moduleUrl,
            parentId: node.attributes.parentId,
            displayIndex: node.attributes.displayIndex,
            leaf: node.attributes.leaf,
            expanded: node.attributes.expanded,
            isDisplay: node.attributes.isDisplay,
            iconCss: node.attributes.iconCss,
            information: node.attributes.information,
            isMobileWeb: node.attributes.isMobileWeb,
            parent: parent,
            app: {
                id: node.attributes.app.id,
                appName: node.attributes.app.appName
            }
        });
        //
        if (this.editWin == null) {
            this.editWin = new Ext.basic.ModuleFormWin({
                saveUrl: this.baseModulesUrl.updateUrl,
                rootNode: this.getRootNode(),
                module: this.module
            });
            this.editWin.setTitle('修改模块信息');
        }
        this.editWin.show();
        this.editWin.reset();
        this.editWin.loadRecord(record);
    },
    /** 删除数据 */
    deleteData: function () {
        /** 选中的记录 */
        var node = this.getSelectionModel().getSelectedNode();
        /** 存放id的数组 */
        var array = [];
        if (node == undefined) {
            Ext.MessageBox.show({
                title: '警告',
                icon: Ext.MessageBox.WARNING,
                buttons: Ext.MessageBox.OK,
                msg: '请选择要删除的记录'
            });
            return false;
        } else if (node.hasChildNodes()) {
            Ext.MessageBox.show({
                title: '警告',
                icon: Ext.MessageBox.WARNING,
                buttons: Ext.MessageBox.OK,
                msg: '该模块下还有子模块,不能删除！'
            });
            return false;

        } else {
            Ext.MessageBox.confirm('提示', '你确定要删除选中的记录吗？', function (btn) {
                if (btn == 'yes') {
                    Ext.Ajax.request({
                        url: this.baseModulesUrl.deleteUrl
                        + '/'
                        + node.attributes.moduleId,
                        method: 'post',
                        success: function (response, options) {
                            var text = Ext
                                .decode(response.responseText);
                            if(text.msg == "1"){
                                Ext.Msg.alert("失败","删除前请取消模块的人员关联!") ;
                            }else {
                                node.parentNode.removeChild(node);
                            }
                        },
                        failure: function (response, options) {
                            Ext.MessageBox.alert('提示', '请求失败！');
                        },
                        scope: this
                    });

                }
            }, this);
        }
    },
    loadData: function (appId, appName) {
        //this.getLoader().baseParams.appId = appId;
        this.getRootNode().reload();

    },
    /**
     * 显示关联信息窗口
     */
    showRelativeWin: function () {
        var node = this.getSelectionModel().getSelectedNode();
        if (node) {
            if (!this.relativeWin) {
                this.relativeWin = new Ext.basic.ModuleRelativeWin();
            }
            this.relativeWin.show();
            this.relativeWin.loadData(node.attributes.moduleId);
        }

    },
    /** 实现新增操作按钮功能 */
    showInsertWindow : function() {
        if (this.addEstablishWindow == null) {
            this.addEstablishWindow = new Ext.project.EstablishWindow({
                saveUrl : this.baseModulesUrl.insertUrl,
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
                saveUrl : this.baseModulesUrl.insertUrl,
                store : this.store
            });
            this.updateEstablishWindow.setTitle('修改项目');
        }
        this.updateEstablishWindow.show();
        this.updateEstablishWindow.reset();
        this.updateEstablishWindow.loadRecord(records[0]);
    }

});