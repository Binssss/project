Ext.ns('Ext.project');
Ext.project.WelcomeChartFormPanel = Ext.extend(Ext.FormPanel, {
	constructor : function(_config) {
		Ext.apply(this, _config || {});

		this.periodChartPanel = new Ext.project.PeriodPanel({
            //title : '项目周期',
            height : '60%',
            region : 'center'
        });

        this.scheduleChartPanel = new Ext.project.SchedulePanel({
            //title : '项目进度',
            height : 400,
            region : 'center'
        });

        this.establishPanel = new Ext.project.EstablishPanel({
            //title : '项目申报',
            height : 370,
            region : 'center'
        });

        this.applyPanel = new Ext.project.ApplyPanel({
            //title : '项目立项',
            height : 370,
            region : 'center'
        });

        this.finishPanel = new Ext.project.FinishPanel({
            //title : '项目结项',
            height : 370,
            region : 'center'
        });

        this.buildPanel = new Ext.project.BuildPanel({
            //title : '项目建设',
            height : 400,
            region : 'center'
        });

        this.totalPanel = new Ext.Panel({
            region:'center',
            height:400,
            style:'font-size:15px;',
            html : '<div style="height:120px;"><p style="float:left;margin-bottom:15px;">总项目</p>  <p style="color: #fef778;font-size:40px;width:10px;margin:20px auto;clear:both;">7</p>  <p style="float:right;">个</p></div>'+
            '<div style="height:120px;"><p style="float:left;margin-bottom:15px;">完结项目</p>  <p style="color: #fef778;font-size:40px;width:10px;margin:20px auto;clear:both;">4</p>  <p style="float:right;">个</p></div>' +
            '<div style="height:120px;"><p style="float:left;margin-bottom:15px;">未完结项目</p>  <p style="color: #fef778;font-size:40px;width:10px;margin:20px auto;clear:both;">3</p>  <p style="float:right;">个</p></div>'

        });


		Ext.project.WelcomeChartFormPanel.superclass.constructor.call(this, {
			frame : true,
            fileUpload:true,
            labelWidth : 200,
			defaults : {
                layout : 'form',
                defaults : {
                    xtype : 'textfield',
                    anchor : '100%',
                    disabledClass:'txtDisabled'
                }
			},
			bodyStyle : 'border:0px;overflow-x:hidden;overflow-y:auto;color:#fff;font-size:30px;background-color:#000;',//
			layout : 'column',
			// 把窗口显示的东西放到数组里
            items : [{
                columnWidth : .1,
                items : [this.totalPanel]
            },{
                columnWidth : .5,
                items : [this.scheduleChartPanel]
            },{
                columnWidth : .4,
                items : [this.buildPanel]
            },{
                columnWidth : .25,
                items : [this.establishPanel]
            },{
                columnWidth : .25,
                items : [this.applyPanel]
            },{
                columnWidth : .5,
                items : [this.finishPanel]
            }]

		});
	}
});