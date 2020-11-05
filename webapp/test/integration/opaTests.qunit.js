/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"doc/assignment-2/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});