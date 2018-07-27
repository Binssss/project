<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/views/commons/taglibs.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>高水平专业建设任务书</title>
<script type="text/javascript">

	yepnope({
		load : ['${ctx}/resources/js/majorAssignmentBook/MajorAssignmentBookPanel.js',
            '${ctx}/resources/js/majorAssignmentBook/MajorAssignmentBookWindow.js',
            '${ctx}/resources/js/majorAssignmentBook/MajorAssignmentBookFormPanel.js',
            '${ctx}/resources/js/majorAssignmentBook/CheckMajorAssignmentBookWindow.js',
            '${ctx}/resources/js/majorAssignmentBook/CheckMajorAssignmentBookFormPanel.js',
            '${ctx}/resources/js/tree/ProjectTreePanel.js'],
		complete : function() {
			var panel = new Ext.project.MajorAssignmentBookPanel({
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
