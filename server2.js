var app = require('express')();
var http = require('http').Server(app);
const bodyParser = require('body-parser');
var io = require('socket.io')(http);

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

//app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/*+json' }))

/*
app.get('/',(req,res)=>{ 
    res.sendFile(__dirname+'/index2.html');
});
*/

app.get('/B001',(req,res)=>{
    res.sendFile(__dirname+'/bbuilding.html');
});
app.get('/K001',(req,res)=>{
    res.sendFile(__dirname+'/kbuilding.html');
});
app.get('/D001',(req,res)=>{
    res.sendFile(__dirname+'/dbuilding.html');
});


app.post('/B001/sendScan', urlencodedParser, function (req, res) {
    var location = req.body.location;
    var scanResult = req.body.scanResult;
    var fullName = req.body.fullName;
    var dept = req.body.dept;
    var signinTime = req.body.signinTime;
    io.emit('B001',{scanResult:scanResult,fullName:fullName,dept:dept,signinTime:signinTime});
    res.send('send message success!')
});
app.post('/K001/sendScan', urlencodedParser, function (req, res) {
    var location = req.body.location;
    var scanResult = req.body.scanResult;
    var fullName = req.body.fullName;
    var dept = req.body.dept;
    var signinTime = req.body.signinTime;
    io.emit('K001',{scanResult:scanResult,fullName:fullName,dept:dept,signinTime:signinTime});
    res.send('send message success!')
});
app.post('/D001/sendScan', urlencodedParser, function (req, res) {
    var location = req.body.location;
    var scanResult = req.body.scanResult;
    var fullName = req.body.fullName;
    var dept = req.body.dept;
    var signinTime = req.body.signinTime;
    io.emit('D001',{scanResult:scanResult,fullName:fullName,dept:dept,signinTime:signinTime});
    res.send('send message success!')
});

/*
app.post('/sendmessage', urlencodedParser, function (req, res) {
    //res.send('welcome, ' + req.body.message)
    //io.emit('chat message',req.body.message);
    var location = req.body.location;
    var scanResult = req.body.scanResult;
    var fullName = req.body.fullName;
    var dept = req.body.dept;
    var signinTime = req.body.signinTime;
    console.log(location);
    //console.log(req.body.message);
    io.emit(location,{scanResult:scanResult,fullName:fullName,dept:dept,signinTime:signinTime});
    //io.emit('chat message',{scanResult:scanResult,fullName:fullName,dept:dept,signinTime:signinTime});
    //console.log(scanResult);
    //console.log(fullName);
    //console.log(dept);
    //console.log(signinTime);
    res.send('send message success!')
});
*/

io.on('connection',(socket)=>{
    console.log('Client Connected');
    //Listen 
    /*
    socket.on('B001',(msg)=>{
        
        console.log('message: '+msg.scanResult);

        //Reply
        //io.emit('chat message',msg.scanResult);
    });
    */
    
    /*
    socket.on('B001',(msg)=>{   
        console.log('message: '+msg.scanResult);
    });
    socket.on('K001',(msg)=>{   
        console.log('message: '+msg.scanResult);
    });
    socket.on('D001',(msg)=>{   
        console.log('message: '+msg.scanResult);
    });
    */

});

http.listen(3081,function(){
    console.log('Listening on port : 3081');
});

