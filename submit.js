define([
	"troopjs-dom/component/widget",
	"jquery",
	"./util/jquery.serializeObject"
], function (Widget, $) {
	var POST = "post";

	return Widget.extend({
		"dom/submit": function ($event) {
			var $target = $($event.target);

			this
				.publish("ajax", {
					"url": $target.attr("action"),
					"type": $target.attr("method") || POST,
					"data": $target.serializeObject()
				})
				.spread(function (response) {
					return $target.trigger("form/response", [ response ]);
				});

			return false;
		}
	});
});