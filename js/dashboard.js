$().ready(function () {
  $("#sidebar-button").click(function () {
    let sidebar = $("#sidebar");
    if (sidebar.is(":visible")) {
      $("#sidebar").hide();
      $(this).text("Abrir Panel");
    } else {
      $("#sidebar").show();
      $(this).text("Cerrar Panel");
    }
  });
});
