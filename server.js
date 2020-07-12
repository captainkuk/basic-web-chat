var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/',(req,res)=>{
    //res.end("Basic Web Chat"); 
    res.sendFile(__dirname+'index.html');
});

io.on('connection',(socket)=>{
    console.log('Client Connected');
})

http.listen(3081,function(){
    console.log('Listening on port : 3081');
});

