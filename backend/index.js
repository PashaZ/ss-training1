const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 8080 ;

// const createPath = (page)=>
// path.resolve(__dirname, 'public', `${page}.html`);

// app.get('/', (req, res)=>{
//   res.sendFile(createPath('index'))
// })

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, (error) => {
  error ? 
  console.log(error):
  console.log(`Example app listening on port ${port}`)
});

app.get ('/', (req, res)=>{
  res.sendFile(`${__dirname}/public/index.html`)
    });

// app.get('/', (req, res) => {
//   res.send('Hello World!') 
// });



