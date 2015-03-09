define([
  "troopjs-dom/component",
  "jquery"
], function(Widget, $) {
  var FIELDS = "fields";
  var NAME = "name";

  return Widget.extend({
    "dom/form/response": function($event, response) {
      // Return fast
      if (!$.isPlainObject(response)) {
        return;
      }

      var fields = {};

      // Iterate response[FIELDS]
      $.each(response[FIELDS] || false, function(result, field) {
        fields[field[NAME]] = field;
      });

      $($event.target)
        .trigger("form/feedback", [response])
        .find(":input[" + NAME + "]")
        .each(function(index, element) {
          var $element = $(element);
          var name = $element.attr(NAME);

          if (fields.hasOwnProperty(name)) {
            $element.trigger("form/feedback/field", [fields[name]]);
          }
        });
    }
  });
});
