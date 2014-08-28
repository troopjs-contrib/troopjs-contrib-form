define([
	"troopjs-dom/component/widget",
	"jquery",
	"../query-string/query-string"
], function (Widget, $, queryString) {
	var $ELEMENT = "$element";

	return Widget.extend({
		"sig/initialize": function () {
			var $element = this[$ELEMENT];

			$.each(queryString.parse(location.search), function (key, value) {
				$element
					.find(":input[name='" + key + "']")
					.val(value)
					.change();
			});
		}
	});
});