const express = require('express')
const fs = require("fs");
const cors = require('cors')

const app = express();

app.use(express.json())
app.use(cors())

const jsonString = fs.readFileSync("./data.json");
const dato = JSON.parse(jsonString)


app.get('/contenido', (req, res)=>{
    res.json(dato.contenido)
})


app.get('/contenido/:id', (req, res)=>{
    const result = req.params.id;
    const data = dato.contenido.find(word => word.id == result )
    
    if(data === undefined)
        return res.status(400).json({message: "No encontrado"})

    res.json(data)
})

const port = process.env.PORT || 4000
app.listen(port, ()=>{
    console.log("Estoy en linea " + port);
})

module.exports = app;