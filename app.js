/*
    1.ดึง list Pokemon ออกมา --> GET
        /pokemon -> list all pokemon http://localhost:3000/pokemon
    2.เพิ่ม list --> POST
        /pokemon -> add pokemon to list
*/

const express = require("express"); //import library
const app = express(); //create express app
const port = 3000; //port

app.get("/", (req, res) => res.send("Hello World!")); //create end point

app.listen(port, () => console.log(`Example app listening on port ${port}!`)); //เรียกใช้ web ให้ทำงาน , function show on board

/* -----------------Start Express JS-------------------- */
app.use(express.json())

let pokemon = [
    {name:'Horsea',type:'Water'},
    {name:'Ditto',type:'Normal'},
    {name:'Dratini',type:'Dragon'}
]
app.get("/pokemon", (req, res)  => res.send(pokemon));

/* ------------------Method GET ------------------------*/

app.post('/pokemon',(req,res) => {
    //req -> request, res -> response
    //console.log(req.body)
    //res.send(req.body)  
    pokemon.push(req.body)
    res.sendStatus(201)

})

/* -----------------Method POST--------------------------*/ 