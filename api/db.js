module.exports =  options = {
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: "",
        database: 'fetchr_db'
    }
}
const knex = require('knex')(options);
