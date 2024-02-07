const httpMap = {
    SUCCESS: 200,
    CREATED: 201,
    NOT_FOUND: 404,
    UNAUTHORIZED: 401,
    BAD_REQUEST: 400,
    NO_CONTENT: 204,
};


const statusHttp = (status) => httpMap[status] || 500;

module.exports = statusHttp;