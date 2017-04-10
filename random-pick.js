$('#resultModal').on('show.bs.modal', function(e) {
  "use strict";
  var alerts = []
  var form = $(e.relatedTarget).parents("form")
  const targets = form.find("textarea").val().split('\n').filter(function(v){return v.length != 0})
  var count = parseInt(form.find("input").val(), 10)

  if (targets.length < count) {
    count = targets.length
    alerts.push(
      `<div class="alert alert-warning" role="alert">
        <strong>Warning!</strong> Too small number. I pick every members.
      </div>`)
  }

  if (!count)
    alerts.push(
      `<div class="alert alert-danger" role="alert">
        <strong>Oh snap!</strong> Change a few things up and try submitting again.
      </div>`)

  for (let i = 0; i < count; ++i) {
    let rand = Math.floor(Math.random() * (targets.length - i)) + i
    let tmp = targets[i]
    targets[i] = targets[rand]
    targets[rand] = tmp;
  }
  var chosen = targets.slice(0, count).map(function(v){return `<li>${v}</li>`})

  var modalBody = $(this).find(".modal-body")
  modalBody.find(".error").html(alerts.join(""))

  var sender = modalBody.find(".result").empty()
  var noticer = modalBody.find(".notice").html('<span class="text-muted">Now picking...</span>')
  if (chosen.length)
    var intervalID = setInterval(function(){
      sender.append(chosen.pop())
      if (!chosen.length) {
        clearInterval(intervalID)
        noticer.html('<span class="text-success">Completed</span>')
      }}, 1000)
  else
    noticer.html('<span class="text-danger">Chosen members are notthing.</span>')
})
