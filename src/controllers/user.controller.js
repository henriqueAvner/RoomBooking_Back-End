const { userService } = require("../services")

const findaAll = async (req, res) => {
    try {
        const findAll = await userService.findAll();
        return res.status(200).json(findAll);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: 'Ocorreu um erro' });
    }
};

module.exports = {
    findaAll,
}