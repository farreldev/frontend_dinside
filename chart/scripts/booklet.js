'use strict';

var ctx = document.getElementById('lineChart'),
    ctx2 = document.getElementById('barChart'),
    xLabels = ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013'],
    xLabels2 = ['2000', '2001', '2002', '2003', '2004', '2005', '2006'],


//-- Line Chart Style --//
lineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: xLabels,
    datasets: [{
      label: 'Data Grafik 1',
      fill: false,
      data: [10, 12, 17, 15, 20, 25, 22, 27, 25, 28, 30, 32, 28, 30],
      borderColor: 'rgb(0,185,231)',
      backgroundColor: 'rgba(0,185,231, .25)',
      pointBorderWidth: 2,
      pointBackgroundColor: '#fff',
      pointRadius: 0,
      pointHoverRadius: 4,
      lineTension: 0.1
    }, {
      label: 'Data Grafik 3',
      fill: false,
      data: [17, 17, 20, 18, 15, 18, 19, 24, 22, 30, 34, 33, 34, 40],
      borderColor: 'rgb(250,29,100)',
      backgroundColor: 'rgba(250,29,100, .25)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 2,
      pointRadius: 0,
      pointHoverRadius: 4,
      lineTension: 0.1
    }]
  },
  options: {
    responsive: true,
    legend: {
      display: true
    },
    title: {
      display: true,
      fontSize: 18,
      fontColor: '#333',
      fontStyle: 'normal',
      text: 'Line Chart'
    },
    tooltips: {
      mode: 'index',
      // yAlign: 'bottom',
      // xAlign: 'center',
      borderColor: 'rgba(0,0,0,.1)',
      xPadding: 15,
      yPadding: 10,
      borderWidth: 1,
      titleFontColor: '#333',
      backgroundColor: '#FFF',
      bodyFontColor: '#333',
      intersect: false
    },
    hover: {
      mode: 'index',
      intersect: false
    },
    scales: {
      yAxes: [{
        position: 'right',
        ticks: {
          min: 10,
          max: 50,
          stepSize: 10
        }
      }],
      xAxes: [{
        gridLines: {
          display: true
        },
        ticks: {
          callback: function callback(tick, index, array) {
            return index % (xLabels.length - 1) ? '' : tick;
          }
        }
      }]
    }
  }
}),


//-- Bar Chart Style --//
barChart = new Chart(ctx2, {
  type: 'bar',
  data: {
    labels: xLabels2,
    datasets: [{
      label: 'Data Grafik 1',
      fill: false,
      data: [10, 12, 16, 18, 25, 32, 40],
      bodySpacing: 10,
      borderColor: 'rgb(0,185,231)',
      backgroundColor: 'rgba(0,185,231, .9)',
      pointBorderWidth: 2,
      pointBackgroundColor: '#fff',
      pointRadius: 0,
      pointHoverRadius: 4,
      lineTension: 0.4
    }, {
      label: 'Data Grafik 2',
      fill: false,
      data: [12, 15, 18, 27, 25, 35, 45],
      borderColor: 'rgb(40,0,215)',
      backgroundColor: 'rgba(40,0,215, .9)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 2,
      pointRadius: 0,
      pointHoverRadius: 4,
      lineTension: 0.4
    }]
  },
  options: {
    responsive: true,
    legend: {
      display: true
    },
    title: {
      display: true,
      fontSize: 18,
      fontColor: '#333',
      fontStyle: 'normal',
      text: 'Bar Chart'
    },
    tooltips: {
      mode: 'index',
      intersect: false
    },
    hover: {
      mode: 'index',
      intersect: false
    },
    scales: {
      yAxes: [{
        position: 'left',
        ticks: {
          min: 10,
          max: 50,
          stepSize: 5
        }
      }],
      xAxes: [{
        gridLines: {
          display: false
        },
        ticks: {
          callback: function callback(tick, index, array) {
            return index % (xLabels2.length - 1) ? '' : tick;
          }
        }
      }]
    }
  }
});
//# sourceMappingURL=booklet.js.map
