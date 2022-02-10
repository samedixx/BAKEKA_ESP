const mongoose = require('mongoose');

mongoose
.connect('mongodb+srv://angelopdev:Password@cluster0.rcui5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority') 

.then(() => {console.log('<<< Database is connected >>>')})
.catch((err) => console.log('DB connection failed: ', err.message || err )); 

