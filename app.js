
//**Accessing Memory in system **//

//const os = require('os');

//var totalMemory = os.totalmem();
//var freeMemory = os.freemem();

//console.log('Total Memory: ' + totalMemory);

//Template String


//console.log(`Total Memory : ${totalMemory}`);
//console.log(`Free Memory : ${freeMemory}`);

//**Accessing Memory in system **//



//**Accessing Files with synchronus and asynchronus in system **//

//const fs = require('fs'); //always require

//Synchronus
//const files = fs.readdirSync('./'); //display all the files in the current folder
//console.log(files);

//Asynchronus
//fs.readdir('$', function(err, files) {
  //  if (err) console.log('Error', err);
  //  else console.log('Results', files);
//});

//**Accessing Files with synchronus and asynchronus in system **//

//**Evenets Module**//

//const EventEmitter = require('events'); //class, not a function


//const Logger = require('./logger');
//const logger = new Logger();

//Register a Listener
//logger.on('messageLogged', (arg) => { 
  //  console.log('Listener called', arg);
//}); //call this before the call below


//logger.log('message');

//**Evenets Module**//

//**http Module**//

const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello Rick');
        res.end();
    }

    if (req.url === '/api/courses') {
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
});



server.listen(3000);

console.log('Listening on port 3000...');

//**http Module**//
