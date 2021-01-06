var year = [
  1992,
  1993,
  1994,
  1995,
  1996,
  1997,
  1998,
  1999,
  2000,
  2001,
  2002,
  2003,
  2004,
  2005,
  2006,
  2007,
  2008,
  2009,
  2010,
  2011,
  2012,
  2013,
  2014,
  2015,
  2016,
  2017,
  2018,
  2019,
];
var kesal = [
  550.797101,
  577.047619,
  700.320513,
  753.675325,
  724.896104,
  733.077922,
  791.013514,
  889.029412,
  932.985075,
  993.870968,
  1008.403226,
  1109.387097,
  1160.516129,
  1019.360656,
  715.375,
  772.864865,
  1147.357143,
  1115.933333,
  1220.142857,
  1214.464286,
  1172.785714,
  1153.84,
  1034,
  835.535714,
  848.888889,
  1384.47619,
  1259.4375,
  1384.125,
];

var mix = document.getElementById("CaliforniaChart").getContext('2d');
var mixChart = new Chart(mix, {
  type: 'line',
  data: {
    labels: year,
    datasets: [
      {
        label: "kESAL",
        data: kesal,
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 3,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        yAxisID: 'kESAL',
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
          id: "kESAL",
          ticks: {
            beginAtZero: false,
          },
          scaleLabel: {
            display: true,
            labelString: 'Kesal'
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
          labelString: 'Year'
        },
      }
      ]
    },
  }
});
