const express = require("express")
const app = express()
const hbs = require("hbs")

app.use(express.static("public"))
app.set("view engine", "hbs")

hbs.registerPartials(__dirname+"/views/partials")
app.listen(3000);
app.get("/",(req, res)=>{

    res.render("home")
})
app.get("/contacto",(req, res)=>{
    res.render("contacto")
})