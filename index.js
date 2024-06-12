const express = require('express')
const path = require('path')
const app = express()
app.set('view engine', 'ejs')

// Definindo os arquivos estáticos
//const staticFolder = path.join(__dirname, 'views')
//const expressStatic = express.static(staticFolder)
//app.use(expressStatic) OU
// ( se não usar algum template engine ai é necessário
//app.use(express.static(path.join(__dirname, 'views')))


// Definindo arquivos púplicos
//const publicFolder = path.join(__dirname, 'public')
//const expressPublic = express.static(publicFolder)
//app.use(expressPublic)  OU
 
app.use(express.static(path.join(__dirname, 'public')))



//Rotas
app.get('/', (req, res) =>  {
    res.render('index')
})

app.get('/posts', (req, res) => {
    res.render('posts')
})



//404 Error ( Not Found )
app.use((req,res) => {
    res.send( ' ERROR 404 - Página não encontrada !') 
})



// Executando o Servidor 
const port = process.env.PORT || 8080
app.listen( port, () => console.log(`Server is listening on port ${port}`))



