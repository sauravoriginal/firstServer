const http =require('http');
const fs=require('fs');
const port=8000;

const server=http.createServer((req,res)=>{
    console.log(req.url);
    // res.write("welcome to\n");
    // res.end("hello Everyone");
    res.writeHead(200, {
        'Content-Type': 'text/html',
      })
      fs.readFile("home.html",(err,data)=>{
        if(err){
            return res.end("sorry");
        }
        res.end(data);
      })

    // switch(req.url){
    //     case '/about':res.end("<h1>about</h1>");
    //     break;
    //     case '/login':res.end("<h1>login</h1>");
    //     break;
    //     default: res.end("<h1>404 error</h1>");
    // }
});

 server.listen(port,(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(`listening on port http://localhost:${port}`
    );
 })