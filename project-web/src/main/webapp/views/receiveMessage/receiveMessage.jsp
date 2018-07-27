<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/views/commons/taglibs.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>接收消息</title>
<script type="text/javascript">

	yepnope({
		load : ['${ctx}/resources/js/receiveMessage/ReceiveMessageWindow.js',
              '${ctx}/resources/js/receiveMessage/ReceiveMessageFormPanel.js',
                '${ctx}/resources/js/receiveMessage/ReceiveMessageGridPanel.js'
            ],
		complete : function() {
			var panel = new Ext.project.ReceiveMessageGridPanel({
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
