define([
	"troopjs-dom/component/widget",
	"jquery"
], function (Widget, $) {
	var FIELD = "field";
	var FIELDS = "fields";
	var VALUE = "value";

	return Widget.extend({
		"dom/form/response": function ($event, response) {
			var $target = $($event.target);

			$.each(response[FIELDS] || false, function (index, field) {
			$target
					.find(":input[name='" + field[FIELD] + "']")
					.val(field[VALUE])
			});
		}
	});
});