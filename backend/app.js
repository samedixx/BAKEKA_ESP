require('express-async-errors')
require('./db')
const express = require('express')
require('dotenv').config();
const morgan = require('morgan')
const postRouter = require('./routers/post')

const app = express();
app.use(express.json());
app.use('/api/post', postRouter)
app.use(morgan('dev'))
const PORT = process.env.PORT;

app.use((err, req, res, next) => {
    res.status(500).json({error: err.message})
})

app.listen(PORT, () => {
    console.log('Express is listening on port -->' + PORT)
});