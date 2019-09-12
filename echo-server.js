const http = require('http');
const server = http.createServer();

server.on('request',(req,res)=>{
    if(req.method =='POST' && req.url == "/echo"){
        let body = [];
        req.on('data', chunk=>{
            body.push(chunk)
        })
        .on('end',()=>{
            res.writeHeader(200,{'Content-Type': 'text/plain'})
            body = Buffer.concat(body).toString();
            res.end(body);  
        })
          
    
    }else{
        res.statusCode=404;
        res.en();
    }

})
server.listen(3001);
console.log('Servidor en la url http://localhost:3001');