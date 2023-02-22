const express = require('express')
const cors = require('cors')
const con = require('./connection')
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

con.connect((err) =>{
    if(err) throw err

    console.log('Connected')
})

// สร้าง Table ชื่อ USER
con.query("CREATE TABLE IF NOT EXISTS USER (user_id int NOT NULL AUTO_INCREMENT ,first_name VARCHAR(255),last_name VARCHAR(255),email VARCHAR(255),password VARCHAR(255),create_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,PRIMARY KEY (user_id)) DEFAULT CHARSET= utf8",
(err)=> {
    if(err) throw err
    console.log('create table success')
    con.end()
})


app.use(express.json());

app.use(cors(corsOption))

app.get('/',(_req, res)=> { // get ใช้สำหรับดึงข้อมูล
    res.send('hello world')
})

app.get('/api/list-user',(_req, res)=>{ // get ใช้สำหรับดึงข้อมูล
    res.send({result:userData})
})

app.post('/api/register',(req, res)=>{ // POST ใช้สำหรับสร้างข้อมูล
    console.log('เรียก ',req.body)
    res.send({ result: req.body })
})

app.post('/api/login',(req, res)=>{ // POST ใช้สำหรับสร้างข้อมูล
    res.send({ result: req.body })
})


app.listen(port, ()=>{
    console.log('listening in port ',port)
})

