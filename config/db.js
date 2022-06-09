const mysql = require('mysql2');
const config = require('./constant.json');
const pool = mysql.createPool({
    host: config.DB_HOST,
    user: config.DB_USER,
    password: config.DB_PASSWORD,
    port: config.DB_PORT,
    database: config.DB_DATABASE
});

pool.getConnection((err) => {
    if(err){
        console.log('error connection', err.stack);
        process.exit(1);
    }
    console.log('connected to db...');
})

const executeQuery = (query, arrayParams) => {
    return new Promise((resolve, reject) => {
        try {
            pool.query(query, arrayParams, (err,data) => {
                if(err){
                    console.log('error executing the query');
                    reject(err);
                }
                resolve(data);
            });
        } catch (error) {
            reject(error);
        }
    });
}

module.exports = { executeQuery };