const express = require('express') //importa o pacote express
const app = express() //funçao express que retorna um objeto com um monte de funçoes que vai ser guardado no app
const port = 3000


app.listen

app.get('/', (req, res) => {
  res.send('Olá Mundo!')
})

app.get('/user', (req, res) => {
    res.send('Raissa Patricio')
  })

app.get('/product', (req, res) => {
res.send('MELANCIA 100 REAIS O KG')
})


app.listen(port, () => {
  console.log(`App de exemplo esta rodando na porta http://localhost:${port}`)
})