const express = require("express")
const router = express.Router()
const User = require("../models/User")
const { body, validationResult } = require('express-validator');
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

// save the secret key later in .env file
const SECRET_KEY = "$&DG6&6W8%9&9H@F$W&FWJO"

// signup
router.post("/signup",[
    body('name',"name must be more than 2 characters").isLength({ min: 2 }),
    body('location',"enter proper location").isLength({ min: 2 }),
    body('email',"Invalid email or password").isEmail(),
    body('password',"Invalid email or password").isLength({ min: 5 })
    ],async (req,resp)=>{
    
    try {
        
        const userFind =await User.findOne({email:req.body.email})
        
        if(userFind) return resp.status(404).json({error:"User already exits",success:false})
        
        const salt = await bcrypt.genSalt(10)
        const password =await bcrypt.hash(req.body.password,salt)
        
        const user =await User.create({
            name:req.body.name,
            location:req.body.location,
            email:req.body.email,
            password:password
        })
        
        
        await user.save()
        resp.status(201).json({user,success:true})
        
    } catch (error) {
        resp.status(404).json({error,success:false})
    }
})

// login 
router.post("/login",[
body('email',"Invalid email or password").isEmail(),
body('password',"Invalid email or password").isLength({ min: 5 })
],async (req,resp)=>{

    try {
        
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return resp.status(400).json({ errors: errors.array() });
        }

        const {email,password} = req.body
        
        const findUser = await User.findOne({email})
        
        if(!findUser) return resp.status(404).json({error:"User dosen't exits",success:false})
       
        const passwordCompare = await bcrypt.compare(password,findUser.password)

        if(!passwordCompare) return resp.status(404).json({error:"Invalid Password",success:false}) 
        
       

        const data = {
            user:{
                id:findUser._id
            }
        }

        const authToken = jwt.sign(data,SECRET_KEY)

        resp.status(200).send({findUser,success:true,authToken})
        
    } catch (error) {
        resp.status(404).json({error,success:false})
    }

})
    

module.exports = router