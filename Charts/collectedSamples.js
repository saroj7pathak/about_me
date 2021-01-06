var labels = [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
];
var data = [
  120,
  316,
  644,
  877,
  929,
  867,
  959,
  946,
  927,
  810,
  799,
  800,
  746,
  687,
  680,
  604,
  543,
  535,
  493,
  434,
  348,
  283,
  276,
  239,
  231,
  221,
  219,
  156,
  168,
  160,
];
var pie = document.getElementById("collectedSamples").getContext('2d');
var myChart = new Chart(pie, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [
            {
                data: data,
              borderColor: 'rgba(255, 159, 64, 1)',
              backgroundColor: 'rgba(255, 159, 64, 0.2)',
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
            id: "Number of Samples",
            ticks: {
              beginAtZero: false,
            },
            scaleLabel: {
              display: true,
              labelString: 'Number of Samples'
            },
            gridLines: {
              display: true
            }
          },
        ],
        xAxes: [{
          gridLines: {
            display: true
          },
          scaleLabel: {
            display: true,
            labelString: 'Year'
          },
        }
        ]
      },
        title: {
            display: true,
            text: "Annual Samples Collected"
        }
    }
});
