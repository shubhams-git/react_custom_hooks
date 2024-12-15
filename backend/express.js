const express = require("express")
const app = express()
const cors = require("cors")
app.use(cors())

app.use(express.json())

const todos = [{
    title:"Todo 1",
    description:"Todo 1 description"
},
{
    title:"Todo 2",
    description:"Todo 2 description"
},
{
    title:"Todo 3",
    description:"Todo 3 description"
},
]

app.get("/", async (req,res)=>{
    return res.send(todos)
})

app.listen(3000, ()=>{console.log("Listening!")})