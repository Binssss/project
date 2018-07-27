<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/views/commons/taglibs.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>发送信息</title>
<script type="text/javascript">

	yepnope({
		load : ['${ctx}/resources/js/sendMessage/SendMessageWindow.js',
              '${ctx}/resources/js/sendMessage/SendMessageFormPanel.js',
                '${ctx}/resources/js/sendMessage/SendMessageGridPanel.js'
            ],
		complete : function() {
			var panel = new Ext.project.SendMessageGridPanel({
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
