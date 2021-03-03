require('dotenv').config()
const Person= require('./models/person')
const express = require('express')
const cors=require('cors')
const morgan = require('morgan')
const { response } = require('express')
const { notEqual } = require('assert')
const app = express()

const errorHandler = (error, request, response, next) =>{
    console.log(error.message)
    if(error.name ='CastError'){
        return response.status(400).send({ error: 'malformatted id'})
    }
    next(error)
}

morgan.token('body', (req, res) => JSON.stringify(req.body));
app.use(express.static('build'))
app.use(cors()) 
app.use(express.json())
app.use(morgan('tiny',{
    skip: function (req,res) {return req.method === 'POST'}
}))
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body',{
    skip: function (req,res) { return req.method !== 'POST'}
}))






app.get('/api/persons', (req,res) => {
    Person.find({}).then(persons =>{
        res.json(persons)
    })
})

app.get('/api/info', (req,res) =>{
    Person.find({}).then(persons=>{
        res.send(
            `<p>Phonebook has info for ${persons.length} people </p>
            <p>${Date()}</p>`)
    })
    .catch(error => next(error))

})

app.get('/api/persons/:id', (req,res) =>{
    Person.findById(req.params.id).then(person=>{
        res.json(person)
    })
    })

app.delete('/api/persons/:id', (req,res, next) => {
    Person.findByIdAndRemove(req.params.id).then(result =>{
        res.status(204).end()
    })
    .catch(error => next(error))
})

app.post('/api/persons', (req,res,next) =>{
    if(!req.body.name){
        return res.status(400).json({
            error: 'name missing'
        })
    }
    if(!req.body.number){
        return res.status(400).json({
            error: 'number missing'
        })
    }
    const person = Person({
        name: req.body.name,
        number: req.body.number,
    })
    person.save().then(savedPerson =>{
        res.json(savedPerson)
    })
    .catch(error => next(error))

})

app.put('/api/persons/:id', (req,res,next)=>{
    const person ={
        name: req.body.name,
        number: req.body.number
    }
    Person.findByIdAndUpdate(req.params.id, person, { new: true})
        .then(updatedPerson =>{
            response.json(updatedPerson)
        })
        .catch(error => next(error))
})
const PORT = process.env.PORT
app.listen(PORT,"0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`)
})

app.use(errorHandler)