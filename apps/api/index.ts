import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.send('hi i am stay-up')
})

app.post('/website', (req, res) => {

})

app.post('/status/:websiteId', (req, res) => {

})

app.listen(3000)