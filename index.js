const express = require("express")
const cors = require("cors")

const app = express();

app.use(express.urlencoded({extended : true}))
app.use(express.jason())

app.use(cors())

app.listen(3000,(err) =>{
    if(err) console.log("an error ocurred")
    console.log("sercer running on port 3000 ")
})