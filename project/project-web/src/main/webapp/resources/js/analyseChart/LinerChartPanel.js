Ext.ns('Ext.project');
Ext.project.LinerChartPanel = Ext.extend(Ext.Panel, {
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
                xAxis: {
                    type: 'category',
                    data: ['生师比', '生均图书', '生均教学科研仪器设备值', '生均年进书量', '双师素质专任教师高级职称比例', '国家级教学名师', '省级教学团队'],
                    axisLabel :{
                        interval:0,
                        rotate:-10
                    }
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: [820, 932, 901, 934, 1290, 1330, 1320],
                    type: 'line',
                    itemStyle : {
                        normal: {
                            label : {
                                show: true
                            }
                        }
                    }
                }]
            };

        this.grid = new Ext.loanStatistics.EchartsPanel({
            region: 'center',
            autoScroll:true,
            viewConfig : {
                forceFit : true
            },
            option : this.option
        });

        Ext.project.LinerChartPanel.superclass.constructor.call(this, {
            title : '量化指标实时进度',
            height : 400,
            width : '100%',
            layout: 'fit',
            items: [this.grid]
        })
    }
});