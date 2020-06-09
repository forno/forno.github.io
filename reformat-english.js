$(function () {
  "use strict";

  var modal = $("#resultModal");
  modal.on("show.bs.modal", function (e) {
    var text = $("#english-text").val();
    var text_body = $(this).find(".modal-body p");

    if (!text) {
      text_body.text("Error: invalid values");
    } else {
      text_body.html(
        $("<span />")
          .text(text.replace(/\n/g, " "))
          .html()
          .replace(/\.   */g, ". <br />")
          .replace(/\. ?/g, ".<br />")
      );
    }
  });

  modal.find(".modal-footer .btn-primary").on("click", function () {
    var text = $("#english-text").val();
    if (!text) {
      $("form")
        .before(`<div class="alert alert-warning alert-dismissible fade show" role="alert">
          Copy text are no here.
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>`);
      return;
    }
    var textarea = $("<textarea></textarea>");
    textarea.text(
      text
        .replace(/\n/g, " ")
        .replace(/\.   */g, ". \n")
        .replace(/\. ?/g, ".\n")
    );
    $(this).append(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    $(
      "form"
    ).before(`<div class="alert alert-success alert-dismissible fade show" role="alert">
        Copy success!
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>`);
  });
});
