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
	$.fn.deserializeObject = function (object) {
		return this
			.find(":input[name]")
			.each(function (index, element) {
				var $element = $(element);
				var name = $element.attr("name");

				if (object.hasOwnProperty(name)) {
					$element
						.val(object[name])
						.change();
				}
			});
	}
}));