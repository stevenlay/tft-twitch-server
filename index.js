const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({hi: 'there'});
})

const PORT = process.env.PORT || 8888;
app.listen(PORT);