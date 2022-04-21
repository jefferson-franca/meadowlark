/*eslint-disable no-unused-vars*/
const text = require('body-parser/lib/types/text')
/*eslint-enable no-unused-vars*/
const express = require('express')
const expressHandlebars = require('express-handlebars').engine
/*eslint-disable no-unused-vars*/
const sorte = require('./lib/sorte')
/*eslint-enable no-unused-vars*/
const handlers = require('./lib/handlers')
const port =  (process.env.port || 3000)
const app = express()

// configura o view engine Handlebars
app.engine('handlebars',expressHandlebars({
    defaultLayout:'main'
}))
app.set('view engine','handlebars')

// Tirando erro de variaveis não declaradas do eslint
/*eslint no-undef: "error"*/
/*eslint-env node*/

// Servindo o Meddleware stático
app.use(express.static(__dirname + '/public'))
/* -- PEGUEI ESSE CÓDIGO DO SITE STACK OVERFLOW - Deixa como referência para possiveis problemas a frente
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



app.get('/', handlers.home)
//app.get('/',(req,res)=> res.render('home'))

app.get('/about', handlers.about)
  //  const randomSorte = sorte[Math.floor(Math.random()*sorte.length)]
  //  res.render('about',{Sorteio:sorte.pegaSorte})
  
// página 404 personalizada
app.use(handlers.notFound)

// página 500 personalizada
app.use(handlers.serverError)
/*console.error(err.message)
res.status(500)
res.render('500')
})*/

/*const sorte = [
    "Conquiste seus medos ou eles vão conquistar você.",
    "Os rios precisam de nascentes.",
    "Não tema o que você não conhece.",
    "Você terá uma agradável surpresa.",
    "Sempre que possível, seja simples.",
]
*/
//app.listen(port,()=> console.log('Express started on http://localhost:${port};'+ 'press Ctrl-C to terminate.'))

if(require.main === module){
    app.listen(port, () =>{console.log('Express started on http://localhost:'+ port + ' press Ctrl-C to terminate.')
    })
}else{
    module.exports = app
}