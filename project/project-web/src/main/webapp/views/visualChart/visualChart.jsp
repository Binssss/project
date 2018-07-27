<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/views/commons/taglibs.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>项目可视化仪表盘</title>
<script type="text/javascript">

	yepnope({
		load : [ '${ctx}/resources/js/echarts/echarts.min.js',
            '${ctx}/resources/js/echarts/EchartsPanel.js',
            '${ctx}/resources/js/visualChart/WelcomeChartFormPanel.js',
            '${ctx}/resources/js/visualChart/PeriodPanel.js',
            '${ctx}/resources/js/visualChart/SchedulePanel.js',
            '${ctx}/resources/js/visualChart/ApplyPanel.js',
            '${ctx}/resources/js/visualChart/FinishPanel.js',
            '${ctx}/resources/js/visualChart/BuildPanel.js',
            '${ctx}/resources/js/visualChart/EstablishPanel.js',
            ],
		complete : function() {
			var panel = new Ext.project.WelcomeChartFormPanel({
				height : index.tabPanel.getInnerHeight() - 1,
				id : '${param.id}' + '_panel',
				//actionJson : ${actionJson},
				renderTo : '${param.id}'
			});
		}

	});
</script>
</head>

<body>
	<div id="${param.id }"></div>
</body>
</html>
