const express = require('express') // ไลบรารี่สำหรับทำ api
const cors = require('cors') // ไลบรารี่สำหรับกำหนดการเชื่อมต่อ api

const con = require('./connection')  // เรียก con จากไฟล์ connection.js
const app = express() // เรียกใช้งานฟังก์ชั้นสำหรับการสร้าง api
const port = 5174 // ประกาศ port

// mock ข้อมูล
const userData = [
    {name:'วาณี1', lastname:'ปุยเจริญ', email:'wanee@gmail.com'},
    {name:'วาณี2', lastname:'ปุยเจริญ', email:'wanee@gmail.com'},
    {name:'วาณี3', lastname:'ปุยเจริญ', email:'wanee@gmail.com'},
    {name:'วาณี4', lastname:'ปุยเจริญ', email:'wanee@gmail.com'},
    {name:'วาณี5', lastname:'ปุยเจริญ', email:'wanee@gmail.com'},
]

// อนุญาตให้เชื่อมต่อ api ได้ทั้งหมดไม่ว่าจะมาจาแอปไหน
const corsOption = {
    origin : '*',
    credentials : true
}

//เชื่อมต่อฐานข้อมูล
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

//ให้สามารถอ่านข้อมูลประเภท json ได้
app.use(express.json());

//อนุญาตทุกแอป
app.use(cors(corsOption))

app.get('/api/list-user',(_req, res)=>{ // get ใช้สำหรับดึงข้อมูลรายชื่อผู้ใช้งานระบบ
    res.send({result:userData})
})

app.post('/api/register',(req, res)=>{ // POST ใช้สำหรับสร้างข้อมูลผู้ใช้งานระบบ
    console.log('เรียก ',req.body)
    res.send({ result: req.body })
})

app.post('/api/login',(req, res)=>{ // POST ใช้สำหรับตรวจสอบผู้ใช้งานระบบ
    res.send({ result: req.body })
})

// รันด้วย port 5174
app.listen(port, ()=>{
    console.log('listening in port ',port)
})

