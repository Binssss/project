<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/views/commons/taglibs.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>预警信息</title>
<script type="text/javascript">

	yepnope({
		load : ['${ctx}/resources/js/warningMessage/WarningMessageWindow.js',
              '${ctx}/resources/js/warningMessage/WarningMessageFormPanel.js',
                '${ctx}/resources/js/warningMessage/WarningMessageGridPanel.js'
            ],
		complete : function() {
			var panel = new Ext.project.WarningMessageGridPanel({
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
