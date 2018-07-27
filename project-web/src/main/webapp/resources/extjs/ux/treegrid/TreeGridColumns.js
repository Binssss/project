/*
 * ! Ext JS Library 3.4.0 Copyright(c) 2006-2011 Sencha Inc.
 * licensing@sencha.com http://www.sencha.com/license
 */
(function() {
	Ext.override(Ext.grid.Column, {
				init : function() {
					var types = Ext.data.Types, st = this.sortType;

					if (this.type) {
						if (Ext.isString(this.type)) {
							this.type = Ext.data.Types[this.type.toUpperCase()]
									|| types.AUTO;
						}
					} else {
						this.type = types.AUTO;
					}

					if (Ext.isString(this.renderer)) {
						this.renderer = Ext.util.Format[this.renderer];
					} else if (Ext.isObject(this.renderer)) {
						this.scope = this.renderer.scope;
						this.renderer = this.renderer.fn;
					}
					if (!this.scope) {
						this.scope = this;
					}
				}
			});
	Ext.tree.Column = Ext.extend(Ext.grid.Column, {});
	Ext.tree.NumberColumn = Ext.extend(Ext.grid.NumberColumn, {});
	Ext.tree.DateColumn = Ext.extend(Ext.grid.DateColumn, {});
	Ext.tree.BooleanColumn = Ext.extend(Ext.grid.BooleanColumn, {});

	Ext.reg('tgcolumn', Ext.tree.Column);
	Ext.reg('tgnumbercolumn', Ext.tree.NumberColumn);
	Ext.reg('tgdatecolumn', Ext.tree.DateColumn);
	Ext.reg('tgbooleancolumn', Ext.tree.BooleanColumn);
})();
