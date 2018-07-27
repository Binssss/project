Ext.ns('Ext.project');
Ext.project.PieChartPanel = Ext.extend(Ext.Panel, {
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
            this.option = {
                title: {
                    text: '项目经费使用情况',
                    x: 'center'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: ['交通费用', '车辆使用费用', '固定支出费用', '差旅费', '办公费',"会务费用","其他"]
                },
                series: [
                    {
                        name: '使用情况',
                        type: 'pie',
                        radius: '55%',
                        center: ['50%', '60%'],
                        data: [
                            {value: 33.5, name: '交通费用'},
                            {value: 31.0, name: '车辆使用费用'},
                            {value: 113.4, name: '固定支出费用'},
                            {value: 13.5, name: '差旅费'},
                            {value: 154.8, name: '办公费'},
                            {value: 15.8, name: '会务费用'},
                            {value: 25.4, name: '其他'}
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            };

        this.grid = new Ext.loanStatistics.EchartsPanel({
            region: 'center',
            autoScroll:true,
            viewConfig : {
                forceFit : true
            },
            option : this.option
        });

        Ext.project.PieChartPanel.superclass.constructor.call(this, {
            // title : '年度经费使用情况',
            layout: 'fit',
            items: [this.grid]
        })
    }
});