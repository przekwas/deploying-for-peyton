const path = require('path');
const express = require('express');

const app = express();

app.use(express.static(path.join(__dirname, '../public')));

let port = process.env.PORT || '3000';
app.listen(port, () => {
    console.log(`App listening on ${port}!`);
});