const express = require('express')
const app = express()
const path = require('path')

app.use(express.json());
app.use(express.static(path.join(__dirname, "..", 'client')));
app.listen(3000, () => {
  console.log("server is running");
})

app.get("/", (req, res) => {
  console.log(req);
  res.status(200).sendFile(path.join(__dirname,'..', 'client', 'index.html'))
})

