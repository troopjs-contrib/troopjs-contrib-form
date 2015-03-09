define([
  "troopjs-dom/component",
  "jquery",
  "mu-jquery-deserialize-object/jquery.deserializeObject",
  "mu-jquery-deserialize-array/jquery.deserializeArray"
], function(Widget, $) {

  return Widget.extend({
    "dom/form/update": function($event, data) {
      $($event.target)[$.isArray(data) ? "deserializeArray" : "deserializeObject"](data);
    }
  });
});
