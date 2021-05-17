const express = require('express')
const router = express.Router()
const app = express()
app.use(express.json)


app.get('/',(req,res) => {
   console.log('api') 
   return res.json({"message": ok})
})

module.exports = router