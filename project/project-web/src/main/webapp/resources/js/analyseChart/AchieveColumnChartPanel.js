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
            2022:[81,44,11,48,49,93,31],
            2021:[69,39,10,42,39,80,31],
            2020:[60,31,84,35,30,66,31],
            2019:[50,25,69,28,23,60,31],
            2018:[43,21,60,23,19,54,23]
        });

        this.dataMap.dataSchool = this.dataFormatter({
            //max : 4000,
            2022:[88,10,14,27,63,93,67],
            2021:[88,11,14,26,58,88,62],
            2020:[87,10,13,27,52,79,56],
            2019:[84,89,10,21,42,61,48],
            2018:[82,84,95,19,37,59,44]
        });

        this.dataMap.dataProvince = this.dataFormatter({
            2022:[21,24,61,27,23,45,19],
            2021:[20,21,52,23,17,38,15],
            2020:[18,16,43,19,12,30,13],
            2019:[14,13,34,14,96,28,10],
            2018:[12,10,29,11,75,26,60]
        });

        this.dataMap.dataCountry = this.dataFormatter({
            //max : 25000,
            2022:[58,19,38,18,19,37,16],
            2021:[48,16,33,16,15,32,14],
            2020:[40,13,28,13,12,28,12],
            2019:[34,11,24,11,10,24,10],
            2018:[29,99,21,99,81,22,65]
        });

        this.option = {
            baseOption: {
                timeline: {
                    axisType: 'category',
                    autoPlay: true,
                    playInterval: 3000,
                    data: [
                        '2018-01-01','2019-01-01','2020-01-01','2021-01-01', '2022-01-01'
                    ],
                    label: {
                        formatter : function(s) {
                            return (new Date(s)).getFullYear();
                        }
                    }
                },
                title: {
                    subtext: '显示成果建设情况'
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
                        // saveAsImage: {show: true}
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
                        type:'category',
                        // axisLabel:{interval:0},
                        axisLabel :{
                            interval:0,
                            rotate:-20,
                        },
                        data:['铁道供电技术','城市轨道交通运营管理','铁道通信与信息化技术','机械制造与自动化','城市轨道交通车辆技术','商务英语','数控技术']
                    }
                ],
                yAxis: [
                    {
                        type: 'value'
                    }
                ],
                series: [
                   /* {name: '院级', type: 'bar'},
                    {name: '校级', type: 'bar'},*/
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
                    title: {text: '2018高水平专业建设项目成果'},
                    series: [
                        {data: this.dataMap.dataProvince['2018']},
                        {data: this.dataMap.dataCountry['2018']},
                        {data: [
                                {name: '省级', value: this.dataMap.dataProvince['2018sum']},
                                {name: '国家级', value: this.dataMap.dataCountry['2018sum']}
                            ]}
                    ]
                },
                {
                    title : {text: '2019高水平专业建设项目成果'},
                    series : [
                        {data: this.dataMap.dataProvince['2019']},
                        {data: this.dataMap.dataCountry['2019']},
                        {data: [
                                {name: '省级', value: this.dataMap.dataProvince['2019sum']},
                                {name: '国家级', value: this.dataMap.dataCountry['2019sum']}
                            ]}
                    ]
                },
                {
                    title : {text: '2020高水平专业建设项目成果'},
                    series : [
                        {data: this.dataMap.dataProvince['2020']},
                        {data: this.dataMap.dataCountry['2020']},
                        {data: [
                                {name: '省级', value: this.dataMap.dataProvince['2020sum']},
                                {name: '国家级', value: this.dataMap.dataCountry['2020sum']}
                            ]}
                    ]
                },
                {
                    title : {text: '2021高水平专业建设项目成果'},
                    series : [
                        {data: this.dataMap.dataProvince['2021']},
                        {data: this.dataMap.dataCountry['2021']},
                        {data: [
                                {name: '省级', value: this.dataMap.dataProvince['2021sum']},
                                {name: '国家级', value: this.dataMap.dataCountry['2021sum']}
                            ]}
                    ]
                },
                {
                    title : {text: '2022高水平专业建设项目成果'},
                    series : [
                        {data: this.dataMap.dataProvince['2022']},
                        {data: this.dataMap.dataCountry['2022']},
                        {data: [
                                {name: '省级', value: this.dataMap.dataProvince['2022sum']},
                                {name: '国家级', value: this.dataMap.dataCountry['2022sum']}
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
            // title : '标志性成果完成情况',
            layout: 'fit',
            width : 800,
            items: [this.grid]
        })
    },
    dataFormatter : function (obj) {
        var pList = ['铁道供电技术','城市轨道交通运营管理','铁道通信与信息化技术','机械制造与自动化','城市轨道交通车辆技术','商务英语','数控技术'];
        var temp;
        for (var year = 2018; year <= 2022; year++) {
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