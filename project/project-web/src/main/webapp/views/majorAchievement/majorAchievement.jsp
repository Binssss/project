<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/views/commons/taglibs.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>专业标志性成果完成情况</title>
<script type="text/javascript">

	yepnope({
		load : ['${ctx}/resources/js/majorAchievement/MajorAchievementWindow.js',
              '${ctx}/resources/js/majorAchievement/MajorAchievementFormPanel.js',
                '${ctx}/resources/js/majorAchievement/MajorAchievementPanel.js',
            '${ctx}/resources/js/tree/ProjectTreePanel.js'
		],
		complete : function() {
			var panel = new Ext.project.MajorAchievementPanel({
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
