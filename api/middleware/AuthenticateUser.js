// Authentication
const { sign, verify } = require('jsonwebtoken')
require('dotenv')

function createToken(user) {
    return sign({
        emailAdd: user.emailAdd,
        userPass: user.userPass
    },
        process.env, SECRET_KEY,
        {
            expiresIn: '1h'
        }
    )
}


module.exports = {
    createToken
}