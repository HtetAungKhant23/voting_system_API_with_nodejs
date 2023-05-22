const express = require('express');
const voteRoutes = require('./routes/vote');
const bodyparser = require("body-parser")

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(bodyparser.urlencoded({extended: true}))

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Method', 'GET,PUT,POST,PATCH,UPDATE,DELETE');
    res.setHeader('Access-Control-Allow-Header', 'Content-Type, Authorization');
    next();
});

app.use('/vote', voteRoutes);

app.use('/user', voteRoutes);

app.listen(8080, ()=>console.log('server is running!'));