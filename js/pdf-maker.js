var selectedTemplate;
var selectedDoc;

$().ready(function () {
  $("input[type=radio][name=groupRadio]").change(function () {
    selectedDoc = this.value;
    $radioContainer = $("#radio-container");
    if (selectedDoc == "radioManual") {
      console.log("Radio Manual");
    } else if (selectedDoc == "radioRecent") {
      console.log("Radio Recent");
    } else if (selectedDoc == "radioSearch") {
      console.log("Radio Search");
    }
  });
  let entireData = $("#radio-container .input-group");
  for (let div = 0; div < entireData.length; div++) {
    console.log(entireData[div]);
  }
});

function handleSelect() {
  var $selectTemplate = $("#selectTemplate :selected");
  selectedTemplate = $selectTemplate.text();
}

function makeNewRemissionPdf() {
  var doc = new jsPDF("p", "pt", "letter");
  var $content = $("#pdfTemplate");
  $content.append("<h1>I wonder if this will work or not</h1>");
}
