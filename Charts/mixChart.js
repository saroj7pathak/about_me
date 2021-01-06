var labels = [
    "Alabama",
    "California",
    "Georgia",
    "Hawaii",
    "Indiana",
    "Kentucky",
    "Montana"
];
var kesal = [
    20000,
    14000,
    12000,
    15000,
    18000,
    19000,
    22000
];
var year = [
    2019,
    1989,
    1994,
    2014,
    1993,
    2018,
    1996
];
var mix = document.getElementById("mixChart").getContext('2d');
var mixChart = new Chart(mix, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [
            {
                type: 'line',
                label: "kESAL",
                data: kesal,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(0, 0, 0, 0)',
                yAxisID: 'kESAL',
            },
            {
                label: "Year",
                data: year,
                borderColor: 'rgba(0, 0, 0, 0)',
                backgroundColor: 'rgba(192, 75, 192, 0.5)',
                yAxisID: 'year',
            }
        ]
    },
    options: {
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
                {
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
                },
            ],
          xAxes: [{
            gridLines: {
              display: false
            }
          }
          ]
        },
    }
});
