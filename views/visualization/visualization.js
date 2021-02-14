let name = localStorage.getItem('name');
var socket = io();
let xlabels = [];
let ytemps = [];
ytemps.push('Mood Scores Over the Past Week');
socket.emit('retrieveJournalData', name);
socket.on('articlesSent', (info)=>{
    console.log("i am here now, when does this print?");
    for (i = 0; i < (Object.keys(info).length); i++) {//ok
      xlabels.push(info[i]["date"]);
      ytemps.push(info[i]["moodScore"]);

    }
    console.log(ytemps);
    //console.log(ytemps[1]);

var chart = c3.generate({
    data: {
        columns: [
            ytemps
        ],
        type: 'bar',
        
    },
    bar: {
        width: {
            ratio: 0.5 // this makes bar width 50% of length between ticks
        }
        // or
        //width: 100 // this makes bar width 100px
    }
});

});
let bruh = [ytemps[0],ytemps[1],ytemps[2],ytemps[3]];
console.log(bruh);
console.log(bruh[0])
console.log(ytemps);
console.log(ytemps[0]);
console.log(ytemps[1]);
console.log(ytemps[2]);
console.log(ytemps[3]);
console.log(ytemps[4]);


