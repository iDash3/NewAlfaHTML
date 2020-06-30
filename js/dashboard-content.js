var $data_viz = $("#data-visualizer");
var data_viz_chart = new Chart($data_viz, {
  type: "line",
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Total Simping Hours",
        backgroundColor: "rgb(255,100,130)",
        borderColor: "rgb(255,99,130)",
        data: [0, 30, 20, 100, 20, 30, 0],
      },
    ],
  },
});
