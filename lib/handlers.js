// Tirando erro de variaveis não declaradas do eslint
/*eslint no-undef: "error"*/
/*eslint-env node*/

const sorte = require('./sorte')

exports.home = (req,res)=> res.render('home')
exports.about = (req,res)=> res.render('about',{Sorteio:sorte.pegaSorte()})
exports.notFound = (req,res)=> res.render('404')
/*eslint-disable no-unused-vars*/
exports.serverError = (err,req,res,next)=> res.render('500')
/*eslint-enable no-unused-vars*/
