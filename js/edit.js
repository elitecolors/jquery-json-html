/**
 * make table editable
 */
$(document).ready(function() {
    $.each($('table'), function (key, val) {
      var id=$(val).attr('id');
      editor = new SimpleTableCellEditor(id);
      editor.SetEditableClass("editMe");
    console.log(id);
      $('#'+id).on("cell:edited", function (event) {
        console.log(`'${event.oldValue}' changed to '${event.newValue}'`);
      });
    });
  });