// Sample tasks model
var tasks = {
  task1: {
    name: "Diseño de sección",
    description: "Hacer el diseño de esta sección e implementarlo.",
    importance: 3,
    completed: false,
  },
  task2: {
    name: "Crear datos mock-up",
    description: "Crear datos para observar el comportamiento.",
    importance: 1,
    completed: true,
  },
};

// HTML on a string
var template = `
  <div id="::id::" class="col-12 task-card task-level-::importance::">
    <div class="row">
      <div class="col-12">
        ::name::
      </div>
      <div class="col-1">
        Completed
      </div>
      <div class="col-11">
        <p> ::description:: </p>
      </div>
    </div>
  </div>
`;

// Render tasks objects to document
function renderTask() {
  for (task in tasks) {
    let target = $("#task-container");
  }
}

$().ready(function () {
  renderTask();
});
