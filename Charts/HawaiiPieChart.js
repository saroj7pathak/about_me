var labels = [
    "Asphalt concrete layer",
    //"Bound (treated) base",
    //"Bound (treated) subbase",
    //"Engineering Fabric",
    "Portland cement concrete layer",
    "Subgrade (untreated)",
    "Unbound (granular) base",
    //"Unbound (granular) subbase",
];
var data = [
    13,
    7,
    5,
    6,
];
var pie = document.getElementById("HawaiiPieChart").getContext('2d');
var myChart = new Chart(pie, {
    type: 'polarArea',
    data: {
        labels: labels,
        datasets: [
            {
                data: data,
                borderColor: ['rgba(75, 192, 192, 1)',
                  'rgba(255, 99, 132, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                  //'rgba(54, 162, 235, 1)',
                  //'rgba(255, 206, 86, 1)',
                  //'rgba(130, 90, 45, 1)',
                  ],
                backgroundColor: ['rgba(75, 192, 192, 0.2)',
                  'rgba(192, 0, 0, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(130, 90, 45, 0.2)',
                  'rgba(255, 99, 132, 0.2)'],
            }
        ]
    },
    options: {
        title: {
            display: false,
            text: "Hawaiian Road Types",
            fontSize: 16
        }
    }
});
