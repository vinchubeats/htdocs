const http = require('http');
const port = process.env.port; 
const fs = require('fs');

const myServer = http.createServer((req, res) => {
  
  const urlHandler = (fileLocation, statusCode) => {

    fs.readFile(fileLocation, 'utf-8', (err, data) => {
      if (err) {
        console.log(err);
      }
      else {
        res.writeHead(statusCode)
        res.write(data);
        res.end();}
   
    });
   
   
  }
  if (req.url === '/') { 
    urlHandler('../index.html',200)
  } else if (req.url === '/about') { 
    urlHandler('../about/about.html',200)
  } else if (req.url === '/contact') { 
    urlHandler('../contact/contact.html',200)
  } else if (req.url === '/services') { 
    urlHandler('../services/services.html',200)
  } else { 
    urlHandler('../error/404.html',404)
  } 




})
  //   else {
  //    fs.readFile('../error/404.html', 'utf-8', (err, data) => {
  //       if (err) {
  //         console.log(err);
  //       } else {
  //         res.writeHead(404, { 'Content-Type': 'text/html' });
  //         res.write(data);
  //         res.end();
  //       }
  //     })
  // }

   
  // urlHandler('../index.html', 200);
  // urlHandler('../about/about.html', 200);
  // urlHandler('../contact/contact.html', 200);
  // urlHandler('../services/services.html', 200);



myServer.listen(port, (() => {
  console.log('server is running');
}));