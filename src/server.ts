import app from './app'
import config from './config'

import mongoose from 'mongoose'

async function server() {
  try {
    await mongoose.connect(config.db_url as string)
    console.log('mongoose connection succefully')

    app.listen(config.port, () => {
      console.log(`Server is runnign on port ${config.port}`)
    })
  } catch (error) {
    console.log(error)
  }
}

server()
