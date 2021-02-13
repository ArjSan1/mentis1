const express = require('express');
const app = express();
const http = require("http");
const server = http.createServer(app);

app.use(express.static('views'));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');

});

/*app.listen(8000, () => {
    console.log('server started');
});*/

server.listen(3000, () => console.log(`Listening on port 3000`));