Ext.ns('Ext.project');
Ext.project.ProjectTreePanel = Ext.extend(Ext.tree.TreePanel, {
	url : null,
    projectId : null,
	constructor : function(_config) {
		if (_config == null) {
			_config = {};
		}
		this.projectUrl = 'project/establish/getProjectTree';
		Ext.apply(this, _config);
		this.projectId = this.projectId == undefined ? 0 : this.projectId;
		this.queryField = new Ext.form.TextField({
					name : 'projectName',
					width : 100,
					emptyText : '请输入项目名称',
					enableKeyEvents : true
				});
		Ext.project.ProjectTreePanel.superclass.constructor.call(this, {
					useArrows : true,
					autoScroll : true,
					style : 'padding:5px;',
					tbar : ['项目名称:', this.queryField],
					root : {
						type : 'async',
						id : '0',
						text : '项目'
					},
					loader : new Ext.tree.TreeLoader({
                        		dataUrl : this.projectUrl,
								baseParams : {
									projectId : this.projectId
								}
							})
				});
				this.treeFilter = new Ext.tree.TreeFilter(this, {
					clearBlank : true,
					autoClear : true
				});
		// 保存上次隐藏的空节点
		var hiddenPkgs = [];
		var field = this.queryField;

		// 按键后触发事件
		field.on('keyup', function(e) {
					var text = field.getValue();
					// 先要显示上次隐藏掉的节点
					Ext.each(hiddenPkgs, function(n) {
								n.ui.show();
							});

					// 如果输入的数据不存在，就执行clear()
					if (!text) {
						this.treeFilter.clear();
						return;
					}
					this.expandAll();

					// 根据输入制作一个正则表达式，'i'代表不区分大小写
					var re = new RegExp(Ext.escapeRe(text), 'i');
					this.treeFilter.filterBy(function(n) {
								// 只过滤叶子节点，这样省去枝干被过滤的时候，底下的叶子都无法显示
								return !n.isLeaf() || re.test(n.text);
							});

					// 如果这个节点不是叶子，而且下面没有子节点，就应该隐藏掉
					hiddenPkgs = [];
					this.root.cascade(function(n) {
								if (!n.isLeaf() && n.ui.ctNode.offsetHeight < 3) {
									n.ui.hide();
									hiddenPkgs.push(n);
								}
							});

				}, this);

	}

});