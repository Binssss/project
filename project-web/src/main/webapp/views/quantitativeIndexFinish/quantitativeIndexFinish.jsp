<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/views/commons/taglibs.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>量化指标完成情况总表</title>
<script type="text/javascript">

	yepnope({
		load : [
                '${ctx}/resources/js/quantitativeIndexFinish/QuantitativeIndexFinishWindow.js',
                '${ctx}/resources/js/quantitativeIndexFinish/QuantitativeIndexFinishFormPanel.js',
            '${ctx}/resources/js/quantitativeIndexFinish/QuantitativeIndexFinishPanel.js',
            '${ctx}/resources/js/tree/ProjectTreePanel.js'
            ],
		complete : function() {
			var panel = new Ext.project.QuantitativeIndexFinishPanel({
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
