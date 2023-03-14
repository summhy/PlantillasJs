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

app.get("/equipos",(req, res)=>{
    res.render("equipos", {equipos:[{nombre:"Barcelona"},
                                    {nombre:"Inter"},
                                    {nombre:"Liverpool"},
                                    {nombre:"LaJuve"},
                                    {nombre:"Magallanes"},
                                    {nombre:"PSG"}]})
})

app.get("/f1",(req, res)=>{
    res.render("f1", {escuderias:[{nombre:"Red Bull"},
                                    {nombre:"Mercedez"},
                                    {nombre:"Ferrari"},
                                    {nombre:"Alpine"}]})
})