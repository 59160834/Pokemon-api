const express = require('express')
const router = express.Router()
const pokemon = require('./pokemon')

// class Pokemon {
//     constructor(name, type) {
//         this.name = name
//         this.type = type
//         this.type2 = null
//         this.id = null
//     }
// }
// let pokemon = []
//     pokemon.push(createPokemon('Pikachu', 'Bug')),
//     pokemon.push(createPokemon('Arcanine', 'Fire')),
//     pokemon.push(createPokemon('Horsea','Water'))

// function createPokemon(name, type) {
//         let p = new Pokemon(name, type)
//         p.id = gennewId(pokemon.length)  
//         return p
// }
// function gennewId(num) {
//         let newId = num + 1
//         return newId
//     }

function issufficientParam(v){
    return v !== null && v !== '' && v !== undefined
}
    
// function isPokemonExsited(id)
// {
//     return pokemon[id-1] !== undefined && pokemon[id-1] !== null
// }


/* ------------------Method GET ------------------------*/

router.get("/pokemon", (req, res) => res.send(pokemon.getPokemon()));
/* -----------------Method POST--------------------------*/
router.post('/pokemon', (req, res) => {
    if(!issufficientParam(req.body.name) || !issufficientParam(req.body.type)){
        res.status(400).send({error:'Insufficient parameters: name and type are required parameter'})
        return
    }//client error case >> http status code 400 up 
    
    // let p = pokemon.createPokemon(req.body.name, req.body.type)
    let success = pokemon.savePokemon(req.body.name, req.body.type)
    if(!success) {
        res.status(400).send({ error: 'Create pokemon is unsuccessfully: invaild parameter'})
        return
    }
    // pokemon.save(p)
    // pokemon.push(p)
    res.sendStatus(201)
})

/*--------------------------------------------------------*/
            /*GET http://localhost:3000/pokemon/1
            input = ID >> return pokemon detail*/

router.get("/pokemon/:id", (req, res) => {
    if(!issufficientParam(req.params.id))
    {
        res.status(400).send({error: 'Insufficient parameters: id is required parameter'})
        return
    }

    let id = req.params.id
    let p = pokemon.getPokemon()[id -1]

    if(p === undefined || p === null)
    {
        res.status(400).send({error: 'The pokemon could not be found'})
        return

    }
    res.send(p)
})
/*-----------------Method PUT------------------*/
                /*Add type2*/ 
router.put('/pokemon/:id', (req,res) => {
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
    let p = pokemon.getPokemonID(id)
    if(p === undefined)
    {
        res.status(400).send({error: 'Cannot update pokemon: Pokemon is not found'})
        return
    }//Only for this case

    p.type2 = req.body.type2
    // res.send(p)

    let success = pokemon.update(p)
    if(!success){
        res.status(500).send({error: 'Update pokemon is unsuccessfully: id is required parameter'})
        return
    }
    // pokemon[id-1] = p //update & save in index
    res.sendStatus(200) 
    // status 204 >> PUT POST DELETE >> but notsure use 200 
})

/*-----------------Method Delete------------------*/
router.delete('/pokemon/:id', (req, res) => { // size ของ array ไม่ลด >> ID จะไม่ซ้ำ
    if(!issufficientParam(req.params.id))
    {
        res.status(400).send({error:'Insufficient parameters: id is required parameter'})
        return 
    }
    let id = req.params.id
    // let p = pokemon[id-1]
    if(!pokemon.isPokemonExsited(id)){
        res.status(400).send({error: 'Cannot delete pokemon: Pokemon is not found'})
        return
    }
    delete pokemon[id-1]
    res.sendStatus(204) // delete operation is success
}) 

module.exports = router

