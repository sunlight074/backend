const con = require('../../connection')

const handlerLogin = (req , res) => {
    const {email , password } = req.body

    try{
        con.query(`SELECT * FROM USER WHERE email = '${email}' AND password = '${password}'`,
        (err , result , _fields) => {
            if(err) {
                  return res.status(500).send(); // แสดงว่า database มีปัญหาหรือเรียกว่าลืมรัน database ไม่ก็เชื่อมต่อฐานข้อมุลไม่ติดแต่แรก
            }

            if(result.length === 0){ // แปลว่าไม่มีข้อมูล
                return res.status(400).send();
            }

            return res.status(200).json({result : result})
        })
    }catch(err){
        return res.status(500).send();
    }
}

module.exports = handlerLogin
