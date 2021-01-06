var year = [
  1990,
  1991,
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
  400.283333,
  304.056962,
  360.888199,
  379.145952,
  475.672766,
  501.95271,
  535.656934,
  546.559197,
  643.83603,
  581.795062,
  544.877347,
  572.52125,
  555.587131,
  553.416303,
  926.397059,
  569.25,
  481.631676,
  521.106542,
  506.15213,
  523.479263,
  632.413793,
  599.787986,
  577.304348,
  582.502092,
  637.341991,
  617.21267,
  546.86758,
  667.320513,
  621.369048,
  648.075,
];

var mix = document.getElementById("Findings3").getContext('2d');
var mixChart = new Chart(mix, {
  type: 'line',
  data: {
    labels: year,
    datasets: [
      {
        label: "kESAL",
        data: kesal,
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 3,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
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
