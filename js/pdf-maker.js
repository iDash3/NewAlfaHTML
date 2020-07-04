// Global variables (fuck me)
// Template selected by select component
var selectedTemplate;

// Data structures
dataStructures = {
  remission: {
    number: {
      name: "Número de Remisión",
      required: true,
    },
    client: {
      name: "Cliente",
      required: true,
    },
    direction: {
      name: "Dirección",
      required: true,
    },
    phone1: {
      name: "Número 1",
      required: true,
    },
    phone2: {
      name: "Número 2",
      required: false,
    },
    betweenStreets: {
      name: "Entre calles",
      required: false,
    },
    reference: {
      name: "Referencias",
      required: true,
    },
    destination: {
      name: "Destino",
      required: false,
    },
    units: {
      name: "Unidades",
      required: true,
    },
    driver: {
      name: "Conductor",
      required: true,
    },
  },
};

// Handle document selection
function handleSelect() {
  var $selectTemplate = $("#selectTemplate :selected");
  selectedTemplate = $selectTemplate.val();
}

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

  // Bind on input change
  $("#radioManual-container .form-control").on("input", function () {
    getInputValues();
  });
});

// Select remission first
let $radioManualContainer = $("#targetManualContainer");
selectedTemplate = "remission";
renderInputs($radioManualContainer);

// Worst fucking JS function ive ever written, god bless
function renderInputs(targetHTML) {
  // Iterate over the data structures
  var typeOfData = undefined;
  for (docType in dataStructures) {
    // If selected document is in data structure
    if (selectedTemplate == docType) {
      console.log(`Its a ${docType} `);
      typeOfData = docType;
    } else {
      // Notify the user
      console.log("Not an accepted document!");
    }
  }

  var component = [];
  if (typeOfData != undefined) {
    var templateStart = `
		<div class="row">
		`;
    component.push(templateStart);

    for (obj in dataStructures[typeOfData]) {
      var componentSpanId = `${obj}Span`;
      var componentId = obj;
      var componentName = dataStructures[typeOfData][obj]["name"];
      var componentRequired = dataStructures[typeOfData][obj]["required"];

      var template = `
        <!--  -->
        <div class="col-12 col-md-6">
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                <span
                    class="input-group-text" 
                    id="${componentSpanId}"
                >
                ${componentName}
                </span>
            </div>
            <input
              type="text"
              class="form-control"
              aria-label="Sizing example input"
							aria-describedby="${componentSpanId}"
							id="${componentId}"
            />
        `;

      if (componentRequired) {
        template =
          template +
          `
                <div class="input-group-append">
                    <span class="input-group-text">
                    *
                    </span>
                    </div>
                </div>
            </div>
        <!--  --> `;
      } else {
        template =
          template +
          `
          </div>
        </div>
        <!--  --> `;
      }
      // console.log(`${componentId}, ${componentName}, ${componentRequired}`);
      // console.log(template);
      component.push(template);
    }
    var templateEnd = `
		</div>
		`;
    component.push(templateEnd);
  }
  // console.log(component.join(" "));
  targetHTML.append(component.join(" "));
}

// Shitty functions all around
function getInputValues() {
  var inputData = $("#radioManual-container .form-control")
    .map(function (idx, elem) {
      return $(elem).val();
    })
    .get();
  return inputData;
}

// I literally copied the function from above
// Disgusting
function renderHTMLforPDF() {
  // Iterate over the data structures
  var typeOfData = undefined;
  for (docType in dataStructures) {
    // If selected document is in data structure
    if (selectedTemplate == docType) {
      console.log(`Its a ${docType} `);
      typeOfData = docType;
    } else {
      // Notify the user
      console.log("Not an accepted document!");
      return;
    }
  }

  var component = [];
  var individualComponents = [];
  if (typeOfData != undefined) {
    for (obj in dataStructures[typeOfData]) {
      var componentName = dataStructures[typeOfData][obj]["name"];

      var template = `
        <!--  -->
				<div>
					<span>
						${componentName}
					</span>
					<span>
						::value::
					</span>
				</div>
        <!--  -->
        `;
      individualComponents.push(template);
    }
    inputValues = getInputValues();
    for (let a = 0; a < inputValues.length; a++) {
      component.push(
        individualComponents[a].replace("::value::", inputValues[a])
      );
    }
  }
  var templateStart = `
			<img src="http://placekitten.com/500/200" alt="" />
		`;
  component.unshift(templateStart);
  // targetHTML.append(component.join(" "));
  return component.join(" ");
}

// Make a new pdf
function makeNewPDF() {
  console.log(renderHTMLforPDF());
  source = renderHTMLforPDF();

  // New jsPDF instance [Portrair, mm, A4]
  var pdf = new jsPDF("p", "pt", "a4");

  var inputValues = getInputValues();

  // var source = $("#pdfTemplate")[0];
  specialElementHandlers = {
    // element with id of "bypass" - jQuery style selector
    "#bypassme": function (element, renderer) {
      // true = "handled elsewhere, bypass text extraction"
      return true;
    },
  };

  //Docs margins
  margins = {
    top: 80,
    bottom: 60,
    left: 40,
    width: 522,
  };

  pdf.fromHTML(
    source, // HTML string or DOM elem ref.
    margins.left, // x coord
    margins.top, // y coord
    {
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
