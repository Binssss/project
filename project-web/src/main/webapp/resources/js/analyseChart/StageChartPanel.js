Ext.ns('Ext.project');
Ext.project.StageChartPanel = Ext.extend(Ext.Panel, {
    option : null,
    border: true,
    constructor : function(config) {
        if (config == null) {
            config = {};
        }
        Ext.apply(this, config);
        // 每页显示10条
        this.pageSize = 10;
        // 增删改查方法路径
        this.Url = {
            queryUrl: 'project/Schedule/queryListForPage',
            insertUrl: 'project/Schedule/insert',
            updateUrl: 'project/Schedule/update',
            deleteUrl: 'project/Schedule/delete'
        },

        Ext.project.StageChartPanel.superclass.constructor.call(this, {
            // title : '量化指标完成情况',
            layout: 'fit',
            width : 600,
            fitToFrame: true,
            html:'<iframe id="frame1" src="/project/resources/js/progress/progress.html" frameborder="0" width="100%" height="100%"></iframe>'
        })
    },

});