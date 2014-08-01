/*jshint node:true, indent:2, curly:false, eqeqeq:true, immed:true,
latedef:true, newcap:true, noarg:true, regexp:true, undef:true,
strict:true, trailing:true, white:true */
/*global XT:true */

(function () {
  "use strict";

  var lang = XT.stringsFor("en_US", {
    "_explanation": "JSCommunicator is a SIP communication tool developed in HTML and JavaScript.
	\nPlease see http://jscommunicator.org for more details about features, examples, mailing lists and the latest source code.",
    "_jscommunicator": "JSCommunicator"
  });

  if (typeof exports !== 'undefined') {
    exports.language = lang;
  }
}());