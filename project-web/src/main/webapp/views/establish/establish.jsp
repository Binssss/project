<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/views/commons/taglibs.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>项目申报管理</title>
<script type="text/javascript">

	yepnope({
		load : ["${ctx}/resources/extjs/ux/treegrid/treegrid.css",
            "${ctx}/resources/extjs/ux/treegrid/TreeGridSorter.js",
            "${ctx}/resources/extjs/ux/treegrid/TreeGridColumnResizer.js",
            "${ctx}/resources/extjs/ux/treegrid/TreeGridNodeUI.js",
            "${ctx}/resources/extjs/ux/treegrid/TreeGridLoader.js",
            "${ctx}/resources/extjs/ux/treegrid/TreeGridColumns.js",
            "${ctx}/resources/extjs/ux/treegrid/TreeGrid.js",
            "${ctx}/resources/extjs/ux/combotree/ComboTree.js",
		    '${ctx}/resources/js/establish/EstablishWindow.js',
              '${ctx}/resources/js/establish/EstablishFormPanel.js',
                '${ctx}/resources/js/establish/EstablishTreeGridPanel.js'
            ],
		complete : function() {
			var panel = new Ext.project.EstablishTreeGridPanel({
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
