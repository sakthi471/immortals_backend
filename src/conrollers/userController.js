const User = require('../models/models');

module.exports.getCategory = async (req, res) => {

    try {

        const category = req.params.category

        const users = await User.find({ category: category })

        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ message: err.message });

    }
}

module.exports.getUserData = async (req, res) => {

    try {
        const id = req.params.id
        const users = await User.findOne({regno: id})
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ message: err.message });

    }
}

module.exports.deleteUser = async (req, res) => {

    try {
        const id = req.params.id
        const users = await User.deleteOne({regno: id})
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ message: err.message });

    }
}

module.exports.updateUser = async (req, res) => {

    const {id}= req.params;
    const { performance } = req.body;

    try {
        const result = await User.updateOne(
            { regno:id},
            { $push: { performance} },

        );

        if (!result) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json(result);

    } catch (err) {
        res.status(500).json({ message: err.message });
    }

}





module.exports.createUserData = async (req, res) => {
    try {

        const { name, regno, dob, category, performance } = req.body;
        const user = new User({
            name,
            regno,
            dob,
            category,
            performance
        });
        await user.save();
        res.status(201).json(user);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

