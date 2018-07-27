Ext.ns('Ext.project');
Ext.project.AchieveColumnChartPanel = Ext.extend(Ext.Panel, {
    option : null,
    border: true,
    dataMap : {
        dataAcademy : null,
        dataSchool : null,
        dataProvince : null,
        dataCountry : null
    },
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
        this.dataMap.dataAcademy = this.dataFormatter({
            //max : 60000,
            2018:[81,44,11,48,49,93,31],
            2017:[69,39,10,42,39,80,31],
            2016:[60,31,84,35,30,66,31],
            2015:[50,25,69,28,23,60,31],
            2014:[43,21,60,23,19,54,23]

        });

        this.dataMap.dataSchool = this.dataFormatter({
            //max : 4000,
            2018:[88,10,14,27,63,93,67],
            2017:[88,11,14,26,58,88,62],
            2016:[87,10,13,27,52,79,56],
            2015:[84,89,10,21,42,61,48],
            2014:[82,84,95,19,37,59,44]
        });

        this.dataMap.dataProvince = this.dataFormatter({
            2018:[21,24,61,27,23,45,19],
            2017:[20,21,52,23,17,38,15],
            2016:[18,16,43,19,12,30,13],
            2015:[14,13,34,14,96,28,10],
            2014:[12,10,29,11,75,26,60]
        });

        this.dataMap.dataCountry = this.dataFormatter({
            //max : 25000,
            2018:[58,19,38,18,19,37,16],
            2017:[48,16,33,16,15,32,14],
            2016:[40,13,28,13,12,28,12],
            2015:[34,11,24,11,10,24,10],
            2014:[29,99,21,99,81,22,65]
        });

        this.option = {
            baseOption: {
                timeline: {
                    axisType: 'category',
                    autoPlay: true,
                    playInterval: 3000,
                    data: [
                        '2014-01-01','2015-01-01','2016-01-01','2017-01-01', '2018-01-01'
                    ],
                    label: {
                        formatter : function(s) {
                            return (new Date(s)).getFullYear();
                        }
                    }
                },
                title: {
                    subtext: ''
                },
                tooltip: {
                },
                legend: {
                    x: 'center',
                    data: ['省级', '国家级']
                },
                calculable : true,
                toolbox: {
                    feature: {
                        // dataView: {show: true, readOnly: false},
                        saveAsImage: {show: true}
                    }
                },

                grid: {
                    top: 80,
                    bottom: 100,
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    }
                },
                xAxis: [
                    {
                        axisLabel :{
                            interval:0,
                            rotate:-20,

                        },
                        type:'category',
                        data:['铁道供电技术','城市轨道交通运营管理','铁道通信与信息化技术','机械制造与自动化','城市轨道交通车辆技术','商务英语','数控技术']
                    }
                ],
                yAxis: [
                    {
                        type: 'value'
                    }
                ],
                series: [
                    {name: '省级', type: 'bar'},
                    {name: '国家级', type: 'bar'},
                    {
                        type: 'pie',
                        center: ['85%', '20%'],
                        radius: '28%',
                        z: 100
                    }
                ]
            },
            options: [
                {
                    title: {text: '2014高水平专业建设项目成果'},
                    series: [
                        {data: this.dataMap.dataProvince['2014']},
                        {data: this.dataMap.dataCountry['2014']},
                        {data: [
                                {name: '省级', value: this.dataMap.dataProvince['2014sum']},
                                {name: '国家级', value: this.dataMap.dataCountry['2014sum']}
                            ]}
                    ]
                },
                {
                    title : {text: '2015高水平专业建设项目成果'},
                    series : [
                        {data: this.dataMap.dataProvince['2015']},
                        {data: this.dataMap.dataCountry['2015']},
                        {data: [
                                {name: '省级', value: this.dataMap.dataProvince['2015sum']},
                                {name: '国家级', value: this.dataMap.dataCountry['2015sum']}
                            ]}
                    ]
                },
                {
                    title : {text: '2016高水平专业建设项目成果'},
                    series : [
                        {data: this.dataMap.dataProvince['2016']},
                        {data: this.dataMap.dataCountry['2016']},
                        {data: [
                                {name: '省级', value: this.dataMap.dataProvince['2016sum']},
                                {name: '国家级', value: this.dataMap.dataCountry['2016sum']}
                            ]}
                    ]
                },
                {
                    title : {text: '2017高水平专业建设项目成果'},
                    series : [
                        {data: this.dataMap.dataProvince['2017']},
                        {data: this.dataMap.dataCountry['2017']},
                        {data: [
                                {name: '省级', value: this.dataMap.dataProvince['2017sum']},
                                {name: '国家级', value: this.dataMap.dataCountry['2017sum']}
                            ]}
                    ]
                },
                {
                    title : {text: '2018高水平专业建设项目成果'},
                    series : [
                        {data: this.dataMap.dataProvince['2018']},
                        {data: this.dataMap.dataCountry['2018']},
                        {data: [
                                {name: '省级', value: this.dataMap.dataProvince['2018sum']},
                                {name: '国家级', value: this.dataMap.dataCountry['2018sum']}
                            ]}
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

        Ext.project.AchieveColumnChartPanel.superclass.constructor.call(this, {
            //title : '标志性成果完成情况',
            layout: 'fit',
            width : 800,
            items: [this.grid]
        })
    },
    dataFormatter : function (obj) {
        var pList = ['铁道供电技术','城市轨道交通运营管理','铁道通信与信息化技术','机械制造与自动化','城市轨道交通车辆技术','商务英语','数控技术'];
        var temp;
        for (var year = 2014; year <= 2018; year++) {
            var max = 0;
            var sum = 0;
            temp = obj[year];
            for (var i = 0, l = temp.length; i < l; i++) {
                max = Math.max(max, temp[i]);
                sum += temp[i];
                obj[year][i] = {
                    name : pList[i],
                    value : temp[i]
                }
            }
            obj[year + 'max'] = Math.floor(max / 100) * 100;
            obj[year + 'sum'] = sum;
        }
        return obj;
    }

});