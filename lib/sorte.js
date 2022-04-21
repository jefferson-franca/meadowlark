// Tirando erro de variaveis não declaradas do eslint
/*eslint no-undef: "error"*/
/*eslint-env node*/
const sorteBiscoito = [
"Conquiste seus medos ou eles vão conquistar você.",
"Os rios precisam de nascentes.",
"Não tema o que você não conhece.",
"Você terá uma agradável surpresa.",
"Sempre que possível, seja simples.",
]

exports.pegaSorte = () =>{
    const idx = Math.floor(Math.random()*sorteBiscoito.length)
    return sorteBiscoito[idx]
}