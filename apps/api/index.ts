import express from 'express'
import 'dotenv/config'
import v1Router from './routes/v1/index'
import config from './config/config'
import producer from './producer'
import worker from './worker'

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('hi i am stay-up')
})

app.use('/api/v1', v1Router)

producer()
  .then((d) => {
    console.log("Producers are init");
  })
  .catch((error) => {
    console.error("Producer initialization failed:", error);
  });

worker()
  .then(d => {
    console.log('Wokers are init');
  })
  .catch(e => {
    console.error("Worker initialization failed:", e);
  })

app.listen(config.port, () => {
    console.log(`server started at ${config.port}`)
})