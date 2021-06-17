/*global QUnit*/

sap.ui.define([
	"fioriproject/SapFioriProject/controller/fioriprojectview.controller"
], function (Controller) {
	"use strict";

	QUnit.module("fioriprojectview Controller");

	QUnit.test("I should test the fioriprojectview controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
