var names = [
   "2824",
   "803",
   "805",
   "2118",
   "805",
   "1992",
   "1352",
   "801",
   "1065",
   "804",
   "1640",
   "1645",
   "7322",
   "1016",
   "AA61",
   "802",
   "806",
   "1024",
   "806",
   "6056",
   "805",
   "1006",
   "AA03",
   "1803",
   "A806",
   "AA02",
   "1024",
   "1814",
   "AA61",
   "1028",
   "1007",
   "802",
   "1111",
   "4100",
   "801",
   "AA01",
   "AA03",
   "AA02",
   "1029",
   "A805",
   "806",
   "AA01",
   "AA62",
   "802",
   "3024",
   "2819",
   "2001",
   "1005",
   "801",
   "1003",
   "3008,"
];
var crack = [
  {	x: 37	,	y: 7788	}	,
  {	x: 23	,	y: 1684	}	,
  {	x: 23	,	y: 2505	}	,
  {	x: 40	,	y: 2044	}	,
  {	x: 24	,	y: 1441	}	,
  {	x: 30	,	y: 3257	}	,
  {	x: 40	,	y: 3617	}	,
  {	x: 22	,	y: 1673	}	,
  {	x: 43	,	y: 5689	}	,
  {	x: 23	,	y: 527	}	,
  {	x: 37	,	y: 558	}	,
  {	x: 34	,	y: 2314	}	,
  {	x: 47	,	y: 135	}	,
  {	x: 41	,	y: 6105	}	,
  {	x: 33	,	y: 3686	}	,
  {	x: 24	,	y: 2086	}	,
  {	x: 23	,	y: 1438	}	,
  {	x: 35	,	y: 856	}	,
  {	x: 24	,	y: 2411	}	,
  {	x: 51	,	y: 308	}	,
  {	x: 26	,	y: 2387	}	,
  {	x: 45	,	y: 5037	}	,
  {	x: 33	,	y: 6167	}	,
  {	x: 43	,	y: 1500	}	,
  {	x: 21	,	y: 2993	}	,
  {	x: 33	,	y: 4428	}	,
  {	x: 43	,	y: 1996	}	,
  {	x: 50	,	y: 1531	}	,
  {	x: 61	,	y: 7712	}	,
  {	x: 37	,	y: 1663	}	,
  {	x: 37	,	y: 579	}	,
  {	x: 24	,	y: 1088	}	,
  {	x: 48	,	y: 2557	}	,
  {	x: 44	,	y: 1493	}	,
  {	x: 24	,	y: 1732	}	,
  {	x: 33	,	y: 4882	}	,
  {	x: 61	,	y: 4175	}	,
  {	x: 61	,	y: 3388	}	,
  {	x: 38	,	y: 883	}	,
  {	x: 21	,	y: 2138	}	,
  {	x: 26	,	y: 2751	}	,
  {	x: 61	,	y: 3589	}	,
  {	x: 49	,	y: 336	}	,
  {	x: 22	,	y: 1566	}	,
  {	x: 36	,	y: 5526	}	,
  {	x: 39	,	y: 1715	}	,
  {	x: 41	,	y: 4407	}	,
  {	x: 47	,	y: 956	}	,
  {	x: 24	,	y: 1036	}	,
  {	x: 45	,	y: 2339	}	,
  {	x: 36	,	y: 2068	}	,
];
var age = [
  37,
  23,
  23,
  40,
  24,
  30,
  40,
  22,
  43,
  23,
  37,
  34,
  47,
  41,
  33,
  24,
  23,
  35,
  24,
  51,
  26,
  45,
  33,
  43,
  21,
  33,
  43,
  50,
  61,
  37,
  37,
  24,
  48,
  44,
  24,
  33,
  61,
  61,
  38,
  21,
  26,
  61,
  49,
  22,
  36,
  39,
  41,
  47,
  24,
  45,
  36,
];
var mix = document.getElementById("AgeVcrack").getContext('2d');
var mixChart = new Chart(mix, {
    type: 'scatter',
    data: {
      labels: names,
      datasets: [{
        data: crack,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 3,
        pointRadius: 5,
        pointHoverRadius: 10
      }],
    },
  options: {
    tooltips: {
      callbacks: {
        label: function(tooltipItem, data) {
          var label = data.labels[tooltipItem.index];
          return 'Section: ' + label + ': (' + 'Age: ' + tooltipItem.xLabel  + ', ' + 'Crack Length: ' + tooltipItem.yLabel + ')';
        }
      }
    },
    legend:{
      display:false,
      position:'right'
    },
    scales: {
      xAxes: [{
        gridLines: {
          display: true,
        },
        scaleLabel: {
          display: true,
          labelString: 'Age (Years)'
        },
      }
      ],
      yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Crack Length'
          },
          gridLines: {
            display: true
          }
        },
      ],
      x: {
        type: 'linear',
        position: 'bottom'
      }
    }
    }
        //labels: names,
        /*datasets: [
            {
                type: 'scatter',
                label: "Crack Length",
                data: crack,
                borderColor: 'rgba(192, 0, 0, 0.5)',
                backgroundColor: 'rgba(0, 0, 0, 0)',
                yAxisID: 'Crack Length',
            },
            {
                label: "Age",
                data: age,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
                yAxisID: 'age',
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
                      display: false
                  }
                },
                {
                    id: "age",
                    position: 'right',
                    ticks: {
                        beginAtZero: false,
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Age(Yrs)'
                      },
                  gridLines: {
                    display: false
                  }
                },
            ],
          xAxes: [{
            gridLines: {
              display: false
            },
            scaleLabel: {
              display: true,
              labelString: 'SHRP ID'
            },
          }
          ]
        },
    }*/
});
