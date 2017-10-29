const path = require('path');
const fs = require('fs');
const express = require('express');
const app = express();

const products = require('./products');
app.use('/products', products);

const logger = 'logger.txt';
app.use('/', (req,resp, next) => {
    const data = `Address: ${req.ip}; Time: ${new Date().toLocaleString()}; URL: ${req.url}\n`;
    fs.appendFile(logger, data, (err) => {
        if(err) {
            console.log(err);
        }
        console.log('Data in logger were written!');
    });
    next();
});

app.use('/', (req, resp, next) => {
    console.log('Middleware functions were done!');
    next();
});

app.get('/', express.static(path.join(__dirname, 'dist')));

app.listen(8080, () => {
    console.log('Server started on port 8080!');
});

// resp.cookie('credentials', {username: 'Alex', password: '0000', role: 'user'}, {httpOnly: true, maxAge: 2000});
// resp.clearCookie('credentials');
// /*localStorage within req-resp*/
// resp.locals.role = 'admin';