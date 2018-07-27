Ext.ns('Ext.project');
Ext.project.AnalyseChartFormPanel = Ext.extend(Ext.Panel, {
	constructor : function(_config) {
		Ext.apply(this, _config || {});

		this.linerChartPanel = new Ext.project.StageChartPanel({
            // title : '项目阶段',
            height: 150,
            region: 'center',
        }),
		//项目指标完成情况
		this.targetCharPanel = new Ext.project.TargetChartPanel({
           height:850,
           region:"center",
        });

        this.columnChartPanel = new Ext.project.ColumnChartPanel({
            // title : '季度工作计划完成情况',
            height : 450,
            region : 'center',
        });

        this.pieChartPanel = new Ext.project.PieChartPanel({
            // title : '项目经费情况',
            height : 450,
            region : 'center'
        });

        this.achievecolumnChartPanel = new Ext.project.AchieveColumnChartPanel({
            // title : '成果完成情况',
            height : 850,
            region : 'center'
        });

        this.fundslinerChartPanel = new Ext.project.FundsLinerChartPanel({
            // title : '年度经费使用情况',
            height : 700,
            region : 'center'
        });

		Ext.project.AnalyseChartFormPanel.superclass.constructor.call(this, {
			frame : true,
            fileUpload:true,
            tbar : this.actionToolBar,
			defaults : {
                layout : 'form',
                defaults : {
                    xtype : 'textfield',
                    anchor : '100%',
                    disabledClass:'txtDisabled'
                }
			},
			bodyStyle : 'border:0px;overflow-x:hidden;overflow-y:auto;',
			layout : 'column',
			// 把窗口显示的东西放到数组里
            items : [{
                columnWidth : 1,
                items : [this.linerChartPanel]
            },{
                columnWidth : 1,
                items : [this.targetCharPanel]
            },{
                columnWidth : 0.5,
                items : [this.columnChartPanel]
            },{
                columnWidth : 0.5,
                items : [this.pieChartPanel]
            },{
                columnWidth : 1,
                items : [this.fundslinerChartPanel]
            },{
                columnWidth : 1,
                items : [this.achievecolumnChartPanel]
            }],
            buttonAlign:"center",
            buttons:[
                {
                    text:"一键生成数据分析报告",
                    handler:this.getReportDoc
                }
            ]

		});
	},

    getReportDoc:function(){
        window.open("http://localhost:8080/filecabinet/personalFile/downloadFile?fileId=6E2E429800FCE791E0501EDEDFC23158");

    }
});