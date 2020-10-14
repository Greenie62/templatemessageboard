const router = require('express').Router();
const pool = require('../../postgres/pool')




router.get("/:collection",async (req,res)=>{
     
        let data = await pool.query(`SELECT * FROM ${req.params.collection}`)
        console.log(data.rows)
        res.json({data:data.rows})
})


router.get("/:collections/:title",async(req,res)=>{

        let data = await pool.query(`SELECT * FROM ${req.params.collections} WHERE username = ($1)`,[req.params.title])

        console.log(data.rows[0])
})


module.exports = router;