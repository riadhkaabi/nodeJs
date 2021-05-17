const express = require('express')
const app=express()
const router = express.Router()
app.use(express.json)


router.get('/',(req,res) => {
    res.json({"message": ok})
})

