Ext.ns('Ext.project');
Ext.project.AcceptancePanel = Ext.extend(Ext.Panel, {
	projectId : null,
    constructor: function (config) {
        if (config == null) {
            config = {};
        }
        Ext.apply(this, config);

        /** 项目列表 */
        this.projectTree = new Ext.project.ProjectTreePanel({
            treeType: 0,
            rootVisible: false,
            width: 200,
            url: this.Url,
            userType: 1,
            region: 'west',
            title: '项目列表',
            listeners: {
                'click': function (node) {
                    this.projectId = node.id;
                    this.grid.getStore().baseParams.projectId = node.id;
                    this.grid.getStore().load();
                    this.grid.setProjectId(node.id);
                },
                scope: this
            }
        });
        this.projectTree.expandAll();
        this.grid = new Ext.project.SynbolicAchievementGridPanel({
            title: '标志性成果一览表',
            region : 'center'
        });
        Ext.project.AcceptancePanel.superclass.constructor.call(this, {
            layout: 'border',
            items: [this.projectTree, this.grid]
        });


    }
});