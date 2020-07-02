var $data_viz = $("#data-visualizer");
var ctx = $("#ann-visualizer");

var options = {
  responsive: true,
};
var data = {
  labels: ["April", "May", "June", "July"],
  datasets: [
    {
      label: "Total Simping Hours",
      backgroundColor: ["#f0745c", "#85aad7", "#5b5ead", "#f89542"],
      borderColor: ["#f0745c", "#85aad7", "#5b5ead", "#f89542"],
      data: [20, 40, 20, 30],
    },
  ],
};
var data_viz_chart = new Chart($data_viz, {
  type: "line",
  data: data,
  options: options,
});

// // And for a doughnut chart
// var myDoughnutChart = new Chart(ctx, {
//   type: "doughnut",
//   data: {
//     datasets: [
//       {
//         data: [10, 20, 30, 50],
//       },
//     ],
//     labels: ["Uno", "Dos", "Tres", "Cilantro"],
//     borderAlign: "inner",
//   },
//   options: options,
// });

new Chart(ctx, {
  type: "pie",
  data: {
    labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
    datasets: [
      {
        label: "Population (millions)",
        backgroundColor: [
          "#3e95cd",
          "#8e5ea2",
          "#3cba9f",
          "#e8c3b9",
          "#c45850",
        ],
        data: [2478, 5267, 734, 784, 433],
      },
    ],
  },
  options: {
    legend: {
      display: false,
    },
    scales: {
      xAxes: [
        {
          ticks: {
            display: false,
          },
        },
      ],
    },
    title: {
      display: true,
      text: "Toes: Flavor vs Color",
    },
  },
});
