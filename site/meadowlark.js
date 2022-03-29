const text = require('body-parser/lib/types/text')
const express = require('express')
const expressHandlebars = require('express-handlebars').engine
const sorte = require('../lib/sorte')
const app = express()
// configura o view engine Handlebars
app.engine('handlebars',expressHandlebars({
    defaultLayout:'main'
}))
app.set('view engine','handlebars')

// Servindo o Meddleware stático
app.use(express.static(__dirname + '/public'))
/* -- PEGUEI ESSE CÓDIGO DO SITE STACK OVERFLOW - Deixa como referência para possiveis problemas a freten
const express = require('express');
const { engine } = require ('express-handlebars');

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set("views", "./views");

app.get('/', (req, res) => {
    res.render('home');
});
*/

const port = process.env.PORT || 3000

app.get('/',(req,res)=> res.render('home'))

app.get('/about',(req,res)=>{
  //  const randomSorte = sorte[Math.floor(Math.random()*sorte.length)]
    res.render('about',{Sorteio:sorte.pegaSorte})
})
// página 404 personalizada
app.use((req,res)=>{
    res.status(404)
    res.render('404')
})
// página 500 personalizada
app.use((err,req,res,next)=>{
console.error(err.message)
res.status(500)
res.render('500')
})

/*const sorte = [
    "Conquiste seus medos ou eles vão conquistar você.",
    "Os rios precisam de nascentes.",
    "Não tema o que você não conhece.",
    "Você terá uma agradável surpresa.",
    "Sempre que possível, seja simples.",
]
*/
app.listen(port,()=> console.log(
    'Express started on http://localhost:${port};'+ 'press Ctrl-C to terminate.'))