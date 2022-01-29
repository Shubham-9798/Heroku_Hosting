const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';

app.get('/', (req, res) => {
  res.send('Hello World! new ')
})

app.get('/abc', (req, res) => {
    res.send('Hello World! new 1')
  })

app.listen(PORT, HOST, () => {
      console.log('Server started on ' + HOST + ':' + PORT);
})