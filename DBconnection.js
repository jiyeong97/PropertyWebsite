/*
 @name: Final Project-Phase2
  @Course Code: SODV1201
  @class: Software Development Diploma program.
  @author: Rajnandani Manocha, Jiyeong Yun
*/

//Connect .db file to js
var sqlite3 = require("sqlite3").verbose();

let db = new sqlite3.Database('./data.db', sqlite3.OPEN_READWRITE, (err)=>{
    if(err){
        return console.error(err.message);
    }
    console.log("I am conneted to the database");
});

module.exports = db;