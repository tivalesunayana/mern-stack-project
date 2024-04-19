import express from "express"

const app= express()
const port = 3000 || 8080
app.listen(()=>{
    console.log(`listening on port ${port}`)
})