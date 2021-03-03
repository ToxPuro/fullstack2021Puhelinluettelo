const { response } = require('express')
const express = require('express')
const cors=require('cors')
const morgan = require('morgan')
const app = express()

morgan.token('body', (req, res) => JSON.stringify(req.body));
app.use(cors()) 
app.use(express.json())
app.use(morgan('tiny',{
    skip: function (req,res) {return req.method === 'POST'}
}))
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body',{
    skip: function (req,res) { return req.method !== 'POST'}
}))



let persons = [
    {
      id: 1,
      name: "Arto Hellas",
      number: "040-123456",
    },
    {
      id: 2,
      name: "Ada Lovelace",
      number: "39-44-5323523"
    },
    {
      id: 3,
      name: "Dan Abramov",
      number: "12-43-234345"

    },
    {
        id: 4,
        name: "Mary Poppendick",
        number: "39-23-6423122"
    }
  ]


app.get('/api/persons', (req,res) => {
    res.json(persons)
})

app.get('/api/info', (req,res) =>{
    res.send(
    `<p>Phonebook has info for ${persons.length} people </p>
    <p>${Date()}</p>`)
})

app.get('/api/persons/:id', (req,res) =>{
    const id = Number(req.params.id)
    const person = persons.find(person => person.id === id)
    if(person){
        res.json(person)
    } else{
        res.status(404).end()
    }


})

app.delete('/api/persons/:id', (req,res) => {
    const id = Number(req.params.id)
    persons = persons.filter(person => person.id !== id)
    res.status(204).end()
})

app.post('/api/persons', (req,res) =>{
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
    if(persons.find(person => person.name===req.body.name)){
        return res.status(400).json({
            error: 'name must be unique'
        })
    }
    const person = {
        name: req.body.name,
        number: req.body.number,
        id: Math.floor(Math.random()*100000)
    }
    persons=persons.concat(person)
    return res.json(person)

})
const PORT = process.env.PORT || 3001
app.listen(process.env.PORT || 3001)