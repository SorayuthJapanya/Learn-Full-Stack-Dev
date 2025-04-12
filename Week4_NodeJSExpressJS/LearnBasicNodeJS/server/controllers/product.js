
const Product = require('../Models/Product')
const fs = require('fs');
const path = require('path');


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
        const { id } = req.params;
        const updateData = { ...req.body };
        console.log(updateData)

        const product = await Product.findById(id).exec();
        // console.log(product)
        if (!product) {
            return res.status(404).send('Product not found');
        }
        
        if (req.file) {
            if (req.body.fileold) {
                const oldPath = path.join(__dirname, '../uploads', req.body.fileold);
                fs.unlink(oldPath, (err) => {
                    if (err) {
                        console.error('Error deleting old file:', err);
                    } else {
                        console.log('Old file deleted:', oldPath);
                    }
                });
            }
            updateData.file = req.file.filename
        }

        const productUpdated = await Product
            .findOneAndUpdate({ _id: id }, updateData, { new: true })
            .exec();
        res.send(productUpdated)
        console.log('Received file:', req.file);
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

        if (!productRemove) {
            return res.status(404).send('Product not found');
        }

        if (productRemove.file) {
            const filePath = path.join(__dirname, '../uploads', productRemove.file);
            if (fs.existsSync(filePath)) {
                fs.unlink(filePath, (error) => {
                    if (error) {
                        console.error('File deletion error:', error);
                        return res.status(500).send('Error deleting file');
                    }
                    return res.send('Deleted Successfully!');
                });
            } else {
                console.warn('File not found, but product deleted:', filePath);
                return res.send('Deleted Successfully! (File not found)');
            }
        } else {
            return res.send('Deleted Successfully! (No file)');
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('Server Error')
    }
}