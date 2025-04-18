
const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer();

const {
    register,
    login,
    currentUser
} = require('../controllers/auth')

// Middleware
const { auth } = require('../Middleware/auth');



// http://localhost:5000/api/register
router.post('/register', upload.none(), register);
router.post('/login', upload.none(), login);
router.post('/current-user', auth, currentUser)

module.exports = router;