const express = require('express')
const app = express()
const port = 8000
const cors = require('cors')
app.use(cors())

const topics = require('./data/topics.json');
const details = require('./data/details.json')

app.get('/topics',(req,res)=>{
    res.send(topics)
})

app.get('/topics/:id',(req,res)=>{
    const id = req.params.id;
    const SingleTopic = topics.find(tp=> tp.id === id);
    res.send(SingleTopic)
})

app.get('/topics/details/:id',(req,res)=>{
    const id = req.params.id;
    const SingleDetails = details.find(dt=>dt.id === id);
    res.send(SingleDetails)
})

app.listen(port,()=>{
    console.log(`this app is running on ${port} `)
})