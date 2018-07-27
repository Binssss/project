<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/views/commons/taglibs.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>年度经费预算</title>
<script type="text/javascript">

	yepnope({
		load : ['${ctx}/resources/js/budgetFunds/BudgetFundsPanel.js',
            '${ctx}/resources/js/budgetFunds/BudgetFundsWindow.js',
            '${ctx}/resources/js/budgetFunds/BudgetFundsFormPanel.js',
            '${ctx}/resources/js/tree/ProjectTreePanel.js'],
		complete : function() {
			var panel = new Ext.project.BudgetFundsPanel({
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
