function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

$('#resultModal').on('show.bs.modal', function(e) {
  "use strict";
  var alerts = []
  var form = $(e.relatedTarget).parents("form")
  const targets = form.find("textarea").val().split('\n')
  var count = parseInt(form.find("input").val(), 10)

  if (targets.length <= count) {
    count = targets.length
    alerts.push(
      `<div class="alert alert-warning" role="alert">
        <strong>Warning!</strong> Too small number. I pick every members.
      </div>`)
  }

  for (let i = 0; i < count; ++i) {
    let rand = getRandomInt(i, targets.length);
    [targets[i], targets[rand]] = [targets[rand], targets[i]] 
  }
  const chosen = targets.slice(0, count)
                        .filter(function(v){return v.length != 0})
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
