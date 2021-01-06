var labels = [
    "Asphalt concrete layer",
    "Bound (treated) base",
    "Bound (treated) subbase",
    "Engineering Fabric",
    "Portland cement concrete layer",
    "Subgrade (untreated)",
    "Unbound (granular) base",
    "Unbound (granular) subbase",
];
var data = [
    4805,
    1149,
    161,
    96,
    1101,
    2444,
    1396,
    949,

];
var pie = document.getElementById("pieChart").getContext('2d');
var myChart = new Chart(pie, {
    type: 'pie',
    data: {
        labels: labels,
        datasets: [
            {
                data: data,
                borderColor: ['rgba(75, 192, 192, 1)',
                  'rgba(192, 0, 0, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(130, 90, 45, 1)',
                  'rgba(255, 99, 132, 1)'],
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
      legend:{
        display:true,
        position:'right'
      },
        title: {
            display: false,
            text: "American Roads"
        }
    }
});
