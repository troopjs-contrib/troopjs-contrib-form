define([
	"troopjs-dom/component/widget",
	"jquery"
], function (Widget, $) {
	var CODE = "code";
	var FIELD = "field";
	var FIELDS = "fields";
	var TYPE = "type";
	var TEXT = "text";
	var SUCCESS = "success";
	var WARNING = "warning";
	var ERROR = "error";

	return Widget.extend({
		"dom/submit": function ($event) {
			var $target = $($event.target);

			$target
				.find(":input")
				.removeClass("has-success has-warning has-error")
				.siblings("p.help-block")
				.remove();
		},

		"dom/form/response": function ($event, response) {
			var $target = $($event.target);

			if (response[CODE] !== 0) {
				$.each(response[FIELDS] || false, function (index, message) {
					$("<p>")
						.addClass("help-block")
						.text(message[TEXT])
						.insertAfter($target
							.find(":input[name='" + message[FIELD] + "']")
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