<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/views/commons/taglibs.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>公告消息</title>
<script type="text/javascript">

	yepnope({
		load : ['${ctx}/resources/js/commonality/CommonalityWindow.js',
              '${ctx}/resources/js/commonality/CommonalityFormPanel.js',
                '${ctx}/resources/js/commonality/CommonalityGridPanel.js'
            ],
		complete : function() {
			var panel = new Ext.project.CommonalityGridPanel({
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
