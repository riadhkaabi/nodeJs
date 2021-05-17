const express = require('express')
const router = express.Router()
const app = express()
app.use(express.json)


router.get('/',(req,res) => {
   return res.json({"message": ok})
})

module.exports = router