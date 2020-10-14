const pool = require('../postgres/pool')



module.exports = {


    addClient:async function(client){
        console.log("addClient() fired!")
        console.log(client)
        let newUser = await pool.query("INSERT INTO clients(username,password,interest) VALUES($1,$2,$3)",[client.username,client.password,client.topic])
        console.log(newUser)
    },

    getClients:async function(){
        let clients = await pool.query("SELECT * FROM clients")
        // console.log(clients.rows)
        return clients.rows
    }
}