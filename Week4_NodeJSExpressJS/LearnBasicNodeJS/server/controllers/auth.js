
const Users = require('../Models/Users');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    try {
        // First CheckUser
        const { name, password, confirmPassword } = req.body;
        
        if (!name || !password || !confirmPassword) {
            return res.status(400).json({
                error: "All fields (name, password, confirmPassword) are required"
            });
        }
        console.log(`Registering: ${name}`);
        // console.log('')

        if (req.body.password != req.body.confirmPassword) {
            return res.status(400).send("Password don't match!!");
        }

        const isUser = await Users.findOne({ name });
        if (isUser) {
            return res.status(400).send('User Already Exists!!');
        }
        // Second Encrypt
        const hashedPassword = await bcrypt.hash(String(password), 10);
        const newUser = new Users({
            name,
            password: hashedPassword,
        });

        // Third Save
        await newUser.save();
        res.status(201).send('User registered successfully!');
    } catch (error) {
        console.log(error);
        res.status(500).send('Server Error');
    }
}

exports.login = async (req, res) => {
    try {
        // First CheckUser
        const { name, password } = req.body;
        const user = await Users.findOneAndUpdate({ name }, { new: true })
        console.log(user);

        if (user) {
            const isMatch = await bcrypt.compare(String(password), user.password);

            if (!isMatch) {
                return res.status(400).send('Password Invalid!!')
            }

            // Second Payload
            const payload = {
                user: {
                    name: user.name
                }
            }

            // Third Generator Token
            jwt.sign(payload, 'jwtsecret', { expiresIn: '1d' }, (err, token) => {
                if (err) throw err;
                res.json({ token, payload })
            });

        } else {
            res.status(400).send('User not found!!');
        }
        res.status(201).send('User login successfully!');
    } catch (error) {
        console.log(error);
        res.status(500).send('Server Error');
    }
}