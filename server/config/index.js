const mysql = require('mysql')
const db = mysql.createConnection({
    connectionLimit : 100,
    host : 'remotemysql.com',
    user : '8nRGnKt8lL',
    password : 'OX26DADPXe',
    database : '8nRGnKt8lL'
})


db.connect(function(error){
    if(error){
        console.log(error);
    }else{
        console.log('connected as ' + db.threadId);
    }
})

module.exports = db;
