Ext.ns('Ext.project');
Ext.project.ColumnChartPanel = Ext.extend(Ext.Panel, {
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
                color: ['#448ef6', '#3d6cb9'],
                title : {
                    text: '季度任务完成情况'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                legend: {
                    data: ['计划完成', '实际完成'],
                    x: 'right',
                },
                toolbox: {
                    show: true,
                    orient: 'vertical',
                    left: 'right',
                    top: 'center'
                },
                calculable: true,
                xAxis: [
                    {
                        type: 'category',
                        axisTick: {show: false},
                        data: ['一季度', '二季度', '三季度', '四季度']
                    }
                ],
                yAxis: [
                    {
                        type: 'value'
                    }
                ],
                series: [
                    {
                        name: '计划完成',
                        type: 'bar',
                        barGap: 0,
                        data: [20, 35, 24, 16]
                    },
                    {
                        name: '实际完成',
                        type: 'bar',
                        data: [20, 34, 24, 12]
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

        Ext.project.ColumnChartPanel.superclass.constructor.call(this, {
            //title : '季度工作计划完成情况',
            layout: 'fit',
            bodyStyle : 'border:0px;overflow-x:hidden;overflow-y:auto;',
            items: [this.grid]
        })
    }
});