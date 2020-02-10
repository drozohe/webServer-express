const express = require('express')
const app = express()
 
// const materialize = require('materialize-css');

const hbs = require('hbs')

// hbs.registerPartials(__dirname + "/views")
hbs.registerPartials(__dirname + "/views/partials")


app.use(express.static(__dirname + '/public'))

app.set('view engine','hbs')

app.get('/', (req, res)=> {
   res.render('home',{
    nombre:'Diego Rozo',
    CardTitle:'Web server'
   })
})

app.get('/home', (req, res)=> {
    res.render('home',{
     nombre:'Diego Rozo',
     CardTitle:'Web server'
    })
 })
 

app.get('/about', (req, res)=> {
    res.render('about',{
     nombre:'Diego Rozo',
     CardTitle:'Web server'
    })
 })
 
app.listen(3000,()=>{
    console.log(`Escuchando puerto 3000 ${ app }`);
})