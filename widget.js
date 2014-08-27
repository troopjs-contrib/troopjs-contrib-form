define([
	"troopjs-dom/component/widget",
	"jquery",
	"./util/jquery.serializeObject"
], function (Widget, $) {
	var POST = "post";
	var CODE = "code";
	var MESSAGES = "messages";
	var TYPE = "type";
	var REF = "ref";
	var TEXT = "text";
	var SUCCESS = "success";
	var WARNING = "warning";
	var ERROR = "error";

	return Widget.extend({
		"dom/submit": function ($event) {
			var me = this;
			var $target = $($event.target);

			$target
				.find(":input")
				.removeClass("has-success has-warning has-error")
				.siblings("p.help-block")
				.remove();

			me
				.publish("ajax", {
					"url": $target.attr("action"),
					"type": $target.attr("method") || POST,
					"data": $target.serializeObject()
				})
				.spread(function (response) {
					return $target.trigger("form/response", [ response ]);
				});

			return false;
		},

		"dom/form/response": function ($event, response) {
			var $target = $($event.target);

			if (response[CODE] !== 0) {
				$.each(response[MESSAGES] || false, function (index, message) {
					$("<p>")
						.addClass("help-block")
						.text(message[TEXT])
						.insertAfter($target
							.find(":input[name='" + message[REF] + "']")
							.addClass(function () {
								switch (message[TYPE]) {
									case SUCCESS:
										return "has-success";
										break;

									case WARNING:
										return "has-warning";
										break;

									case ERROR:
										return "has-error";
										break;
								}
							}));
				});
			}
		}
	});
});