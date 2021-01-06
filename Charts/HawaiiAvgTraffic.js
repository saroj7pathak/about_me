var labels = [
    "1003",
    "1006",
    "1008",
    "7080",
];
var data = [
  39.166667,
  36.75,
  89.5,
  133.666667,
];
var pie = document.getElementById("HawaiiAvgTraffic").getContext('2d');
var myChart = new Chart(pie, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [
            {
                data: data,
              borderColor: ['rgba(75, 192, 192, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
              backgroundColor: ['rgba(75, 192, 192, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],
            }
        ]
    },
    options: {
      legend:{
        display:false,
        position:'right'
      },
      scales: {
        yAxes: [
          {
            id: "Average kESAL",
            ticks: {
              beginAtZero: true,
            },
            scaleLabel: {
              display: true,
              labelString: 'Average kESAL'
            },
            gridLines: {
              display: true
            }
          },
        ],
        xAxes: [{
          gridLines: {
            display: false
          },
          scaleLabel: {
            display: true,
            labelString: 'Section'
          },
        }
        ]
      },
        title: {
            display: false,
            text: "Average Hawaiian Traffic"
        }
    }
});
