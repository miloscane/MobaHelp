//Server
var server				=	require('express')();
var http				=	require('http').Server(server);
var httpl 				= 	require('http');
var net					=	require('net');
var express				=	require('express');
var fs					=	require('fs');   
var bodyParser			=	require('body-parser');    
var session				=	require('express-session');
var nodemailer 		= require('nodemailer');
const dotenv 			=	require('dotenv');
var cookieParser	=	require('cookie-parser');
var crypto				=	require('crypto');
var mongo					=	require('mongodb');
var io						=	require('socket.io')(http);
dotenv.config();


server.set('view engine','ejs');
var viewArray	=	[__dirname+'/views'];
var viewFolder	=	fs.readdirSync('views');
for(var i=0;i<viewFolder.length;i++){
	if(viewFolder[i].split(".").length==1){
		viewArray.push(__dirname+'/'+viewFolder[i])
	}
}
server.set('views', viewArray);
server.use(express.static(__dirname + '/public'));
server.use(bodyParser.json());  
server.use(bodyParser.urlencoded({ extended: true }));
server.use(cookieParser());
server.use(session({
	secret: process.env.sessionsecret,
    resave: true,
    saveUninitialized: true
}));

//PORT Listening
http.listen(process.env.PORT, function(){
  console.log('Server Started');
});

var mainFileVersion	=	1.1;

io.on('connection', function(socket){
	socket.emit("Hello from Milos");
});

server.get('/',function(req,res){
	res.render('home',{
		mainFileVersion: mainFileVersion
	});
});