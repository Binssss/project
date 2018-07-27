<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/views/commons/taglibs.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>学院建设方案</title>
<script type="text/javascript">

	yepnope({
		load : ['${ctx}/resources/js/instituteScheme/InstituteSchemeWindow.js',
              '${ctx}/resources/js/instituteScheme/InstituteSchemeFormPanel.js',
            '${ctx}/resources/js/instituteScheme/InstituteSchemePanel.js',
            '${ctx}/resources/js/instituteScheme/CheckInstituteSchemeWindow.js',
            '${ctx}/resources/js/instituteScheme/CheckInstituteSchemeFormPanel.js',
            '${ctx}/resources/js/tree/ProjectTreePanel.js'
            ],
		complete : function() {
			var panel = new Ext.project.InstituteSchemePanel({
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
