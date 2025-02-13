let {readFile, writeFile} = require('fs')

readFile("arquivo.txt", "utf8", (error, texto) => {
if(error) {
    throw error
} else {
    console.log(texto)
}
})

writeFile("arquivo.txt", "texto escrito por writefile", (error) => {

    if(error) {
        throw error
    } else {
        console.log("escreveu com sucesso")
    }
})