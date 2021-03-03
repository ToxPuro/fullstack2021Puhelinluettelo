const mongoose = require('mongoose')


const password = process.argv[2]

const url = `mongodb+srv://ToukoPuro:${password}@cluster0.9ftzk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
console.log(url)

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
const personSchema = new mongoose.Schema({
  name: String,
  number: String
})



Person = mongoose.model('Person', personSchema)

if(!process.argv[3]){
    Person.find({})
    .then(persons => {
        console.log('phonebook:')
        persons.forEach(person=>{
            console.log(`${person.name} ${person.number}`)
        })
        mongoose.connection.close()
    })
}
else{
    const person = new Person({
        name: process.argv[3],
        number: process.argv[4]
    })
    person.save()
    .then(response =>{
        console.log(`added ${process.argv[3]} ${process.argv[4]} to phonebook`)
        mongoose.connection.close()
    })
}
