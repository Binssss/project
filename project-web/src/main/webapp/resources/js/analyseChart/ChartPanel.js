Ext.ns('Ext.project');
Ext.project.ChartPanel = Ext.extend(Ext.Panel, {
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
                    //this.grid.getStore().baseParams.projectId = node.id;
                    //this.grid.doLayout();
                    // this.grid.getStore().baseParams.projectId = node.id;
                    // this.grid.load();
                    // this.grid.load({
                    //     url: '/project/analyChart'/*,
                    //     params: {param1: 'foo', param2: 'bar'}, // or a URL encoded string
                    //     callback: yourFunction,
                    //     scope: yourObject, // optional scope for the callback
                    //     discardUrl: false,
                    //     nocache: false,
                    //     text: 'Loading...',
                    //     timeout: 30,
                    //     scripts: false*/
                    // });
                    //this.grid.setProjectId(node.id);
                },
                scope: this
            }
        });
        this.projectTree.expandAll();
        this.grid = new Ext.project.AnalyseChartFormPanel({
            region : 'center'
        });
        Ext.project.ChartPanel.superclass.constructor.call(this, {
            layout: 'border',
            items: [this.projectTree, this.grid]
        });


    }
});