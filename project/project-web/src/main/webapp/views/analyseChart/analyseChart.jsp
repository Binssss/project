<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/views/commons/taglibs.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>项目分析报表</title>
<script type="text/javascript">

	yepnope({
		load : [ '${ctx}/resources/js/echarts/echarts.min.js',
            '${ctx}/resources/js/echarts/EchartsPanel.js',
		    '${ctx}/resources/js/analyseChart/AchieveColumnChartPanel.js',
              '${ctx}/resources/js/analyseChart/ColumnChartPanel.js',
            '${ctx}/resources/js/analyseChart/LinerChartPanel.js',
            '${ctx}/resources/js/analyseChart/AnalyseChartFormPanel.js',
            '${ctx}/resources/js/analyseChart/FundsLinerChartPanel.js',
            '${ctx}/resources/js/analyseChart/ChartPanel.js',
            '${ctx}/resources/js/tree/ProjectTreePanel.js',
            '${ctx}/resources/js/analyseChart/PieChartPanel.js',
			'${ctx}/resources/js/analyseChart/TargetChartPanel.js',
            ],
		complete : function() {
			var panel = new Ext.project.ChartPanel({
				height : index.tabPanel.getInnerHeight() - 1,
				id : '${param.id}' + '_panel',
				actionJson : ${actionJson},
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
