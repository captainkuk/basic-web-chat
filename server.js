const bodyParser = require('body-parser');

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(bodyParser.urlencoded({
    extended:true
}));

app.use(bodyParser.json());


app.get('/',(req,res)=>{
    //res.end("Basic Web Chat"); 
    res.sendFile(__dirname+'/index2.html');
});


var message;
app.post('/sendmessage',(req,res)=>{

    res.sendFile(__dirname+'/sendmessage.html');
    
    console.log(body.user);
    io.emit('chat message',"5555");
     
});

/*
io.on('connection',function(socket){
    
    console.log('Connected');
});
*/


io.on('connection',(socket)=>{
    console.log('Client Connected');
    
    //Listen 
    socket.on('chat message',(msg)=>{
        console.log('message: '+msg);

        //Reply
        io.emit('chat message',msg);

        //io.emit('chat message','5555');
    });
    


});

http.listen(3081,function(){
    console.log('Listening on port : 3081');
});

