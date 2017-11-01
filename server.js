const path = require('path');
const fs = require('fs');
// const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();

const products = require('./products');

const dist = path.join(__dirname, 'dist');
const logger = 'logger.log';

app.use((req,resp, next) => {
    const data = `Address: ${req.ip}; Time: ${new Date().toLocaleString()}; Method: ${req.method}; URL: ${req.url}\n`;
    fs.appendFile(logger, data, (err) => {
        if(err) {
            console.log(err);
        }
        console.log('Data in logger were written!');
    });
    next();
});

app.use((req, resp, next) => {
    console.log('Middleware functions were done!');
    next();
});

app.use('/products', products);
app.use(express.static(dist));
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(cookieParser());
app.all('/', (req, resp) => {
    console.log('Welcome to main Page!');
    resp.sendFile('index.html');
});

app.listen(8080, () => {
    console.log('Server started on port 8080!');
});

// resp.cookie('credentials', {username: 'Alex', password: '0000', role: 'user'}, {httpOnly: true, maxAge: 2000});
// resp.clearCookie('credentials');
// /*localStorage within req-resp*/
// resp.locals.role = 'admin';