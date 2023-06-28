const users = require('../utils/users')

module.exports = (req, res) => {
    const { email, password } = req.query;
    let access = false;

    users.forEach((user) => {
        if (users.email === email && user.password === password) {
            access = true;
        }
    })
    return res.json(access)
}