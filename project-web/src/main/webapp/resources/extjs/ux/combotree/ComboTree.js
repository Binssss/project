ComboTree = Ext.extend(Ext.form.TriggerField, {
			triggerClass : 'x-form-arrow-trigger',
			shadow : 'sides',
			lazyInit : true,
			currNode : null, // 当前选中的节点

			/**
			 * 覆盖initComponent
			 */
			initComponent : function() {
				ComboTree.superclass.initComponent.call(this);
				this.addEvents('expand', 'collapse', 'beforeselect', 'select');
			},

			/**
			 * 覆盖onRender
			 * 
			 * @param {}
			 *            ct
			 * @param {}
			 *            position
			 */
			onRender : function(ct, position) {
				Ext.form.ComboBox.superclass.onRender.call(this, ct, position);
				var hiddenName = this.name;

				this.hiddenField = this.el.insertSibling({
							tag : 'input',
							type : 'hidden',
							name : hiddenName
						}, 'before', true);

				this.hiddenField.value = this.value !== undefined
						? this.value
						: 0;

				this.el.dom.removeAttribute('name');
				this.id = this.name;

				if (!this.lazyInit) {
					this.initList();
				} else {
					this.on('focus', this.initList, this, {
								single : true
							});
				}
			},

			/**
			 * 私有：初始化下拉列表
			 */
			initList : function() {
				// 构建容纳TreePanel的层
				if (this.list) {
					return;
				}
				this.list = new Ext.Layer({
							cls : 'x-combo-list',
							constrain : false
						});
				this.list.setWidth(Math.max(this.wrap.getWidth(), 70));
				this.mon(this.list, 'mouseover', this.onViewOver, this);

				// 构建TreePanel，并渲染到list中
				if (!this.tree) {
					this.root = this.root
							? this.root
							: new Ext.tree.AsyncTreeNode({
										expanded : true
									});
					this.tree = new Ext.tree.TreePanel({
								autoScroll : true,
								height : 200,
								border : false,
								root : this.root,
								loader : this.loader
							});
					delete this.loader;
				}
				this.tree.on({
							click : this.onTreeClick,
							scope : this
						});
				this.tree.render(this.list);

				this.el.dom.setAttribute('readOnly', true);
				this.el.addClass('x-combo-noedit');
			},

			expandNode : function(n, v) {
				var cs = n.childNodes;
				for (var i = 0, len = cs.length; i < len; i++) {
					if (cs[i].id == v) {
						return true;
					}
					if (expandNode(cs[i], v)) {
						cs[i].expand();
						return true;
					}
				}
				return false;
			},

			validateValue : function(value) {
				return true;
			},

			/**
			 * 覆盖onDestory
			 */
			onDestroy : function() {
				if (this.wrap) {
					this.wrap.remove();
				}
				if (this.tree) {
					this.tree.destroy();
				}
				if (this.list) {
					this.list.destroy();
				}
				ComboTree.superclass.onDestroy.call(this);
			},

			isExpanded : function() {
				return this.list && this.list.isVisible();
			},

			collapse : function() {
				if (this.isExpanded()) {
					this.list.hide();
				}
				this.fireEvent('collapse', this);
			},

			expand : function() {
				this.list.alignTo(this.wrap, 'tl-bl?');
				this.list.show();
				this.mon(Ext.getDoc(), {
							scope : this,
							mousewheel : this.collapseIf,
							mousedown : this.collapseIf
						});
				this.fireEvent('expand', this);
			},

			collapseIf : function(e) {
				console.log(e.within);
				if (!this.isDestroyed && !e.within(this.wrap)
						&& !e.within(this.list)) {
					this.collapse();
				}
			},

			onSelect : function(node) {
				if (this.fireEvent('beforeselect', this, node) !== false) {
					this.setValue(node);
					this.collapse();
					this.fireEvent('select', this, node);
				}
			},

			onTreeClick : function(node) {
				if (node.isLeaf()) {
					if (node) {
						this.onSelect(node);
					} else {
						this.collapse();
					}
				}
			},

			assertValue : function() {
				if (this.currNode) {
					this.setValue(this.currNode);
				}
			},

			// private
			beforeBlur : function() {
				this.assertValue();
			},

			postBlur : function() {
				ComboTree.superclass.postBlur.call(this);
				this.collapse();
			},

			mimicBlur : function(e) {
				if (!this.isDestroyed && !this.wrap.contains(e.target)
						&& this.validateBlur(e)) {
					this.triggerBlur();
				}
			},

			validateBlur : function(e) {
				return !this.list || !this.list.isVisible();
			},

			onViewOver : function(e, t) {
				t = Ext.get(t);
				if (t.hasClass("x-tree-node-el")) {
					var id = t.getAttribute("ext:tree-node-id");
					if (id) {
						this.currNode = this.tree.getNodeById(id);
					}
				}
			},

			setValue : function(v) {
				this.currNode = v;
				var val = v;
				if (typeof v === 'object') {
					this.hiddenField.value = ((this.root && v.id == this.root.id)
							? 0
							: v.id);
					val = v.text;
				}
				ComboTree.superclass.setValue.call(this, val);
			},

			getValue : function() {
				return this.currNode ? this.currNode.id : "";
			},

			getSelected : function() {
				return this.currNode;
			},

			initEvents : function() {
				ComboTree.superclass.initEvents.call(this);
				this.el.on('mousedown', this.onTriggerClick, this);
			},

			onTriggerClick : function() {
				if (this.disabled) {
					return;
				}
				if (this.isExpanded()) {
					this.collapse();
					this.el.focus();
				} else {
					this.onFocus({});
					this.expand();
					this.el.focus();
				}
			}
		});
Ext.reg('combotree', ComboTree);