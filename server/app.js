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

app.get("/projects", (req, res) => {
  console.log(req);
  res.status(200).sendFile(path.join(__dirname,'..', 'client', 'projects.html'))
})

app.get("/ctfs", (req, res) => {
  console.log(req);
  res.status(200).sendFile(path.join(__dirname,'..', 'client', 'na.html'))
})


app.get("/rice", (req, res) => {
  console.log(req);
  res.status(200).sendFile(path.join(__dirname,'..', 'client', 'na.html'))
})


app.get("/resume", (req, res) => {
  console.log(req);
  res.status(200).sendFile(path.join(__dirname,'..', 'client', 'na.html'))
})


app.get("/quartz", (req, res) => {
  console.log(req);
  res.status(200).sendFile(path.join(__dirname,'..', 'client', 'na.html'))
})
