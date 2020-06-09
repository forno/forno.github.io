$(function () {
  "use strict";

  $("#resultModal").on("show.bs.modal", function (e) {
    var host = $("#host-input").val();
    var port = $("#port-input").val();
    var path = $("#path-input").val();
    var client_id = $("#client-id-input").val();
    var secret_id = $("#secret-id-input").val();
    var redirect = $("#redirect-input").val();
    var text_body = $(this).find(".modal-body p");

    if (!(host && port && path && client_id && secret_id)) {
      console.log("host: %s", host);
      console.log("port: %s", port);
      console.log("path: %s", path);
      console.log("client_id: %s", client_id);
      console.log("secret_id: %s", secret_id);
      text_body.text("Error: invalid values");
    } else text_body.text("http://" + host + ":" + port + "/" + path + "?redirect=" + redirect + "&client_id=" + client_id + "&secret_id=" + secret_id);
  });
});
