import express from 'express'
import 'dotenv/config'
import v1Router from './routes/v1/index'
import { prismaClient } from 'store/client'
import config from './config/config'

const app = express()

app.get('/', (req, res) => {
    res.send('hi i am stay-up')
})

app.use('/api/v1', v1Router)

app.listen(config.port, () => {
    console.log(`server started at ${config.port}`)
})