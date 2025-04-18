
const jwt = require('jsonwebtoken');
const Users = require('../Models/Users')

exports.auth = async (req, res, next) => {
    try {
        const token = req.headers["authtoken"];

        if (!token) {
            return res.status(400).send('No Token!!')
        }
        const decoded = jwt.verify(token, 'jwtsecret')
        req.user = decoded.user;
        next();

    } catch (error) {
        console.log(error);
        res.status(500).send('Token Invalid!!')
    }
}

exports.adminCheck = async (req, res, next) => {
    try {
        const userAdmin = await Users.findOne({ name: req.user.name }).select("-password").exec()

        if (userAdmin.role !== 'ADMIN') {
            res.status(403).send("Admin Access Denied")
        } else {
            next()
        }

    } catch (error) {
        console.log(error)
        res.status(403).send("Admin Access Denied!!")
    }
}