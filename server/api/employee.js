export const insert = (req,res,db) => {
    const code = req.body.code
    const lname = req.body.lname

    const sqlInsert = "INSERT INTO employee VALUES (?, ?);"
    db.query(sqlInsert, [code, lname] ,
        
        (err, result) => {
        if(err) {
            console.log(err)
        } else {
            res.send('hello get 5')
        }
    })
}

