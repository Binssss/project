<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/views/commons/taglibs.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>专业项目报告总结</title>
<script type="text/javascript">

	yepnope({
		load : ['${ctx}/resources/js/majorSummary/MajorSummaryWindow.js',
              '${ctx}/resources/js/majorSummary/MajorSummaryFormPanel.js',
            '${ctx}/resources/js/majorSummary/ShowMajorSummaryWindow.js',
            '${ctx}/resources/js/majorSummary/ShowMajorSummaryFormPanel.js',
            '${ctx}/resources/js/majorSummary/QuantitativeIndexGridPanel.js',
            '${ctx}/resources/js/majorSummary/SynbolicAchievementGridPanel.js',
                '${ctx}/resources/js/majorSummary/MajorSummaryGridPanel.js'
            ],
		complete : function() {
			var panel = new Ext.project.MajorSummaryGridPanel({
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
