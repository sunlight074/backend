const express = require('express') // ไลบรารี่สำหรับทำ api
const cors = require('cors') // ไลบรารี่สำหรับกำหนดการเชื่อมต่อ api
const handlerRegister = require('./controller/register')
const handlerLogin = require('./controller/login')
const handlerListUser = require('./controller/list-user')

const con = require('./connection')  // เรียก con จากไฟล์ connection.js
const app = express() // เรียกใช้งานฟังก์ชั้นสำหรับการสร้าง api
const port = 5174 // ประกาศ port

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
})

//ให้สามารถอ่านข้อมูลประเภท json ได้
app.use(express.json());

//อนุญาตทุกแอป
app.use(cors(corsOption))

app.get('/api/list-user',handlerListUser)// get ใช้สำหรับดึงข้อมูลรายชื่อผู้ใช้งานระบบ

app.post('/api/register',handlerRegister) // POST ใช้สำหรับสร้างข้อมูลผู้ใช้งานระบบ

app.post('/api/login', handlerLogin) // POST ใช้สำหรับตรวจสอบผู้ใช้งานระบบ

// รันด้วย port 5174
app.listen(port, ()=>{
    console.log('listening in port ',port)
})

