sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("doc.assignment-2.controller.View2", {
		onInit: function () {
			this._oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this._oRouter.getRoute("RouteView2").attachMatched(this._onRouteMatched, this);
		},
		_onRouteMatched: function (oEvent) {
			var pursposedNum = oEvent.getParameter("arguments").purposedNumber;
			this.getView().byId("showPurposedNumber").setValue(pursposedNum);
		},

		onButtonPress: function (oEvent) {
			//this.getRouter().navTo("view2");
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("RouteView1");
		}

	});
});