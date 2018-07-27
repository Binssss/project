<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/views/commons/taglibs.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>学院标志性成果完成情况</title>
<script type="text/javascript">

	yepnope({
		load : ['${ctx}/resources/js/instituteAchievement/InstituteAchievementWindow.js',
              '${ctx}/resources/js/instituteAchievement/InstituteAchievementFormPanel.js',
                '${ctx}/resources/js/instituteAchievement/InstituteAchievementPanel.js',
            '${ctx}/resources/js/tree/ProjectTreePanel.js'
		],
		complete : function() {
			var panel = new Ext.project.InstituteAchievementPanel({
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
