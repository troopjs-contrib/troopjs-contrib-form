define([
	"troopjs-dom/component/widget",
	"jquery",
	"mu-jquery-deserialize-array"
], function (Widget, $) {
	var FIELDS = "fields";

	return Widget.extend({
		"dom/form/response": function ($event, response) {
			$($event.target).deserializeArray(response[FIELDS]);
		}
	});
});