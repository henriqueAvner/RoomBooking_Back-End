const { decodeToken } = require("../utils/JWT");

const validateToken = (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).json({ message: 'unauthorized' });
    }
    const [, token] = authorization.split(' ');
    try {
        const decodedData = decodeToken(token);
        res.locals.id = decodedData.id;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'unauthorized' });
    }
}

module.exports = {
    validateToken,
}