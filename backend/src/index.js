import express from 'express'
import router from './routes/productRoute'
import cors from 'cors'
import descRoute from './routes/descRoute'
import addProductRoute from './routes/addProductRoute'

const app = express()
const PORT = process.env.PORT || 8080

app.use(cors('*'))

app.use('/api', router)
app.use('/api', descRoute)
app.use('/api', addProductRoute)

app.listen(PORT, console.log(`listening on port ${PORT}`))
