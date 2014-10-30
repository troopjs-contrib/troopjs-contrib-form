define([
	"troopjs-dom/component/widget",
	"jquery",
	"query-string",
	"mu-jquery-deserialize-object"
], function (Widget, $, queryString) {
	var $ELEMENT = "$element";

	return Widget.extend({
		"sig/initialize": function () {
			this[$ELEMENT].deserializeObject(queryString.parse(location.search));
		}
	});
});