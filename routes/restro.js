const express = require('express');
const router=express.Router();

let foodItems=[
    {
        'id':1,
        'name':'momo'
    },
    {
        'id':2,
        'name':'chowmein'
    }
];
router.get('/',(req,res)=>{
    res.send(foodItems);
});
// router.post();
// router.put();
// router.delete();
module.exports=router;