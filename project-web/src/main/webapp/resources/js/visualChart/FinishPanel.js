Ext.ns('Ext.project');
Ext.project.FinishPanel = Ext.extend(Ext.Panel, {
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
                title : {
                    text: '项目结项',
                    textStyle:{
                        color : '#fff'
                    }

                },
                color: ['#f67280', 'rgba(19, 173, 255, 1)','#fef778','#4ef037','#6a65d8','#ca82f8','#f85959'],
                backgroundColor: '#000',
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                legend: {
                    bottom: 10,
                    left: 'center',
                    textStyle: {
                        fontSize: 14,
                        color: '#ffffff'
                    },
                    data:['学分制度改革','人事制度改革','国际高铁合作','科学研究和社会服务建设','教师队伍建设','综合改革项目','高水平专业建设']
                },
                series: [
                    {
                        name:'标志性成果',
                        type:'pie',
                        radius: ['30%', '50%'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: true,
                                //position: 'center'
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    fontSize: '30',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: true
                            }
                        },
                        data:[
                            {value:335, name:'学分制度改革'},
                            {value:310, name:'人事制度改革'},
                            {value:234, name:'国际高铁合作'},
                            {value:435, name:'科学研究和社会服务建设'},
                            {value:135, name:'教师队伍建设'},
                            {value:135, name:'综合改革项目'},
                            {value:548, name:'高水平专业建设'}
                        ]
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

        Ext.project.FinishPanel.superclass.constructor.call(this, {
            //title : '项目结项',
            layout: 'fit',
            //bodyStyle:'border:3px solid #555',
            items: [this.grid]
        })
    }
});