const express = require('express')
const app = express()
// const PORT = 3000
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World!') 
});
app.get('/about', (req, res)=>{
    res.send('Hello About')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})