require({
	"baseUrl": "../bower_components",

	"packages": [
		{
			"name": "jquery",
			"location": "jquery/dist",
			"main": "jquery"
		},
		{
			"name": "poly",
			"location": "poly",
			"main": "es5"
		},
		{
			"name": "when",
			"location": "when",
			"main": "when"
		},
		{
			"name": "requirejs-text",
			"location": "requirejs-text"
		},
		{
			"name": "troopjs",
			"location": "troopjs",
			"main": "maxi"
		},
		{
			"name": "mu-jquery-serialize-object",
			"location": "mu-jquery-serialize-object",
			"main": "jquery.serializeObject.js"
		},
		{
			"name": "mu-jquery-deserialize-object",
			"location": "mu-jquery-deserialize-object",
			"main": "jquery.deserializeObject.js"
		},
		{
			"name": "mu-jquery-deserialize-array",
			"location": "mu-jquery-deserialize-array",
			"main": "jquery.deserializeArray.js"
		},
		{
			"name": "troopjs-contrib-form",
			"location": ".."
		}
	],

	"map": {
		"*": {
			"json": "troopjs-requirejs/json",
			"text": "requirejs-text/text"
		}
	},

	"deps": [
		"require",
		"jquery",
		"troopjs"
	],

	"callback": function (localRequire, jQuery) {
		localRequire([
			"troopjs-dom/application/widget",
			"troopjs-net/ajax/service"
		], function (Application, AjaxService) {
			jQuery(function ($) {
			Application($("html"), "bootstrap", AjaxService()).start();
			});
		});
	}
});