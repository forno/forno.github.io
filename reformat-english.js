$(function(){
  "use strict";

 $('#resultModal').on('show.bs.modal', function(e) {
  var text = $('#english-text').val()
  var text_body = $(this).find(".modal-body p")

  if (!text) {
    text_body.text("Error: invalid values")
  } else {
    text_body.text(text.replace('\n', ' ').replace('.', ".\n"))
  }
  })
})
