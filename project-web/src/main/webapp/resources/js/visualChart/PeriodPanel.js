Ext.ns('Ext.project');
Ext.project.PeriodPanel = Ext.extend(Ext.Panel, {
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

                series: [
                    {
                        name: ' 综合项目改革',
                        type: 'pie',
                        radius: ['25%', '30%'],
                        center: ['30%', '30%'],
                        startAngle: 225,
                        color: [new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#00a2ff'
                        }, {
                            offset: 1,
                            color: '#70ffac'
                        }]), "transparent"],
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        label: {
                            normal: {
                                position: 'center'
                            }
                        },
                        data: [{
                            value: 75,
                            name: '综合项目改革',
                            label: {
                                normal: {
                                    formatter: '综合项目改革',
                                    textStyle: {
                                        color: '#00a2ff',
                                        fontSize: 16

                                    }
                                }
                            }
                        }, {
                            value: 25,
                            name: '%',
                            label: {
                                normal: {
                                    formatter: '\n3',
                                    textStyle: {
                                        color: '#007ac6',
                                        fontSize: 30

                                    }
                                }
                            }
                        },
                            {
                                value: 0,
                                name: '%',
                                label: {
                                    normal: {
                                        formatter: '年',
                                        textStyle: {
                                            color: '#70ffac',
                                            fontSize: 16

                                        }
                                    }
                                }
                            }]
                    },
                    {
                        name: ' 教师队伍建设',
                        type: 'pie',
                        radius: ['25%', '30%'],
                        center: ['70%', '30%'],
                        startAngle: 225,
                        color: [new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#00a2ff'
                        }, {
                            offset: 1,
                            color: '#70ffac'
                        }]), "transparent"],
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        label: {
                            normal: {
                                position: 'center'
                            }
                        },
                        data: [{
                            value: 75,
                            name: '教师队伍建设',
                            label: {
                                normal: {
                                    formatter: '教师队伍建设',
                                    textStyle: {
                                        color: '#00a2ff',
                                        fontSize: 16

                                    }
                                }
                            }
                        }, {
                            value: 25,
                            name: '%',
                            label: {
                                normal: {
                                    formatter: '\n5',
                                    textStyle: {
                                        color: '#007ac6',
                                        fontSize: 30

                                    }
                                }
                            }
                        },
                            {
                                value: 0,
                                name: '%',
                                label: {
                                    normal: {
                                        formatter: '年',
                                        textStyle: {
                                            color: '#70ffac',
                                            fontSize: 16

                                        }
                                    }
                                }
                            }]
                    },
                    {
                        name: ' 高水平专业建设',
                        type: 'pie',
                        radius: ['25%', '30%'],
                        center: ['30%', '70%'],
                        startAngle: 225,
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        label: {
                            normal: {
                                position: 'center'
                            }
                        },
                        data: [{
                            value: 75,
                            "itemStyle": {
                                "normal": {
                                    "color": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        "offset": 0,
                                        "color": '#f125ff'
                                    }, {
                                        "offset": 1,
                                        "color": '#2dcbff'
                                    }]),
                                }
                            },
                            name: '高水平专业建设',
                            label: {
                                normal: {
                                    formatter: '高水平专业建设',
                                    textStyle: {
                                        color: '#f125ff',
                                        fontSize: 16

                                    }
                                }
                            }
                        }, {
                            value: 25,
                            name: '%',
                            label: {
                                normal: {
                                    formatter: '\n4',
                                    textStyle: {
                                        color: '#f125ff',
                                        fontSize: 30

                                    }
                                }
                            }
                        },
                            {
                                value: 0,
                                name: '%',
                                label: {
                                    normal: {
                                        formatter: '年',
                                        textStyle: {
                                            color: '#2dcbff',
                                            fontSize: 16

                                        }
                                    }
                                }
                            }]
                    },
                    {
                        name: '人事制度改革',
                        type: 'pie',
                        radius: ['25%', '30%'],
                        center: ['70%', '70%'],
                        startAngle: 225,
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        label: {
                            normal: {
                                position: 'center'
                            }
                        },
                        data: [{
                            value: 75,
                            "itemStyle": {
                                "normal": {
                                    "color": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        "offset": 0,
                                        "color": '#f125ff'
                                    }, {
                                        "offset": 1,
                                        "color": '#2dcbff'
                                    }])
                                }
                            },
                            name: '人事制度改革',
                            label: {
                                normal: {
                                    formatter: '人事制度改革',
                                    textStyle: {
                                        color: '#f125ff',
                                        fontSize: 16

                                    }
                                }
                            }
                        }, {
                            value: 25,
                            name: '%',
                            label: {
                                normal: {
                                    formatter: '\n3',
                                    textStyle: {
                                        color: '#f125ff',
                                        fontSize: 30

                                    }
                                }
                            }
                        },
                            {
                                value: 0,
                                name: '%',
                                label: {
                                    normal: {
                                        formatter: '年',
                                        textStyle: {
                                            color: '#2dcbff',
                                            fontSize: 16

                                        }
                                    }
                                }
                            }]
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

        Ext.project.PeriodPanel.superclass.constructor.call(this, {
            title : '项目工期',
            layout: 'fit',
            items: [this.grid]
        })
    }
});