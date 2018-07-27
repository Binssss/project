Ext.ns('Ext.project');
Ext.project.BuildPanel = Ext.extend(Ext.Panel, {
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
                text: '项目建设',
                textStyle:{
                    color : '#fff'
                }

            },
            backgroundColor: '#000',
            color: ['rgba(245, 166, 35, 1)', 'rgba(19, 173, 255, 1)','#fef778','#4ef037','#6a65d8','#b0dedb','#e1addc'],
            legend: {
                show: true,
                icon: 'circle',
                bottom: 45,
                center: 0,
                itemWidth: 8,
                itemHeight: 8,
                textStyle: {
                    fontSize: 14,
                    color: '#ade3ff'
                },
                data: ['综合改革项目', '教师队伍建设','高水平专业建设','科学研究和社会服务建设','国际高铁合作','人事制度改革','学分制度改革'],
            },
            radar: [{
                indicator: [{
                    text: '机制建设',
                    max: 100
                }, {
                    text: '计划建设',
                    max: 100
                }, {
                    text: '季度管理',
                    max: 100
                }, {
                    text: '年度管理',
                    max: 100
                }],
                textStyle: {
                    color: 'red'
                },
                center: ['50%', '50%'],
                radius: 150,
                startAngle: 90,
                splitNumber: 4,
                shape: 'circle',
                backgroundColor: {
                    image: this.imgPath
                },
                name: {
                    formatter: '{value}',
                    textStyle: {
                        fontSize: 14,
                        color: '#ffffff'
                    }
                },
                splitArea: {
                    areaStyle: {
                        color: ['transparent',
                            'transparent)', 'rgba(114, 172, 209, 0)',
                            'transparent', 'rgba(114, 172, 209, 0)'
                        ],
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: '#2770ab'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: '#2770ab'
                    }
                }
            }, ],
            series: [{
                name: '雷达图',
                type: 'radar',
                itemStyle: {
                    emphasis: {
                        lineStyle: {
                            width: 4
                        }
                    }
                },
                data: [{
                    name: '综合改革项目',
                    value: [50, 50, 50, 50],

                    areaStyle: {
                        normal: {
                            color: 'rgba(245, 166, 35, 0.4)'
                        }
                    },
                    symbolSize: 2.5,
                    itemStyle: {
                        normal: {
                            borderColor: 'rgba(245, 166, 35, 1)',
                            borderWidth: 2.5,
                        }
                    },
                    lineStyle: {
                        normal: {
                            opacity: 0.5
                        }
                    }
                }, {
                    name: '教师队伍建设',
                    value: [30, 90, 55, 60],
                    symbolSize: 2.5,

                    itemStyle: {
                        normal: {
                            borderColor: 'rgba(19, 173, 255, 1)',
                            borderWidth: 2.5,
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: 'rgba(19, 173, 255, 0.5)'
                        }
                    },
                    lineStyle: {
                        normal: {
                            opacity: 0.5
                        }
                    }
                }, {
                    name: '高水平专业建设',
                    value: [30, 10, 45, 80],
                    symbolSize: 2.5,

                    itemStyle: {
                        normal: {
                            borderColor: '#fef778',
                            borderWidth: 2.5,
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: '#fef778'
                        }
                    },
                    lineStyle: {
                        normal: {
                            opacity: 0.5
                        }
                    }
                }, {
                    name: '科学研究和社会服务建设',
                    value: [70, 58, 55, 90],
                    symbolSize: 2.5,

                    itemStyle: {
                        normal: {
                            borderColor: '#a9eca2',
                            borderWidth: 2.5,
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: '#a9eca2'
                        }
                    },
                    lineStyle: {
                        normal: {
                            opacity: 0.5
                        }
                    }
                }, {
                    name: '国际高铁合作',
                    value: [40, 60, 35, 50],
                    symbolSize: 2.5,

                    itemStyle: {
                        normal: {
                            borderColor: '#6a65d8',
                            borderWidth: 2.5,
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: '#6a65d8'
                        }
                    },
                    lineStyle: {
                        normal: {
                            opacity: 0.5
                        }
                    }
                }, {
                    name: '人事制度改革',
                    value: [98, 39, 55, 76],
                    symbolSize: 2.5,
                    itemStyle: {
                        normal: {
                            borderColor: '#b0dedb',
                            borderWidth: 2.5,
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: '#b0dedb'
                        }
                    },
                    lineStyle: {
                        normal: {
                            opacity: 0.5
                        }
                    }
                }, {
                    name: '学分制度改革',
                    value: [78, 59, 105, 66],
                    symbolSize: 2.5,
                    itemStyle: {
                        normal: {
                            borderColor: '#e1addc',
                            borderWidth: 2.5,
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: '#e1addc'
                        }
                    },
                    lineStyle: {
                        normal: {
                            opacity: 0.5
                        }
                    }
                }]
            }, ]
        };
        this.grid = new Ext.loanStatistics.EchartsPanel({
            region: 'center',
            autoScroll:true,
            viewConfig : {
                forceFit : true
            },
            option : this.option
        });

        Ext.project.BuildPanel.superclass.constructor.call(this, {
            //title : '项目建设',
            layout: 'fit',
            //bodyStyle:'border:3px solid #555',
            items: [this.grid]
        })
    }
});