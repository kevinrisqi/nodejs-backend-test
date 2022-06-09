const productRepo = require('../repository/productRepo');

const getProduct = async (req, res) => {
    try {
        let result = await productRepo.find();
        res.send(200, result);
    } catch (error) {
        res.send(400, error);
    }
}

module.exports = {
    getProduct,
}