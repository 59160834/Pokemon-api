class Pokemon {
    constructor(name, type) {
        this.name = name
        this.type = type
        this.type2 = null
        this.id = null
    }
}
let pokemon = []
mockPokemon()
function mockPokemon(){
    pokemon.push(createPokemon('Pikachu', 'Bug')),     
    pokemon.push(createPokemon('Arcanine', 'Fire')),
    pokemon.push(createPokemon('Horsea','Water'))
}

function savePokemon(name,type){
    let p = createPokemon(name,type)
    pokemons.push(p)
    return true
}

function createPokemon(name, type) {
        let p = new Pokemon(name, type)
        p.id = gennewId(pokemon.length)  
        return p
}
function gennewId(num) {
        let newId = num + 1
        return newId
    }
function isPokemonExsited(id)
{
    return pokemon[id-1] !== undefined && pokemon[id-1] !== null
}
function getPokemon(){
    return pokemon
}
function getPokemonID(id){
    return pokemon[id-1]
}
function update(pokemon){
    pokemon[pokemon.id-1] = pokemon
    return true
}

module.exports.isPokemonExsited = isPokemonExsited //export function
module.exports.savePokemon = createPokemon
module.exports.getPokemon = getPokemon
module.exports.getPokemonID = getPokemonID
module.exports.update = update