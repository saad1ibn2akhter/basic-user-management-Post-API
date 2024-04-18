const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

app.use(cors());
app.use(express.json());

const users = [
    { id: 1, name: 'Abul', email: 'abul@gmail.com' },
    { id: 2, name: 'kabul', email: 'kabol@gmail.com' },
    { id: 3, name: 'Tabol', email: 'tabol@gmail.com' },
]

app.get('/', (req, res) => {
    res.send("user management server running succesfully !");
})

app.get('/users', (req, res) => {
    res.send(users);
})

app.post('/users', (req, res) => {
    console.log(req.body);
    console.log('post api hitting from the client side');

    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send(newUser);
})

app.listen(port, (res, req) => {
    console.log(`server running on port ${port}`);
})