
const Product = require('../Models/Product')


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
        console.log(req.body);
        const producted = await Product(req.body).save();
        res.send(producted);
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
            .findOneAndDelete({_id: id})
            .exec();
        res.send(productRemove);
    } catch (error) {
        console.log(error);
        res.status(500).send('Server Error')
    }
}