const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.status(200).send('Exercício 03 de Tecnologias Web.')
})

app.get('/aplicativo', (req, res) => {
    res.status(200).send('Aplicativo Exemplo!')
})

app.get('/html', (req, res) => {
    res.status(200).sendFile(__dirname + '/index.html')
})

app.post('/imagens', (req, res) => {
    res.status(200).send('Imagem 1 - Imagem 2 - Imagem 3')
})

app.delete('/clientes/:id', (req, res) => {
    const clientId = req.params.id

    if (clientId === undefined)
        return

    res.status(200).send(`Cliente número ${clientId} removido com sucesso.`)
})

app.use((req, res) => {
    res.status(404).send(`A URL solicitada '${req.originalUrl}' não existe.`)
})

app.listen(3000, () => {
    console.log('Aplicação Web rodando na porta 3000!')
})