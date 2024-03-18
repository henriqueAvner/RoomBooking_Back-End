const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'secretToken';

const generateToken = (payload) => jwt.sign(payload, JWT_SECRET);


const decodeToken = (token) => jwt.verify(token, JWT_SECRET);


module.exports = {
    generateToken,
    decodeToken,
}