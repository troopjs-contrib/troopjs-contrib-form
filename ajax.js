define([
  "troopjs-dom/component/widget",
  "troopjs-hub/emitter",
  "jquery",
  "mu-jquery-serialize-object"
], function(Widget, hub, $) {
  return Widget.extend({
    "dom/submit": function($event) {
      var me = this;
      var $target = $($event.target);

      hub
        .emit("ajax", {
          "url": $target.attr("action"),
          "type": $target.attr("method") || "post",
          "data": $target.serializeObject(),
          "dataType": "json"
        })
        .otherwise(function(xhr) {
          return [xhr.responseJSON || {
            "type": "error",
            "code": xhr.status,
            "text": xhr.responseText
          }];
        })
        .spread(function(response) {
          return $target.trigger("form/response", [response]);
        });

      return false;
    }
  });
});
