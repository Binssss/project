Ext.ns('Ext.project');
Ext.project.AnalyseChartFormPanel = Ext.extend(Ext.FormPanel, {
	constructor : function(_config) {
		Ext.apply(this, _config || {});

		this.linerChartPanel = new Ext.project.TargetChartPanel({
            // title : '量化指标实时进度',
            height : 600,
            region : 'center',
    });

        this.columnChartPanel = new Ext.project.ColumnChartPanel({
            // title : '季度工作计划完成情况',
            height : 300,
            region : 'center',
    });

        this.pieChartPanel = new Ext.project.PieChartPanel({
            // title : '项目经费情况',
            height : 300,
            region : 'center'
        });

        this.achievecolumnChartPanel = new Ext.project.AchieveColumnChartPanel({
            // title : '成果完成情况',
            height : 750,
            region : 'center'
        });

        this.fundslinerChartPanel = new Ext.project.FundsLinerChartPanel({
            // title : '年度经费使用情况',
            height : 600,
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
                    anchor : '99%',
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
                    handler:this.getReportDoc,
                }
            ]

		});
	},

    getReportDoc:function(){
        // var records = this.grid.getSelectionModel().getSelections();
        // if (records == null || records.length != 1) {
        //     Ext.Msg.alert('提示', '请选中一个项目');
        //     return false;
        // }
        //http://localhost:8080/filecabinet/personalFile/downloadFile?fileId=6DCCA37A61F19862E0501EDEDFC25A00
        window.open("http://localhost:8080/filecabinet/personalFile/downloadFile?fileId=6DCCA37A61F19862E0501EDEDFC25A00");

    }
});