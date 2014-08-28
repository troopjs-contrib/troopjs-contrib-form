define([
	"troopjs-dom/component/widget",
	"jquery",
	"./util/jquery.serializeObject"
], function (Widget, $) {
	var STATUS = "status";
	var ARRAY_SLICE = Array.prototype.slice;

	function XhrError() {
		var codes = ARRAY_SLICE.call(arguments);

		return function (result) {
			return result && $.inArray(codes, result[STATUS]);
		}
	}

	return Widget.extend({
		"dom/submit": function ($event) {
			var me = this;
			var $target = $($event.target);

			me
				.publish("ajax", {
					"url": $target.attr("action"),
					"type": $target.attr("method") || "post",
					"data": $target.serializeObject(),
					"dataType": "json"
				})
				.catch(XhrError(404, 500), function (xhr) {
					return [ {
						"type": "error",
						"code": xhr.status,
						"text": xhr.responseText
					} ];
				})
				.spread(function (response) {
					return $target.trigger("form/response", [ response ]);
				});

			return false;
		}
	});
});