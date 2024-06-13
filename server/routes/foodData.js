const {foodData,FoodCategory} = require("../models/Fooditem") 
const express = require("express")
const router = express.Router()


router.post("/",async (req,resp)=>{

    try {
        
        const foodDatas = await foodData.find()
        const Category = await FoodCategory.find()

        resp.status(200).json([{foodDatas,Category}])
        
    } catch (error) {
        resp.status(404).json({error,success:false})
    }


})

module.exports = router