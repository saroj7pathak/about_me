var labels = [
    "Georgia",
    "Arkansas",
    "Oregon",
    "Rhode Island",
    "California",
    "Pennsylvania",
    "Arizona",
    "Michigan",
    "Illinois",
    "Indiana",
    "West Virginia",
    "Missouri",
    "Iowa",
    "Ohio",
    "Utah",
    "Nevada",
    "Kentucky",
    "Kansas",
    "Virginia",
    "North Carolina",
    "Ontario",
    "Nebraska",
    "New Jersey",
    "Texas",
    "Mississippi",
    "New Mexico",
    "Colorado",
    "Alabama",
    "Quebec",
    "Wisconsin",
    "Tennessee",
    "Connecticut",
    "New Brunswick",
    "Alberta",
    "Washington",
    "Minnesota",
    "Oklahoma",
    "Saskatchewan",
    "Delaware",
    "Manitoba",
    "South Carolina",
    "Florida",
    "Idaho",
    "New York",
    "Massachusetts",
    "Montana",
    "Vermont",
    "Maryland",
    "Maine",
    "Newfoundland",
    "South Dakota",
    "Wyoming",
    "Louisiana",
    "Prince Edward Island",
    "Hawaii",
    "North Dakota",
    "New Hampshire",
    "Nova Scotia",
    "Alaska"
];
var kesal = [
  2103.565217,
  1612.589391,
  1351.076336,
  1229.285714,
  883.423606,
  880.174447,
  792.959391,
  765.819113,
  741.343653,
  719.404255,
  687.3,
  624.773246,
  580.550781,
  563.571023,
  553.846154,
  553.361775,
  551.27193,
  537.234957,
  477.735955,
  465.64503,
  464.324324,
  448.931034,
  443.891496,
  407.383495,
  405.688797,
  367.265403,
  355.969309,
  355.566667,
  349.490566,
  312.163987,
  302.964706,
  291.275229,
  290.052632,
  289.976744,
  288.505698,
  286.456193,
  280.199255,
  274.65035,
  246.371069,
  243.280597,
  239.235294,
  222.839695,
  219.240157,
  194.099099,
  186.666667,
  182.695652,
  151.971429,
  151.628205,
  146,
  117.666667,
  114.788235,
  90.009852,
  83.292929,
  74.619048,
  67.117647,
  57.583333,
  48,
  43.5,
  36.708333,
];
/*var year = [
    2019,
    1989,
    1994,
    2014,
    1993,
    2018,
    1996
];*/
//An attempt to import json file//
/*$.getJSON("data2.json", function (json) {
  // will generate array with ['Monday', 'Tuesday', 'Wednesday']
  var labels = data2.json(function (item) {
    return item.timestamp;
  });*/

var mix = document.getElementById("mixChart2").getContext('2d');
var mixChart = new Chart(mix, {
  type: 'bar',
  data: {
    labels: labels,
    datasets: [
      /*{
        type: 'line',
        label: "kESAL",
        data: kesal,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        yAxisID: 'kESAL',
      },*/
      {
        label: "kESAL",
        data: kesal,
        borderColor: 'rgba(192, 75, 192, 1)',
        borderWidth: 0,
        backgroundColor: 'rgba(192, 75, 192, 0.5)',
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
            beginAtZero: true,
          },
          scaleLabel: {
            display: true,
            labelString: 'Kesal'
          },
          gridLines: {
            display: false
          }
        },
        /*{
          id: "year",
          position: 'right',
          ticks: {
            beginAtZero: false,
          },
          scaleLabel: {
            display: true,
            labelString: 'Year'
          },
          gridLines: {
            display: false
          }
        },*/
      ],
      xAxes: [{
        gridLines: {
          display: false
        },
        scaleLabel: {
          display: true,
          labelString: 'Location'
        },
      }
      ]
    },
  }
//})
});
