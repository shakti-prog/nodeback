var express = require('express');
var router = express.Router();
const client = require('../database/databaseps')
client.connect();
/* GET users listing. */
var arr = [];
const query = ()=>{
    
    
}

router.get('/', async (req, resy, next)=> 
{  
    await client.query(`Select * from data`,(err,res)=>{
        if(!err){
            arr = res.rows
            resy.send(arr)
            return;
        }
        else{
            console.log(err);
            resy.send({msg:"Not found"})
        }
    })
   

});




module.exports = router;