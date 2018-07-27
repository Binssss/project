<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/views/commons/taglibs.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>综合报告总结</title>
<script type="text/javascript">

	yepnope({
		load : ['${ctx}/resources/js/synthesizeSummary/SynthesizeSummaryWindow.js',
              '${ctx}/resources/js/synthesizeSummary/SynthesizeSummaryFormPanel.js',
            '${ctx}/resources/js/synthesizeSummary/ShowSynthesizeSummaryWindow.js',
            '${ctx}/resources/js/synthesizeSummary/ShowSynthesizeSummaryFormPanel.js',
            '${ctx}/resources/js/synthesizeSummary/QuantitativeIndexGridPanel.js',
            '${ctx}/resources/js/synthesizeSummary/SynbolicAchievementGridPanel.js',
                '${ctx}/resources/js/synthesizeSummary/SynthesizeSummaryGridPanel.js',
            '${ctx}/resources/js/tree/ProjectTreePanel.js'
            ],
		complete : function() {
			var panel = new Ext.project.SynthesizeSummaryGridPanel({
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
