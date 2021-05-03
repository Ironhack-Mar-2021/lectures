const chalk = require('chalk');
const express = require('express')
const app = express()

app.use(express.static('public'));


console.log(
    chalk.blue('Welcome to my node project!! super cool?', typeof express)
)

app.get('/home', (request, response, next) => response.sendFile(__dirname + '/views/home-page.html'));

// cat route:
app.get('/cat', (request, response, next) => response.sendFile(__dirname + '/views/cat-page.html'));





app.listen(process.env.PORT || 5000, () => console.log('Listening to port 5000'))

