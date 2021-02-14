var ctx = document.getElementById('myChart').getContext('2d');
let name = localStorage.getItem('name');
var socket = io();

socket.emit('retrieveJournalData', name);

let labels = [];
let data = [];
socket.on('articlesSent', (info)=>{
    for (i = 0; i < (Object.keys(info).length); i++) {

      labels.push(info[i]["date"]);
      data.push(info[i]["moodScore"]);
      

    }
    console.log(labels);
    console.log(data);



})

var myChart = new Chart(ctx, {
  
    type: 'bar',
    data: {



        labels,
        datasets: [{
            label: 'Moodscore',
            data: [0,-34,84],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)'
               
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
                
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});