export const selectAll = (req,res,db) => {
    const sqlSelcet = 'SELECT * FROM OUTPATIENT;'

    db.query(sqlSelcet,
        
        (err, result) => {
            if(err) {
                console.log(err)
            } else {
                res.send(result)
            }
        }
    )
}