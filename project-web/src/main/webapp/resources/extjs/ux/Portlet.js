/*
 * ! Ext JS Library 3.4.0 Copyright(c) 2006-2011 Sencha Inc.
 * licensing@sencha.com http://www.sencha.com/license
 */
Ext.ux.Portlet = Ext.extend(Ext.Panel, {
			constructor : function(_config) {
				Ext.apply(this, _config || {});

				Ext.ux.Portlet.superclass.constructor.call(this, {
							anchor : '100%',
							frame : true,
							collapsible : true,
							draggable : true,
							cls : 'x-portlet'
						});

			}

		});

Ext.reg('portlet', Ext.ux.Portlet);
