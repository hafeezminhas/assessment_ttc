/**
 * Created by Hafeez Rehman on 08/02/2019.
 */
var http = require('http');
var express = require('express');
var app = express();

app.get('/test', function(req, res) {
    res.send({ message: 'its working..' });
});

app.get('/api/github', function(req, res) {
    res.send({ message: 'its working..' });
    // http.get('https://api.github.com/search/repositories?q=tetris+language:assembly&sort=stars&order=desc', function(err, data) {
    //     res.send({ data: data });
    // });
});

app.listen(3000, (err, port) => {
    console.log('Server running on 3000');
});