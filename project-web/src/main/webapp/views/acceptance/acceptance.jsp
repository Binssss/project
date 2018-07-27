<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/views/commons/taglibs.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>项目验收</title>
<script type="text/javascript">

	yepnope({
		load : ['${ctx}/resources/js/acceptance/SynbolicAchievementGridPanel.js',
              '${ctx}/resources/js/acceptance/AcceptancePanel.js',
            '${ctx}/resources/js/tree/ProjectTreePanel.js'],
		complete : function() {
			var panel = new Ext.project.AcceptancePanel({
				height : index.tabPanel.getInnerHeight() - 1,
				id : '${param.id}' + '_panel',
				<%--/*/!*actionJson : ${actionJson},*!/*/--%>
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
