/*
    1.ดึง list Pokemon ออกมา --> GET
        /pokemon -> list all pokemon http://localhost:3000/pokemon
    2.เพิ่ม list --> POST
        /pokemon -> add pokemon to list
*/
/* -----------------Start Express JS-------------------- */
const express = require("express"); //import library
const app = express(); //create express app
const port = 3000; //port

app.get("/", (req, res) => res.send("Hello World!")); //create end point

app.listen(port, () => console.log(`Example app listening on port ${port}!`)); //เรียกใช้ web ให้ทำงาน , function show on board

/* ------------------Method GET ------------------------*/
app.use(express.json())
class Pokemon {
    constructor(name, type) {
        this.name = name
        this.type = type
        this.id = null
    }
}
let pokemon = []
    pokemon.push(createPokemon('Pikachu', 'Bug')),
    pokemon.push(createPokemon('Arcanine', 'Fire')),
    pokemon.push(createPokemon('Horsea','Water'))

app.get("/pokemon", (req, res) => res.send(pokemon));

/* -----------------Method POST--------------------------*/
app.post('/pokemon', (req, res) => {
    let p = createPokemon(req.body.name, req.body.type)
    pokemon.push(p)
    res.sendStatus(201)
})
function gennewId(num) {
    let newId = num + 1
    return newId
}
function createPokemon(name, type) {
    let p = new Pokemon(name, type)
    p.id = gennewId(pokemon.length)  
    return p
}
