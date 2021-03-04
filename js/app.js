'use strict';



let arryOfCatigory = ['Alhusain Center', 'Refugees', 'Orphans', 'Poor'];


function chart() {

  let chartJs = document.getElementById('score').getContext('2d');

  let storedValue = localStorage.getItem('Sumation');
  let chartArr = JSON.parse(storedValue);
  if (chartArr) {
    var buyerData = new Chart(chartJs, {
      type: 'horizontalBar',
      data: {
        labels: arryOfCatigory,
        datasets: [
          {
            label: 'Total Amount Of Donations',
            borderColor: 'ACC26D',
            data: chartArr,
            backgroundColor: ['#004c84', '#e00570','#700338','rgba(12,194,52,0.4)'],
            borderColor: '#E7E6E1',
            borderWidth: 2,
            hoverBorderWidth: 5,
            hoverborderColor: '#AAAAAA'

          }

        ]
      }
    });
  }
}

