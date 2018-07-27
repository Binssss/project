Ext.ns('Ext.project');
Ext.project.EstablishPanel = Ext.extend(Ext.Panel, {
    option : null,
    border: true,
    option2: null,
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
                title : {
                    text: '项目申报',
                    textStyle:{
                        color : '#fff'
                    }

                },
                backgroundColor: '#000',
                color: ['#0074e4'],
                textStyle: {
                    fontSize: 14,
                    color: '#ffffff'
                },
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis : [
                    {
                        type : 'category',
                        data : ['2017','2018','2019', '2020', '2021', '2022'],
                        axisTick: {
                            alignWithLabel: true
                        }
                    }
                ],
                yAxis : [
                    {
                        type : 'value'
                    }
                ],
                series : [
                    {
                        name:'申报个数',
                        type:'bar',
                        barWidth: '60%',
                        data:[10, 16, 24, 23, 18, 22]
                    }
                ]
            };

        this.grid = new Ext.loanStatistics.EchartsPanel({
            region: 'west',
            autoScroll:true,
            viewConfig : {
                forceFit : true
            },
            option : this.option
        });

        Ext.project.EstablishPanel.superclass.constructor.call(this, {
            //title : '项目申报',
            layout: 'fit',
           // bodyStyle:'border:3px solid #555',
            items: [this.grid]
        })
    }
});