(function (factory) {
	if (typeof exports === "object") {
		factory(require("jquery"));
	}
	else if (typeof define === "function" && define.amd) {
		define([ "jquery" ], factory);
	}
	else {
		factory(window.jQuery)
	}
}(function ($) {
	var NAME = "name";
	var VALUE = "value";

	$.fn.serializeObject = function () {
		return this
			.serializeArray()
			.reduce(function (result, field) {
			var name = field[NAME];
			var value = field[VALUE];

			if ($.type(name) === "undefined") {
				return result;
			}
			else if (result.hasOwnProperty(name)) {
				switch ($.type(result[name])) {
					case "array":
						result[name].push(value);
						break;

					default:
						result[name] = [ result[name], value ];
				}
			}
			else {
				result[name] = value;
			}

			return result;
		}, {});
	}
}));