const con = require('../../connection')

const handlerRegister = (req , res) => {
    const {email , password , first_name , last_name} = req.body

    try{
        con.query(`INSERT INTO USER (email ,password,first_name ,last_name ) VALUES ('${email}','${password}','${first_name}','${last_name}')`,
        (err , result , fields) => {
            if(err) {
                  return res.status(400).send();
            }

            return res.status(201).json({message : 'successfully created'})
        })
    }catch(err){
        return res.status(500).send();
    }
}

module.exports = handlerRegister