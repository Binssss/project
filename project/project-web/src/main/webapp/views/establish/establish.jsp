<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/views/commons/taglibs.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>项目申报管理</title>
<script type="text/javascript">

	yepnope({
		load : ['${ctx}/resources/js/establish/EstablishWindow.js',
              '${ctx}/resources/js/establish/EstablishFormPanel.js',
                '${ctx}/resources/js/establish/EstablishGridPanel.js'
            ],
		complete : function() {
			var panel = new Ext.project.EstablishGridPanel({
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
