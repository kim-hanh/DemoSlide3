var http = require('http');
var fs = require('fs');
var myMoldule = require('./my_module');


http.createServer(function (request,response) {
   response.writeHead(200,{'Content-type' : 'text/html'});

   var url = request.url;

   if (url == '/'){
      // truy cap trang chu
      fs.readFile('index_html.html',function (error,data) {
         if (!error){
            response.write(data);
            response.end();
         }else {
            response.end('404 Not Found');
         }

      });

   }else if (url == '/show'){

   }else if (url == '/insert'){
      fs.writeFile('test.txt', 'hello, inserted', function (error) {
         if (!error){
            response.end('Insert thanh cong!');
         }else {
            response.end(error);
         }
      });

   }else if (url == '/update'){
      fs.appendFile('test.txt', 'hello2, Updated',function (error) {
         if (!error){
            response.end('Update thanh cong!');
         }else {
            response.end(error);
         }
      })

   }else if (url == '/delete'){
       fs.unlink('rename_file.txt',function (error) {
          if (!error){
             response.end('Delete thanh cong!');
          }else {
             response.end(error);
          }
       });
   }else if (url == '/rename_file'){
      fs.rename('test.txt','rename_file.txt',function (error) {
         if (!error){
            response.end('rename thanh cong!');
         }else {
            response.end(error);
         }
      });
   }


}).listen(8085);
