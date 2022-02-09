const express = require('express')
require('dotenv').config();

const postRouter = require('./routers/post')

const PORT = process.env.PORT;

const app = express();

app.use('/api/post', postRouter)

app.listen(PORT, () => {
    console.log('Express is listening on port -->' + PORT)
});