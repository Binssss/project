<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/views/commons/taglibs.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>综合项目建设任务书</title>
<script type="text/javascript">

	yepnope({
		load : ['${ctx}/resources/js/assignmentBook/AssignmentBookPanel.js',
            '${ctx}/resources/js/assignmentBook/AssignmentBookWindow.js',
            '${ctx}/resources/js/assignmentBook/AssignmentBookFormPanel.js',
            '${ctx}/resources/js/assignmentBook/CheckAssignmentBookWindow.js',
            '${ctx}/resources/js/assignmentBook/CheckAssignmentBookFormPanel.js',
            '${ctx}/resources/js/tree/ProjectTreePanel.js'],
		complete : function() {
			var panel = new Ext.project.AssignmentBookPanel({
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
