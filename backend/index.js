const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000 ;

app.use(express.static(path.join(__dirname, 'public')));


app.get ('/', (req, res)=>{
  res.send(`${__dirname}/public/index.html`)
    });

// app.get('/', (req, res) => {
//   res.send('Hello World!') 
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

