
const express = require('express');
const router = express.Router();

// import controllers
const {
    read,
    list,
    create,
    update,
    remove
} = require('../controllers/product');

// Middleware
const { auth } = require('../Middleware/auth');
const { upload } = require('../Middleware/upload');


// http://localhost:5000/api/product
router.get('/product', list);
router.get('/product/:id', read);
router.post('/product', upload, create);
router.put('/product/:id',upload, update);
router.delete('/product/:id', remove);


module.exports = router;