const path = require('path');
const express = require('express');
const router = express.Router();

router.route('/')
    .get((req, resp) => {
        console.log(path.join(req.baseUrl, req.url));
        resp.status(200)
            .send('<h1>Hello with GET method!</h1>');
    })
    .post((req, resp) => {
        let reqUrl = path.join(req.baseUrl, req.url);
        console.log(reqUrl);
        resp.location(reqUrl + 5)
            .status(201)
            .send('<h1>Hello with POST method!</h1>');
    });

router.route('/:id')
    .get((req, resp) => {
        console.log(path.join(req.baseUrl, req.url));
        resp.status(200)
            .send(`<h1>Hello with GET method plus id = ${req.params.id}!</h1>`);
    })
    .put((req, resp) => {
        console.log(path.join(req.baseUrl, req.url));
        resp.status(200)
            .send(`<h1>Hello with PUT method plus id = ${req.params.id}!</h1>`);
    })
    .delete((req, resp) => {
        console.log(path.join(req.baseUrl, req.url));
        resp.status(204)
            .end();
    })
    .patch((req, resp) => {
        console.log(path.join(req.baseUrl, req.url));
        resp.status(200)
            .send(`<h1>Hello with PATCH method plus id = ${req.params.id}!</h1>`);
    });

module.exports = router;