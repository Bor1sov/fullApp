const ROLES = require('../constants/roles');

module.exports = function (roles) {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            res.status(403).send({ error: 'Access denied' });
            return;
        }
        next();
    };
}