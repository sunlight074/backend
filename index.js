const express = require('express')
const cors = require('cors')
const app = express()
const port = 5174

const userData = [
    {name:'วาณี1', lastname:'ปุยเจริญ', email:'wanee@gmail.com'},
    {name:'วาณี2', lastname:'ปุยเจริญ', email:'wanee@gmail.com'},
    {name:'วาณี3', lastname:'ปุยเจริญ', email:'wanee@gmail.com'},
    {name:'วาณี4', lastname:'ปุยเจริญ', email:'wanee@gmail.com'},
    {name:'วาณี5', lastname:'ปุยเจริญ', email:'wanee@gmail.com'},
]

const corsOption = {
    origin : '*',
    credentials : true
}

app.use(express.json());

app.use(cors(corsOption))

app.get('/',(_req, res)=> { // get ใช้สำหรับดึงข้อมูล
    res.send('hello world')
})

app.get('/api/list-user',(_req, res)=>{
    res.send({result:userData})
})

app.post('/api/register',(req, res)=>{ //POST ใช้สำหรับสร้างข้อมูล
    res.send({ result: req.body })
})

app.post('/api/login',(req, res)=>{ //POST ใช้สำหรับสร้างข้อมูล
    res.send({ result: req.body })
})


app.listen(port, ()=>{
    console.log('listening in port ',port)
})

