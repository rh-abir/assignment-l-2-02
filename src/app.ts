import express, { Application, Request, Response } from 'express'

import cors from 'cors'
import { userRoutes } from './modules/user/user.route'

const app: Application = express()

// parsers
app.use(express.json())
app.use(cors())

app.use('/api/users', userRoutes)

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    staus: true,
    message: 'wellcome to the project',
  })
})

export default app
