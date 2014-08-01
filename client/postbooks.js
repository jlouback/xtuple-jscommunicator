/*jshint indent:2, curly:true, eqeqeq:true, immed:true, latedef:true,
newcap:true, noarg:true, regexp:true, undef:true, strict:true, trailing:true,
white:true*/
/*global XT:true, XM:true, Backbone:true, enyo:true, console:true */

(function () {
  "use strict";

  XT.extensions.jscommunicator.initPostbooks = function () {

    var jscommunicatorModule = {
      name: "jscommunicator",
      label: "_jscommunicator".loc(),
      panels: [
        {
          name: "explanatoryIframe",
          label: "_explanation".loc(),
          tag: "iframe",
          classes: "jscommunicator-page",
          src: "npm/xtuple-jscommunicator/client/assets/jscommunicator.html"
        },
        {
          name: "jscommunicatorPage",
          kind: "XV.JscommunicatorPage",
          label: "_jscommunicator".loc()
        }
      ]
    };

    XT.app.$.postbooks.insertModule(jscommunicatorModule, 0);

  };
}());
