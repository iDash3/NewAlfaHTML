var $selectTemplate = $("#selectTemplate :selected");
var $selectedDoc = $("input[type=radio][name=groupRadio]").value;

$().ready(function () {
  // Change on Radio Button
  let $radioManualContainer = $("#radioManual-container");
  let $radioRecentContainer = $("#radioRecent-container");
  let $radioSearchContainer = $("#radioSearch-container");

  $radioRecentContainer.addClass("d-none");
  $radioSearchContainer.addClass("d-none");

  $("input[type=radio][name=groupRadio]").change(function () {
    let selectedDoc = this.value;
    $radioContainer = $("#radio-container");
    if (selectedDoc == "radioManual") {
      console.log("Radio Manual");
      $radioManualContainer.removeClass("d-none");
      $radioSearchContainer.addClass("d-none");
      $radioRecentContainer.addClass("d-none");
    } else if (selectedDoc == "radioRecent") {
      console.log("Radio Recent");
      $radioManualContainer.addClass("d-none");
      $radioSearchContainer.addClass("d-none");
      $radioRecentContainer.removeClass("d-none");
    } else if (selectedDoc == "radioSearch") {
      console.log("Radio Search");
      $radioManualContainer.addClass("d-none");
      $radioSearchContainer.removeClass("d-none");
      $radioRecentContainer.addClass("d-none");
    }
  });
  let entireData = $("#radio-container .input-group");
  for (let div = 0; div < entireData.length; div++) {
    // console.log(entireData[div]);
  }
});

function handleSelect() {
  var $selectTemplate = $("#selectTemplate :selected");
  $selectedTemplate = $selectTemplate.text();
}

function makeNewRemissionPdf() {
  var pdf = new jsPDF("p", "pt", "a4");
  var source = $("#pdfTemplate")[0];
  // $content.append("<h1>I wonder if this will work or not</h1>");
  specialElementHandlers = {
    // element with id of "bypass" - jQuery style selector
    "#bypassme": function (element, renderer) {
      // true = "handled elsewhere, bypass text extraction"
      return true;
    },
  };
  margins = {
    top: 80,
    bottom: 60,
    left: 40,
    width: 522,
  };
  pdf.fromHTML(
    source, // HTML string or DOM elem ref.
    margins.left, // x coord
    margins.top,
    {
      // y coord
      width: margins.width, // max width of content on PDF
      elementHandlers: specialElementHandlers,
    },

    function (dispose) {
      // dispose: object with X, Y of the last line add to the PDF
      //          this allow the insertion of new lines after html
      pdf.save("Test.pdf");
    },
    margins
  );
}
