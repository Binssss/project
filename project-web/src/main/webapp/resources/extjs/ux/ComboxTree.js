

Ext.ux.ComboBoxTree = Ext.extend(Ext.form.ComboBox, {

	constructor : function(config) {
		if (config == null) {
			config = {};
		}
		Ext.apply(this, config);
		this.treeId = Ext.id() + '-tree';
		this.maxHeight = arguments[0].maxHeight || arguments[0].height
				|| this.maxHeight;
		this.tpl = new Ext.Template('<tpl for="."><div style="height:'
				+ this.maxHeight + 'px"><div id="' + this.treeId
				+ '"></div></div></tpl>');
		this.store = new Ext.data.SimpleStore({
					fields : ['id', 'text'],
					data : [[]]
				});
		this.selectedClass = '';
		this.mode = 'local';
		this.triggerAction = 'all';
		this.onSelect = Ext.emptyFn;
		this.editable = false;
		this.displayField = 'id';
		this.valueField = 'text';
		this.idField = new Ext.form.Hidden({
		    name:this.hiddenName
		});
	

		// all:所有结点都可选中
		// exceptRoot：除根结点，其它结点都可选
		// folder:只有目录（非叶子和非根结点）可选
		// leaf：只有叶子结点可选
		var combox = this;
		this.tree.on('click', function(node) {
					var isRoot = (node == combox.tree.getRootNode());
					var selModel = combox.selectNodeModel;
					var isLeaf = node.isLeaf();
					if (isRoot && selModel != 'all') {
						return;
					} else if (selModel == 'folder' && isLeaf) {
						return;
					} else if (selModel == 'leaf' && !isLeaf) {
						return;
					}
					combox.setNodeValue(node.id, node.text);

					combox.collapse();
				},this);

		this.tree.on('beforeexpandnode', function(node) {
					this.flag = false;
				}, this);
		this.tree.on('beforecollapsenode', function(node) {
					this.flag = false;
				}, this);
		this.tree.on('load', function(node) {
					node.expand();
					if (this.value) {
						var node = this.tree.getNodeById(this.value);
						if (node) {
							node.select();
						}
					}
				}, this);
//		combox.on('blur', function(cb) {
//					alert(this.getValue());
//					alert(this.getRawValue());
//				}, this);
		this.selectNodeModel = arguments[0].selectNodeModel || 'exceptRoot';
//		Ext.ux.ComboBoxTree.superclass.constructor.apply(this, arguments);
		Ext.ux.ComboBoxTree.superclass.constructor.call(this, {});
	},

	expand : function() {
		Ext.ux.ComboBoxTree.superclass.expand.call(this);
		if (!this.tree.rendered) {
			this.tree.height = this.maxHeight;
			this.tree.border = false;
			this.tree.autoScroll = true;
			if (this.tree.xtype) {
				this.tree = Ext.ComponentMgr.create(this.tree, this.tree.xtype);
			}
			this.tree.render(this.treeId);
			var root = this.tree.getRootNode();
			if (!root.isLoaded())
				root.reload();
		}
	},
	collapse : function() {
		if (this.flag) {
			Ext.ux.ComboBoxTree.superclass.collapse.call(this);
		} else {
			this.flag = true;
		}

	},
	setNodeValue : function(nodeId, nodeText) {
		this.setValue(nodeId);
		this.setRawValue(nodeText);
		this.idField.setValue(nodeId);
		if (this.tree.rendered) {
			var node = this.tree.getNodeById(nodeId);
			if (node) {
				node.select();
			}
		}
	},
	getValue:function(){
	   return this.idField.getValue();
	}
});
Ext.reg('combotree', Ext.ux.ComboBoxTree);
