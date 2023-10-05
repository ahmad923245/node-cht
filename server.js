
const express = require('express');

const app = express();
app.use(express.json()); // Use built-in JSON parsing
const PORT = process.env.PORT || 3000


app.get('/', async (req, res, next) => {
    res.send('Hey am running on AWS ec2 ')
});

app.listen(PORT, () => {
    console.log('Server ready');
});