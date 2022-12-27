const express = require('express');
const app = express();
const fs = require('fs');
const cors = require('cors');

app.use(express.json());
app.use(cors());
//Maybe include public/static at later time 

const translations = require('./routes/translations');
app.use('/translations', translations);

app.listen(process.env.PORT || 8080, () => {
    console.log('Server is listening');
})
