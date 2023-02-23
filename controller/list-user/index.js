const handlerListUser = (req , res) => {
    // mock ข้อมูล
    const userData = [
        {name:'วาณี1', lastname:'ปุยเจริญ', email:'wanee@gmail.com'},
        {name:'วาณี2', lastname:'ปุยเจริญ', email:'wanee@gmail.com'},
        {name:'วาณี3', lastname:'ปุยเจริญ', email:'wanee@gmail.com'},
        {name:'วาณี4', lastname:'ปุยเจริญ', email:'wanee@gmail.com'},
        {name:'วาณี5', lastname:'ปุยเจริญ', email:'wanee@gmail.com'},
    ]

    res.send({result: userData })
}

module.exports = handlerListUser