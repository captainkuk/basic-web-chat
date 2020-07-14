var app = require('express')();
var http = require('http').Server(app);
const bodyParser = require('body-parser');
var io = require('socket.io')(http);

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

//app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/*+json' }))

app.get('/B001',(req,res)=>{
    res.sendFile(__dirname+'/bbuilding.html');
});
app.get('/K001',(req,res)=>{
    res.sendFile(__dirname+'/kbuilding.html');
});
app.get('/D001',(req,res)=>{
    res.sendFile(__dirname+'/dbuilding.html');
});
app.get('/fingersave',(req,res)=>{
    res.sendFile(__dirname+'/fingersave.html');
});

app.post('/B001/sendScan', urlencodedParser, function (req, res) {
    //var location = req.body.location;
    var scanResult = req.body.scanResult;
    var fullName = req.body.fullName;
    var dept = req.body.dept;
    var signinTime = req.body.signinTime;
    io.emit('B001',{scanResult:scanResult,fullName:fullName,dept:dept,signinTime:signinTime});
    res.send('send success!')
});
app.post('/K001/sendScan', urlencodedParser, function (req, res) {
    //var location = req.body.location;
    var scanResult = req.body.scanResult;
    var fullName = req.body.fullName;
    var dept = req.body.dept;
    var signinTime = req.body.signinTime;
    io.emit('K001',{scanResult:scanResult,fullName:fullName,dept:dept,signinTime:signinTime});
    res.send('send success!')
});
app.post('/D001/sendScan', urlencodedParser, function (req, res) {
    //var location = req.body.location;
    var scanResult = req.body.scanResult;
    var fullName = req.body.fullName;
    var dept = req.body.dept;
    var signinTime = req.body.signinTime;
    io.emit('D001',{scanResult:scanResult,fullName:fullName,dept:dept,signinTime:signinTime});
    res.send('send success!')
});
app.post('/fingersave/ready', urlencodedParser, function (req, res) {
    //var location = req.body.location;
    var ansiFile = req.body.ansiFile;
    var isoFile = req.body.isoFile;
    io.emit('fingersaveready',{ansiFile:ansiFile,isoFile:isoFile});
    //console.log(ansiFile);
    //console.log(isoFile);
    res.send('send success!')

});

io.on('connection',(socket)=>{
    console.log('Client Connected');


});

http.listen(3081,function(){
    console.log('Listening on port : 3081');
});

