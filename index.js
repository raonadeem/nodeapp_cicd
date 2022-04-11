const express = require('express')
const app = express()
const port = 3000
app.get('/', (req, res) => {
    res.send('Hello from the other side!')
})
app.get('/test', function (req, res) {
    res.send('{ "response": "Hello World" }');
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
module.exports = app;