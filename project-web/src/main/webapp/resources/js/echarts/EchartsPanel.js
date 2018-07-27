Ext.ns('Ext.loanStatistics');
Ext.loanStatistics.EchartsPanel = Ext.extend(Ext.BoxComponent ,{
    option: null,
    border: true,
    //修改/刷新数据
    modifyOption: function(option){
        var me = this;
        me.option = option;
        me.echarts.clear();
        me.echeartOption(me);
    },
    //初始化box组件
    initComponent:function() {
        var me = this;
        me.on("resize", function (me, mewidth, meheight) {
            me.getEl().dom.style.height = meheight + 'px';
            me.echarts = echarts.init(me.getEl().dom);
            me.echeartOption(me);
        });

    },
    //初始化echarts图表
    echeartOption: function(me){
        me.echarts.setOption(me.option);
        me.echarts.on('click', function (params) {
            me.myOpenTab('_authority_1881','大数据分析','1','/project/analyseChart');
        });
    },
    myOpenTab : function(id,text,css, url, parentTab, iconCls) {
    var id = id;
    title = text;
    // 设置在哪个元素打开
    tabPanel = parentTab === undefined ? index.tabPanel : parentTab;
    css = css;
    var url = encodeURI(encodeURI(url));
    // tab页不存在的场合
    tab = tabPanel.get(id);
    autoLoad = {
        url : url,
        params : {
            id : id + "_div"
        },
        method : "GET",
        scripts : true,
        nocache : true
    };
    if (!tab) {
        var newTab = {
            id : id,
            title : title,
            iconCls : css,
            closable : true,
            autoScroll : false,
            autoLoad : autoLoad,
            listeners : {
                activate : function(Panel) {
                    // 自动调节高度和宽度
                    var inPanel = Ext.getCmp(Panel.id + "_div_panel");
                    if (inPanel) {
                        inPanel.doLayout(true, true);
                        inPanel.setHeight(tabPanel.getInnerHeight() - 1);
                        inPanel.setWidth(Panel.getWidth());
                    }
                }
            }
        };
        tabPanel.add(newTab).show();
        // 限制最多能开10个tab
        if (tabPanel.items.length > 10) {
            var firstTab = tabPanel.get(tabPanel.items.items[1]);
            if (firstTab) {
                tabPanel.remove(firstTab);
            }
        }
    } else {
        // tab页已经存在的场合
        tab.getUpdater().update(autoLoad);
        tabPanel.setActiveTab(tab);
    }
}
});