var trace1 = {
  x: [1993, 1994, 1995, 1997, 2003, 2004],
  y: [24, 53, 64, 26, 36, 32],
  name: 'SHRP_ID: 1003',
  marker: {color: 'rgba(75, 192, 192, 1)'},
  type: 'line'
};

var trace2 = {
  x: [1993, 1995, 2003, 2004],
  y: [19, 54, 34, 40],
  name: 'SHRP_ID: 1006',
  marker: {color: 'rgba(255, 99, 132, 1)'},
  type: 'line'
};

var trace3 = {
  x: [1995, 1996, 2003, 2004],
  y: [116, 73, 137, 32],
  name: 'SHRP_ID: 1008',
  marker: {color: 'rgba(153, 102, 255, 1)'},
  type: 'line'
};

var trace4= {
  x: [1995, 1996, 2001],
  y: [73, 115, 213],
  name: 'SHRP_ID: 7080',
  marker: {color: 'rgba(255, 159, 64, 1)'},
  type: 'line'
};

var data = [trace1, trace2, trace3, trace4];

var layout = {
  //title: 'Hawaiian Traffic',
  xaxis: {
    title: 'Year',
    titlefont: {
      size: 16,
      color: 'rgb(107, 107, 107)'
    },
    tickfont: {
      size: 14,
      color: 'rgb(107, 107, 107)'
    }},
  yaxis: {
    title: 'kESAL',
    titlefont: {
      size: 16,
      color: 'rgb(107, 107, 107)'
    },
    tickfont: {
      size: 14,
      color: 'rgb(107, 107, 107)'
    }
  },
  legend: {
    x: 0,
    y: 1.0,
    bgcolor: 'rgba(255, 255, 255, 0)',
    bordercolor: 'rgba(255, 255, 255, 0)'
  },
  barmode: 'group',
  bargap: 0.15,
  bargroupgap: 0.1
};

Plotly.newPlot('myDiv1', data, layout);
