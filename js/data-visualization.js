var datavisCanvas = $("#datavis-canvas");

new Chart(datavisCanvas, {
  type: "bar",
  data: {
    labels: ["1900", "1950", "1999", "2050"],
    datasets: [
      {
        label: "Monterrey",
        type: "line",
        borderColor: "#2863a7",
        data: [408, 547, 675, 734],
        fill: false,
      },
      {
        label: "Ciudad de México",
        type: "line",
        borderColor: "#3e95cd",
        data: [133, 221, 783, 2478],
        fill: false,
      },
      {
        label: "Bogota",
        type: "bar",
        backgroundColor: "#9ac9ff",
        data: [408, 547, 675, 734],
      },
      {
        label: "Lima",
        type: "bar",
        backgroundColor: "rgba(0,0,0,0.2)",
        backgroundColorHover: "#3e95cd",
        data: [133, 221, 783, 2478],
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "Crecimiento de Ventas: América Latina",
    },
    legend: { display: false },
  },
});
