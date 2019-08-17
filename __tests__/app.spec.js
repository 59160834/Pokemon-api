//ต้องหาว่าAPIที่เราจะเรียกมีmoduleตัวไหน

const request = require('supertest') 
const chai = require('chai')
const app = require('../app') //include app module
chai.should()

describe('Pokamon API', () => { 
    describe('GET /', () => {
        it('should return 200 OK with Hello World', (done) => {
            //test case 
            request(app).get('/')  //create require to app
                .expect(200) // check status code >> 200 ? 
                .end((err , res) => { //check respone >> ปิด & ดึงค่ากลับมาก่อน
                    res.body.should.deep.equal({message: 'Hello World'}) //should >> matcher , check object >> deep(===) 
                    done() //in JS >> มันจะ return //Alway use that end test case
                })
        })
    })
    /*------------------------TEST GET METHOD------------------------------*/

    describe('GET /pokemon/:id', () => {
        it('should return pokemon id , name , type',(done)=>{
            request(app).get('/pokemon/1')
            .expect(200)    
            .end((err, res) => {
                    //res.body.should.deep.equal({name: "Pikachu" , type: "Bug" , type2: null , id: 1})
                    res.body.should.to.be.a('object')
                    res.body.should.have.property('id')
                    res.body.should.have.property('name')
                    res.body.should.have.property('type')
                    done()
            })
        })

        it('should return 400 Bad request',(done) => {
            request(app).get('/pokemon/99')
            .expect(400)
            .end((err,res) => {
                res.body.error.should.equal('The pokemon could not be found')
                done()
            })
        })
    })

    /*------------------------TEST POST METHOD------------------------------*/
    describe('POST /pokemon',() => {
        it('should return 201 Created and have new pokemon',(done) => {
            request(app).post('/pokemon')
                .send({name : 'Gloom' , type : 'Grass'})
                .set('Accept', 'application/json')
                .expect(201,done)
        })
        it('shoild return 400 Bad Request when missed required field',(done) => {
            request(app).post('/pokemon')
                .expect(400)
                .end((err,res) => {
                    res.body.error.should.equal('Insufficient parameters: name and type are required parameter')
                    done()
            })
        })
    })
    /*------------------------TEST PUT METHOD------------------------------*/
    describe('PUT /pokemon/:id',() => {
        it('should return 200 OK and the pokemon has type2',(done) => {
            request(app).put('/pokemon/1')
                .send({type2: 'Water'})
                .set('Accept', 'application/json')
                .expect(200,done)

        })
        it('should return 400 Bad Request when try to update not existed pokemon',(done) => {
            request(app).put('/pokemon/1')
                .expect(400)
                .end((err,res) => {
                    res.body.error.should.equal('Insufficient parameters: type2 is required parameter')
                    done()
            })
        })
    })
    /*------------------------TEST DELETE METHOD------------------------------*/
    // describe('DELETE /pokemon/:id',() => {

    // })
})


// describe('Integration Test', () => {
//     it('GET /pokemon should return list  of pokemon', (done) => {
//         // nock('http://localhost:3000').get('/pokemon')
//         //     .reply(200, [
//         //         {id:1, name:'Unknown', type:'Unknown'}
//         //     ])
//         request('http://localhost:3000').get('/pokemon')
//             .expect(200)
//             .end((err,res) => {
//                 res.body.should.be.a('array')
//                 pokemon = res.body
//                 pokemon.length.should.equal(1)
//                 done()
//             })
//     })
// })
