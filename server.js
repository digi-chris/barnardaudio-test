var express = require('express');
var app = express();

// reply to request with "Hello World!"
app.get('/', function (req, res) {
  res.send('Hello World!');
});

//start a server on port 80 and log its start to our console
var server = app.listen(80, function () {

  var port = server.address().port;
  console.log('Example app listening on port ', port);

});


const { spawn } = require('child_process');
const X11 = spawn('startx', []);

X11.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

X11.stderr.on('data', (data) => {
  console.log(`stderr: ${data}`);
});

X11.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});