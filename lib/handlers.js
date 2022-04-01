const sorte = require('./sorte')

exports.home = (req,res)=> res.render('home')
exports.about = (req,res)=> res.render('about',{Sorteio:sorte.pegaSorte()})
exports.notFound = (req,res)=> res.render('404')
exports.serverError = (err,req,res,next)=> res.render('505')
