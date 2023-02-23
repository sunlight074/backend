const con = require('../../connection')

const handlerListUser = (_req , res) => {
    try{
        con.query(`SELECT * FROM USER`,     
        (err , result , _fields) => {
            if(err) {       
                  return res.status(400).send();
            }

            return res.status(200).json({ result : result})
        })
    }catch(err){
        return res.status(500).send();
    }
}

module.exports = handlerListUser