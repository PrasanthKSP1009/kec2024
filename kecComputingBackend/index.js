var express = require('express')
var app = express()
const PORT = 3001
app.get('/',(req,res)=>{
    res.send("Welcome to Backend Server")
})
app.get('/json',(req,res)=>{
    res.json({server:"Welcome to Backend",url:"localhost",port:PORT})
})
app.get('/static',(req,res)=>{
    res.sendFile('/Users/prasanthksp/Documents/RAMPeX-Parent-Folder/Trainings/kec2024/kecComputingBackend/index.html')
})
app.listen(PORT,()=>{
    console.log(`Backend Server Started\nUrl: http://localhost:${PORT}`);
})