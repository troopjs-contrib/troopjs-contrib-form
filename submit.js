define([
  "troopjs-dom/component",
  "jquery",
  "mu-jquery-serialize-object/jquery.serializeObject"
], function(Widget, $) {
  return Widget.extend({
    "dom/submit": function($event) {
      var $target = $($event.target);

      $event.preventDefault();

      $target.trigger("form/submit", [$target[$target.data("json") === "object" ? "serializeObject" : "serializeArray"]()]);
    }
  });
});
