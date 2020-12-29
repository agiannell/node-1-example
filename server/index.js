const express = require('express');
const ctrl = require('./controller');
const app = express();

//req-info about request
//res-info about your response that you send back
app.get('/', (req, res) => {
    res.send('Home Screen')
})

app.get('/api/test', (req, res) => {
    res.send('Is this what you are looking for?')
})

app.get('/api/reject', (req, res) => {
    res.status(400).send('this was a no no')
})

app.get('/api/users', ctrl.getAllUsers)
app.get('/api/user/:id', ctrl.getSingleUser)

// generally use ports 3001 - 8000
app.listen(3456, () => console.log('listening on port 3456'))
