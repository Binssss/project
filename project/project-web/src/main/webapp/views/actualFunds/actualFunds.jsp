<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/views/commons/taglibs.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>年度经费使用情况</title>
<script type="text/javascript">

	yepnope({
		load : ['${ctx}/resources/js/actualFunds/ActualFundsPanel.js',
            '${ctx}/resources/js/actualFunds/ActualFundsWindow.js',
            '${ctx}/resources/js/actualFunds/ActualFundsFormPanel.js',
            '${ctx}/resources/js/tree/ProjectTreePanel.js'],
		complete : function() {
			var panel = new Ext.project.ActualFundsPanel({
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
