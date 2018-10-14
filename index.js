const express = require('express')
const app = express()
const port = process.env.PORT || 8080;
const firstName = process.env.FIRST_NAME || "stranger";
const lastName = process.env.LAST_NAME || "stranger";

app.get('/', (req, res) => res.send('Hello !' + firstName + ' ' + lastName))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
