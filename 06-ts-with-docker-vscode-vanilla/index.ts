debugger
import express, {Request, Response} from 'express'
const app = express()

app.use(express.json())

const multiply = (n1:number, n2: number):number => n1 * n2

app.post('/', async(req:Request, res:Response):Promise<void> => {
  const {n1, n2} = req.body
  const result = multiply(n1, n2)
  res.status(200).send({ result })
})

const PORT:number = 3000
app.listen(PORT, () => console.log('We are online'))