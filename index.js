const express = require('express')
const app = express()
const path    = require("path");
const port = process.env.PORT || 8080;
const firstName = process.env.FIRST_NAME || "stranger";
const lastName = process.env.LAST_NAME || "stranger";
const url = process.env.URL;
app.set('view engine', 'pug')

app.get('/', (req, res) =>
    res.render('index',{img:url, firstname:firstName, lastname: lastName, title:'hey', message : 'everything is awesome'}))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))