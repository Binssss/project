<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/views/commons/taglibs.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>制度建设方案</title>
<script type="text/javascript">

	yepnope({
		load : ['${ctx}/resources/js/regimeBuild/RegimeBuildWindow.js',
              '${ctx}/resources/js/regimeBuild/RegimeBuildFormPanel.js',
            '${ctx}/resources/js/regimeBuild/RegimeBuildPanel.js',
				'${ctx}/resources/js/tree/ProjectTreePanel.js'
            ],
		complete : function() {
			var panel = new Ext.project.RegimeBuildPanel({
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
