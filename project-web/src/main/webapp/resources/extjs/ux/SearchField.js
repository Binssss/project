/*
 * ! Ext JS Library 3.4.0 Copyright(c) 2006-2011 Sencha Inc.
 * licensing@sencha.com http://www.sencha.com/license
 */
Ext.ns('Ext.ux.form');
Ext.ux.form.SearchField = Ext.extend(Ext.form.TwinTriggerField, {
			initComponent : function() {
				Ext.ux.form.SearchField.superclass.initComponent.call(this);
				this.on('specialkey', function(f, e) {
							if (e.getKey() == e.ENTER) {
								this.onTrigger2Click();
							}
						}, this);
				this.on('keyup', function(f, e) {
							// alert('test');
							if (e.getKey() == e.BACKSPACE) {
								if (this.el.dom.value == '') {
									if (this.hasSearch) {
										this.el.dom.value = '';
										var o = {
											start : 0
										};
										this.store.baseParams = this.store.baseParams
												|| {};
										this.store.baseParams[this.paramName] = '';
										this.store.reload({
													params : o
												});
										this.triggers[0].hide();
										this.hasSearch = false;
									}
								}
							}
						}, this);
			},
			/** 导出Excel的查询字段名 */
			field : null,
			validationEvent : false,
			validateOnBlur : false,
			enableKeyEvents : true,
			trigger1Class : 'x-form-clear-trigger',
			trigger2Class : 'x-form-search-trigger',
			hideTrigger1 : true,
			width : 180,
			hasSearch : false,
			paramName : 'query',

			onTrigger1Click : function() {
				if (this.hasSearch) {
					this.el.dom.value = '';
					var o = {
						start : 0
					};
					this.store.baseParams = this.store.baseParams || {};
					this.store.baseParams[this.paramName] = '';
					this.store.reload({
								params : o
							});
					this.triggers[0].hide();
					this.hasSearch = false;
				}
			},

			onTrigger2Click : function() {
				var v = this.getRawValue();
				if (v.length < 1) {
					this.onTrigger1Click();
					return;
				}
				var o = {
					start : 0
				};
				// 为了导出excel使用
				if (this.field != null) {
					this.store.baseParams.field = this.field
				}
				this.store.baseParams = this.store.baseParams || {};
				this.store.baseParams[this.paramName] = v;
				this.store.reload({
							params : o
						});
				this.hasSearch = true;
				this.triggers[0].show();
			}
		});
Ext.reg('ss', Ext.ux.form.SearchField);