define([
	"troopjs-dom/component/widget",
	"jquery"
], function (Widget, $) {
	var FIELDS = "fields";
	var NAME = "name";

	return Widget.extend({
		"dom/form/response": function ($event, response) {
			var fields = {};

			$.each(response[FIELDS] || false, function (result, field) {
				fields[field[NAME]] = field;
			});

			$($event.target)
				.trigger("form/feedback", [ response || {} ])
				.find(":input[name]")
				.each(function (index, element) {
					var $element = $(element);

					$element.trigger("form/feedback", [ fields[$element.attr(NAME)]|| {} ]);
				});
		}
	});
});