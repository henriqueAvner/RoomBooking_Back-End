const { roomService } = require("../services")
const findAll = async (req, res) => {

    try {
        const allRooms = await roomService.findAll();
        return res.status(200).json(allRooms);
    } catch (error) {
        console.log(error);
        return res.status(404).json({message: 'Nenhum quarto encontrado'});
    }

};

module.exports = {
    findAll,
}