// 'use strict';

var chartJs = document.getElementById('score').getContext('2d');
let storedValue = localStorage.getItem('Sumation');
let chartArr = JSON.parse(storedValue);


let arryOfCatigory = ['Alhusain Center', 'Refugees', 'Orphans', 'Poor'];
// let submit2 = document.getElementById('submit');
// submit2.addEventListener('click', viewChart);

function chart(){
//     event.preventDefault();
var buyerData = new Chart(chartJs, {
    type: 'horizontalBar',


    data: {
        labels: arryOfCatigory,
        datasets: [
            {
                label: 'Total Amount Of Donations',
                borderColor: 'ACC26D',
                data: chartArr,
                backgroundColor: ['#FCD1D1', '#AEE1E1', '#FFEE93', 'rgba(12,194,52,0.4)'],
                borderColor: '#E7E6E1',
                borderWidth: 2,
                hoverBorderWidth: 5,
                hoverborderColor: '#AAAAAA'

            }
            
            


        ]
    },

    options: { scales: { yAxes: [{ ticks: { beginAtZero: true } }] } }
})
}
