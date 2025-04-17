
const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer();

const {
    register,
    login
} = require('../controllers/auth')


// http://localhost:5000/api/register
router.post('/register', upload.none(), register);
router.post('/login', upload.none(), login);

module.exports = router;