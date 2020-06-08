$(function(){
  "use strict";

 $('#resultModal').on('show.bs.modal', function(e) {
  var text = $('#english-text').val()
  var text_body = $(this).find('.modal-body p')

  if (!text) {
    text_body.text('Error: invalid values')
  } else {
    text_body.html($('<span />').text(text.replace(/\n/g, ' ')).html().replace(/\./g, '.<br />'))
  }
  })
})
