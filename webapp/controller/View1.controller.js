sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox"
], function (Controller, MessageBox) {
	"use strict";
	var site = "";
	var docType = "";
	var department = "";
	var cutsomer = "";
	var purNumber = "";
	//site.slice(0, 2) + "-" + docType.slice(0, 2) + "-" + department.slice(0, 2) + "-" + cutsomer.slice(0, 2) + "XXXX"
	return Controller.extend("doc.assignment-2.controller.View1", {
		onInit: function () {
			this.getView().byId("label1").setVisible(false);
			this.getView().byId("box1").setVisible(false);
			this.getView().byId("label2").setVisible(false);
			this.getView().byId("box2").setVisible(false);
			this.getView().byId("label3").setVisible(false);
			this.getView().byId("box3").setVisible(false);
			this._oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this._oRouter.getRoute("RouteView2").attachPatternMatched(this._onRouteMatched, this);
		},
		onButtonPress: function (oEvent) {
			this._oRouter.navTo("RouteView2", {purposedNumber : purNumber});
		},
		showDocumentType: function (oEvent) {
			this.getView().byId("label1").setVisible(true);
			this.getView().byId("box1").setVisible(true);
			site = this.getView().byId("box0").getValue();
			purNumber =site.slice(0, 2);
			this.getView().byId("purposedNumber").setValue(purNumber);
		},
		showDepartment: function (oEvent) {
			this.getView().byId("label2").setVisible(true);
			this.getView().byId("box2").setVisible(true);
			docType = this.getView().byId("box1").getValue();
			purNumber =site.slice(0, 2) + "-" + docType.slice(0, 2);
			this.getView().byId("purposedNumber").setValue(purNumber);
		},
		showCustomer: function (oEvent) {
			this.getView().byId("label3").setVisible(true);
			this.getView().byId("box3").setVisible(true);
			department = this.getView().byId("box2").getValue();
			purNumber =site.slice(0, 2) + "-" + docType.slice(0, 2) + "-" + department.slice(0, 2);
			this.getView().byId("purposedNumber").setValue(purNumber);
		},
		generateProposedNumber: function (oEvent) {
			cutsomer = this.getView().byId("box3").getValue();
			purNumber =site.slice(0, 2) + "-" + docType.slice(0, 2) + "-" + department.slice(0, 2) + "-" + cutsomer.slice(0, 2) + "XXXX";
			this.getView().byId("purposedNumber").setValue(purNumber);
		}

	});
});