import express, { Application, Request, Response } from 'express'

import cors from 'cors'

const app: Application = express()

// parsers
app.use(express.json())
app.use(cors())

app.use('/api/users')

app.get('/', (req: Request, res: Response) => {
  res.send('thisl  text')
})

export default app
