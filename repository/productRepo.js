const { executeQuery } = require('../config/db');

const find = async () => {
    const result = await executeQuery('SELECT * FROM product', []);
    // const result = await 'tst';

    console.log(result);
    return result;
}

module.exports = {
    find,
}