/*jshint indent:2, curly:true, eqeqeq:true, immed:true, latedef:true,
newcap:true, noarg:true, regexp:true, undef:true, strict:true, trailing:true,
white:true*/
/*global XT:true, XM:true, Backbone:true, enyo:true, console:true, jscommunicator:true */

(function () {
  "use strict";
	XT.extensions.jscommunicator.initPage = function () {
	  enyo.kind({
	    name: "XV.JscommunicatorPage",
	    kind: "enyo.FittableRows",
	    classes: "jscommunicator-page",
	  });
	};

}());
