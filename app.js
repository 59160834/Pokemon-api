//https://pokemon.fandom.com/wiki/List_of_Pok%C3%A9mon
/*
    1.ดึง list Pokemon ออกมา --> GET
        /pokemon -> list all pokemon http://localhost:3000/pokemon
    2.เพิ่ม list --> POST
        /pokemon -> add pokemon to list
*/
 
/* -----------------Start Express JS-------------------- */
const express = require("express"); //import library
// const Request = require('request');
const pokemonsRouter = require('./pokemons/router')
const app = express(); //create express app
//const port = 3000; //port
app.use(express.json())
app.use(pokemonsRouter)


//Root Path
app.get("/", (req, res) => res.send({message: 'Hello World'})); //create end point


/* ------------------Method GET ------------------------*/

/*class Pokemon {
    constructor(name, type) {
        this.name = name
        this.type = type
        this.type2 = null
        this.id = null
    }
}
let pokemon = []
    pokemon.push(createPokemon('Pikachu', 'Bug')),
    pokemon.push(createPokemon('Arcanine', 'Fire')),
    pokemon.push(createPokemon('Horsea','Water'))

app.get("/pokemons", (req, res) => res.send(pokemon));

/* -----------------Method POST--------------------------
app.post('/pokemons', (req, res) => {
    if(!issufficientParam(req.body.name) || !issufficientParam(req.body.type)){
        res.status(400).send({error:'Insufficient parameters: name and type are required parameter'})
        return
    }//client error case >> http status code 400 up 
    
    let p = createPokemon(req.body.name, req.body.type)
    pokemon.push(p)
    res.sendStatus(201)
})*/
/*function issufficientParam(v){
    return v !== null && v !== '' && v !== undefined
}

function isPokemonExsited(id)
{
    return pokemon[id-1] !== undefined && pokemon[id-1] !== null
}
function gennewId(num) {
    let newId = num + 1
    return newId
}
// function createPokemon(name, type) {
//     let p = new Pokemon(name, type)
//     p.id = gennewId(pokemon.length)  
//     return p
// }
function mockPokemon(){
    pokemon.push(createPokemon('Pikachu', 'Bug')),     
    pokemon.push(createPokemon('Arcanine', 'Fire')),
    pokemon.push(createPokemon('Horsea','Water'))
}
/*--------------------------------------------------------*/
// GET http://localhost:3000/pokemon/1
//input = ID >> return pokemon detail
/*app.get("/pokemon/:id", (req, res) => {
    if(!issufficientParam(req.params.id))
    {
        res.status(400).send({error: 'Insufficient parameters: id is required parameter'})
        return
    }

    let id = req.params.id
    let p = pokemon[id -1]

    if(p === undefined || p === null)
    {
        res.status(400).send({error: 'The pokemon could not be found'})
        return

    }
    //let p = pokemon[0]
    res.send(p)
})
/*-----------------Method PUT------------------*/
//Add type2 
/*app.put('/pokemon/:id', (req,res) => {
    //check ว่ามี ID นี้มั้ย && มี type2 มั้ยที่ส่งมา
    if(!issufficientParam(req.body.type2)) //but not type2 result = false 
    {
        res.status(400).send({error:'Insufficient parameters: type2 is required parameter'})
        return
    }
    if(!issufficientParam(req.params.id))
    {
        res.status(400).send({error:'Insufficient parameters: id is required parameter'})
        return
    }
    let id = req.params.id

    //Check input No. pokemon
    let p = pokemon[id -1]
    if(p === undefined)
    {
        res.status(400).send({error: 'Cannot update pokemon: Pokemon is not found'})
        return
    }//Only for this case

    p.type2 = req.body.type2
    // res.send(p)

    pokemon[id-1] = p //update & save in index
    res.sendStatus(200) 
    // status 204 >> PUT POST DELETE >> but notsure use 200 
})

/*-----------------Method Delete------------------*/
/*app.delete('/pokemon/:id', (req, res) => { // size ของ array ไม่ลด >> ID จะไม่ซ้ำ
    if(!issufficientParam(req.params.id))
    {
        res.status(400).send({error:'Insufficient parameters: id is required parameter'})
        return 
    }
    let id = req.params.id
    // let p = pokemon[id-1]
    if(!isPokemonExsited(id)){
        res.status(400).send({error: 'Cannot delete pokemon: Pokemon is not found'})
        return
    }
    delete pokemon[id-1]
    res.sendStatus(204) // delete operation is success
}) */

module.exports = app //อ้างอิงถึง module
//app.listen(port, () => console.log(`Example app listening on port ${port}!`)); //การstart server เรียกใช้ web ให้ทำงาน , function show on board

/*----------การแยก Logic-------------*/

