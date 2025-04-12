
const Product = require('../Models/Product')
const fs = require('fs');


exports.read = async (req, res) => {
    try {
        const id = req.params.id;
        const productRead = await Product.findOne({ _id: id }).exec();
        res.send(productRead);
    } catch (error) {
        console.log(error);
        res.status(500).send('Server Error')
    }
}

exports.list = async (req, res) => {
    try {
        const productList = await Product.find({}).exec();
        res.send(productList);
    } catch (error) {
        console.log(error);
        res.status(500).send('Server Error')
    }
}

exports.create = async (req, res) => {
    try {
        const data = req.body;

        if (req.file) {
            data.file = req.file.filename;
        }
        const producted = await Product(data).save();
        console.log(producted);
        res.send('Create Succesfully!!');
    } catch (error) {
        console.log(error);
        res.status(500).send('Server Error')
    }
}

exports.update = async (req, res) => {
    try {
        const id = req.params.id;
        const productUpdated = await Product
            .findOneAndUpdate({ _id: id }, req.body, { new: true })
            .exec();

        res.send(productUpdated)
    } catch (error) {
        console.log(error);
        res.status(500).send('Server Error')
    }
}

exports.remove = async (req, res) => {
    try {
        const id = req.params.id;
        const productRemove = await Product
            .findOneAndDelete({ _id: id })
            .exec();
        if (productRemove.file) {
            await fs.unlink('./uploads/' + productRemove.file, (error) => {
                if (error) {
                    console.log(error)
                } else {
                    res.send('Deleted Seccesfuly!!')
                }
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('Server Error')
    }
}