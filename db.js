import mysql from "mysql";

function dbBaglan(){
    const connection = mysql.createConnection({
        host     : 'cloud.trxyazilim.com',
        user     : 'expressTodo',
        password : 'qc7B5i17_',
        database : 'expressTodo'
    });

     connection.connect();
     return connection;
}
export default dbBaglan;
