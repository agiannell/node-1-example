let data = require('./data.json');

module.exports = {
    getAllUsers: (req, res) => {
        const {email} = req.query
        if(!email) return res.status(200).send(data)
        const filteredUsers = data.filter(e => e.email.includes(email))
        res.status(200).send(filteredUsers)
    },
    getSingleUser: (req, res) => {
        const {id} = req.params
        console.log(req.params)
        const user = data.find(e => e.id === +id)
        if(!user) return res.sendStatus(404)
        res.status(200).send(user)
    }
}

//// req.body //// req.params //// req.query
// axios.post('http://localhost:3456/users/3?id=3', body)