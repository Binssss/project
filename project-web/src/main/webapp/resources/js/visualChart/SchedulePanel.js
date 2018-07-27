Ext.ns('Ext.project');
Ext.project.SchedulePanel = Ext.extend(Ext.Panel, {
    option : null,
    border: true,
    imgPath : 'http://bmob-cdn-15355.b0.upaiyun.com/2017/12/01/bee4341c4089af7980b87074a77479ad.png',
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
        }
        this.option = {
            title : {
                text: '项目进度',
                textStyle:{
                    color : '#fff'
                }

            },
            backgroundColor: '#000',
            series: [{
                name: ' 教师队伍建设',
                type: 'pie',
                radius: ['20%', '25%'],
                center: ['15%', '30%'],
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
                        show: true
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
                                color: '#fff',
                                fontSize: 16
                            },
                            position : 'outside'
                        }
                    }
                }, {
                    value: 25,
                    name: '%',
                    label: {
                        normal: {
                            formatter: '\n100%',
                            textStyle: {
                                color: '#007ac6',
                                fontSize: 25

                            }
                        }
                    }
                },
                    {
                        value: 0,
                        name: '%',
                        label: {
                            normal: {
                                formatter: '完成度',
                                textStyle: {
                                    color: '#fff',
                                    fontSize: 16

                                }
                            }
                        }
                    }
                ]
            }, {
                name: ' 高水平专业建设',
                type: 'pie',
                radius: ['20%', '25%'],
                center: ['55%', '30%'],
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
                        show: true
                    }
                },
                label: {
                    normal: {
                        position: 'center'
                    }
                },
                data: [{
                    value: 75,
                    name: '高水平专业建设',
                    label: {
                        normal: {
                            formatter: '高水平专业建设',
                            textStyle: {
                                color: '#fff',
                                fontSize: 16
                            },
                            position : 'outside'
                        }
                    }
                }, {
                    value: 25,
                    name: '%',
                    label: {
                        normal: {
                            formatter: '\n100%',
                            textStyle: {
                                color: '#007ac6',
                                fontSize: 25

                            }
                        }
                    }
                },
                    {
                        value: 0,
                        name: '%',
                        label: {
                            normal: {
                                formatter: '完成度',
                                textStyle: {
                                    color: '#fff',
                                    fontSize: 16

                                }
                            }
                        }
                    }
                ]
            }, {
                name: ' 人事制度改革',
                type: 'pie',
                radius: ['20%', '25%'],
                center: ['35%', '30%'],
                startAngle: 225,
                labelLine: {
                    normal: {
                        show: true
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
                            formatter: '人事制度改革',
                            textStyle: {
                                color: '#fff',
                                fontSize: 16

                            },
                            position : 'outside'

                        }
                    }
                }, {
                    value: 25,
                    name: '%',
                    label: {
                        normal: {
                            formatter: '\n35%',
                            textStyle: {
                                color: '#007ac6',
                                fontSize: 25

                            }
                        }
                    }
                },
                    {
                        value: 0,
                        name: '%',
                        label: {
                            normal: {
                                formatter: '完成度',
                                textStyle: {
                                    color: '#fff',
                                    fontSize: 16

                                }
                            }
                        }
                    }
                ]
            },
                {
                    name: ' 学分制度改革',
                    type: 'pie',
                    radius: ['20%', '25%'],
                    center: ['15%', '70%'],
                    startAngle: 225,
                    color: [new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#f125ff'
                    }, {
                        offset: 1,
                        color: '#2dcbff'
                    }]), "transparent"],
                    labelLine: {
                        normal: {
                            show: true
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
                        name: '学分制度改革',
                        label: {
                            normal: {
                                formatter: '学分制度改革',
                                textStyle: {
                                    color: '#fff',
                                    fontSize: 16

                                },
                                position : 'outside'
                            }
                        }
                    }, {
                        value: 25,
                        name: '%',
                        label: {
                            normal: {
                                formatter: '\n58%',
                                textStyle: {
                                    color: '#f125ff',
                                    fontSize: 25

                                }
                            }
                        }
                    },
                        {
                            value: 0,
                            name: '%',
                            label: {
                                normal: {
                                    formatter: '完成度',
                                    textStyle: {
                                        color: '#fff',
                                        fontSize: 16

                                    }
                                }
                            }
                        }
                    ]
                },
                {
                    name: ' 国际高铁合作',
                    type: 'pie',
                    radius: ['20%', '25%'],
                    center: ['40%', '70%'],
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
                            show: true
                        }
                    },
                    label: {
                        normal: {
                            position: 'center'
                        }
                    },
                    data: [{
                        value: 75,
                        name: '高水平专业建设',
                        label: {
                            normal: {
                                formatter: '国际高铁合作',
                                textStyle: {
                                    color: '#fff',
                                    fontSize: 16

                                },
                                position : 'outside'
                            }
                        }
                    }, {
                        value: 25,
                        name: '%',
                        label: {
                            normal: {
                                formatter: '\n100%',
                                textStyle: {
                                    color: '#007ac6',
                                    fontSize: 25

                                }
                            }
                        }
                    },
                        {
                            value: 0,
                            name: '%',
                            label: {
                                normal: {
                                    formatter: '完成度',
                                    textStyle: {
                                        color: '#fff',
                                        fontSize: 16

                                    }
                                }
                            }
                        }
                    ]
                },
                {
                    name: '科学研究和社会服务建设',
                    type: 'pie',
                    radius: ['20%', '25%'],
                    center: ['65%', '70%'],
                    startAngle: 225,
                    labelLine: {
                        normal: {
                            show: true
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
                                    offset: 0,
                                    color: '#f125ff'
                                }, {
                                    offset: 1,
                                    color: '#2dcbff'
                                }]),
                            }
                        },
                        name: '科学研究和社会服务建设',
                        label: {
                            normal: {
                                formatter: '科学研究和社会服务建设',
                                textStyle: {
                                    color: '#fff',
                                    fontSize: 16

                                },
                                position : 'outside'
                            }
                        }
                    }, {
                        value: 25,
                        name: '%',
                        label: {
                            normal: {
                                formatter: '\n65%',
                                textStyle: {
                                    color: '#f125ff',
                                    fontSize: 25

                                }
                            }
                        }
                    },
                        {
                            value: 0,
                            name: '%',
                            label: {
                                normal: {
                                    formatter: '完成度',
                                    textStyle: {
                                        color: '#fff',
                                        fontSize: 16

                                    }
                                }
                            }
                        }
                    ]
                },
                {
                    name: '综合项目改革',
                    type: 'pie',
                    radius: ['20%', '25%'],
                    center: ['75%', '30%'],
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
                            show: true
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
                        name: '综合项目改革',
                        label: {
                            normal: {
                                formatter: '综合项目改革',
                                textStyle: {
                                    color: '#fff',
                                    fontSize: 16

                                },
                                position : 'outside'
                            }
                        }
                    }, {
                        value: 25,
                        name: '%',
                        label: {
                            normal: {
                                formatter: '\n100%',
                                textStyle: {
                                    color: '#f125ff',
                                    fontSize: 25

                                }
                            }
                        }
                    },
                        {
                            value: 0,
                            name: '%',
                            label: {
                                normal: {
                                    formatter: '完成度',
                                    textStyle: {
                                        color: '#fff',
                                        fontSize: 16

                                    }
                                }
                            }
                        }
                    ]
                },
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

        Ext.project.SchedulePanel.superclass.constructor.call(this, {
            //title : '项目进度',
            layout: 'fit',
            //bodyStyle:'border:3px solid #555',
            items: [this.grid]
        })
    }
});