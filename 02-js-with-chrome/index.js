const express = require('express')
const app = express()
app.use(express.json())

const multiply = (n1, n2) => n1 * n2

app.post('/', async(req, res) => {
  const {n1, n2} = req.body
  const result = multiply(n1, n2)
  res.status(200).send({ result })
})

const PORT = 3000
app.listen(PORT, () => console.log('We are online'))