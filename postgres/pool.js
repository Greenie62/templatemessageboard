const Pool = require('pg').Pool;

const pool = new Pool({
    user:"",
    password:"",
    database:'whatsnewsdb',
    port:5432,
    host:'localhost'
});


module.exports = pool