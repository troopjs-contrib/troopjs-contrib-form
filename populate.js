define([
	"troopjs-dom/component/widget",
	"jquery",
	"query-string",
	"./util/jquery.deserializeObject"
], function (Widget, $, queryString) {
	var $ELEMENT = "$element";

	return Widget.extend({
		"sig/initialize": function () {
			this[$ELEMENT].deserializeObject(queryString.parse(location.search));
		}
	});
});