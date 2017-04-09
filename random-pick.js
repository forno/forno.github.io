function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

$('#resultModal').on('show.bs.modal', function(e) {
  "use strict";
  var form = $(e.relatedTarget).parents("form")
  const targets = form.find("textarea").val().split('\n')
  const count = parseInt(form.find("input").val(), 10)

  for (var i = 0; i < count; ++i)
    targets[i] = targets[getRandomInt(i, targets.length)]
  const chosen = targets.slice(0, count)
                        .filter(function(v){return v.length != 0})
                        .map(function(v){return `<li>${v}</li>`})
  const send = chosen.length !== 0 ?
               chosen.join("") :
               `<div class="alert alert-warning" role="alert">
                 <strong>Warning!</strong> Better check yourself, you're not looking too good.
               </div>`

  var modal = $(this)
  modal.find(".modal-body").html(send)
  if (chosen.length != 0)
    modal.find(".modal-body").wrapInner("<ul />");
})
