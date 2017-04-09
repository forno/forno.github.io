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

  for (let i = 0; i < count; ++i) {
    let rand = Math.floor(Math.random() * (targets.length - i)) + i
    let tmp = targets[i]
    targets[i] = targets[rand]
    targets[rand] = tmp;
  }
  const chosen = targets.slice(0, count)
                        .map(function(v){return `<li>${v}</li>`})
  const send = chosen.length !== 0 ? "<ul>" + chosen.join("") + "</ul>" : "";
  if (send === "")
    alerts.push(
      `<div class="alert alert-danger" role="alert">
        <strong>Oh snap!</strong> Change a few things up and try submitting again.
      </div>`)

  var modalBody = $(this).find(".modal-body")
  modalBody.html(send)
  modalBody.append(alerts.join(""))
})
