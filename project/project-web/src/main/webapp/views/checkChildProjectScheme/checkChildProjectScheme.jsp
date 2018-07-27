<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/views/commons/taglibs.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>完善高水平专业建设任务书</title>
<script type="text/javascript">

	yepnope({
		load : ['${ctx}/resources/js/checkChildProjectScheme/ChildProjectSchemeWindow.js',
            '${ctx}/resources/js/checkChildProjectScheme/ChildProjectSchemeFormPanel.js',
            '${ctx}/resources/js/checkChildProjectScheme/ChildProjectSchemePanel.js',
            '${ctx}/resources/js/checkChildProjectScheme/CheckChildProjectSchemeWindow.js',
            '${ctx}/resources/js/checkChildProjectScheme/CheckChildProjectSchemeFormPanel.js',
            '${ctx}/resources/js/tree/ProjectTreePanel.js'],
		complete : function() {
			var panel = new Ext.project.ChildProjectSchemePanel({
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
