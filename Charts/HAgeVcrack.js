var names = [
   "Asphalt concrete layer",
   "Portland cement concrete layer",
   "Subgrade (untreated)",
   "Unbound (granular) base",
];
var prcnt = [
  14.615385,
  2.428571,
  11.4,
  0.166667,
];
var length = [
  302.461538,
  90.571429,
  22.8,
  4,
];
var mix = document.getElementById("HAgeVcrack").getContext('2d');
var mixChart = new Chart(mix, {
    type: 'bar',
    data: {
        labels: names,
        datasets: [
            {
                type: 'bar',
                label: "Crack Length",
                data: length,
                borderColor: 'rgba(192, 0, 0, 1)',
                borderWidth: 1,
                backgroundColor: 'rgba(192, 0, 0, 0.2)',
                yAxisID: 'Crack Length',
            },
            {
                label: "Crack Percentage",
                data: prcnt,
                borderColor: ['rgba(130, 90, 45, 1)',
                  'rgba(130, 90, 45, 1)',
                  'rgba(130, 90, 45, 1)',
                  'rgba(130, 90, 45, 1)'],
                borderWidth: 1,
                backgroundColor: ['rgba(130, 90, 45, 0.2)',
                  'rgba(130, 90, 45, 0.2)',
                  'rgba(130, 90, 45, 0.2)',
                  'rgba(130, 90, 45, 0.2)'],
                yAxisID: 'Crack Percentage',
            }
        ]
    },
    options: {
        scales: {
            yAxes: [
                {
                    id: "Crack Length",
                    ticks: {
                        beginAtZero: true,
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Crack Length'
                      },
                  gridLines: {
                      display: true
                  }
                },
                {
                    id: "Crack Percentage",
                    position: 'right',
                    ticks: {
                        beginAtZero: false,
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Crack Percentage'
                      },
                  gridLines: {
                    display: false
                  }
                },
            ],
          xAxes: [{
            ticks: {
              autoSkip: false
            },
            gridLines: {
              display: false
            },
            scaleLabel: {
              display: true,
              labelString: 'Road Type'
            },
          }
          ]
        },
    }
});
