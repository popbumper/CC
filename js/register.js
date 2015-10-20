var db;
var dbCreated = false;

var scroll = new iScroll('wrapper', {
 vScrollbar : false,
 hScrollbar : false,
 hScroll : false
});
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {

 var fname = document.getElementById("fname").value;
 var lname = document.getElementById("lname").value;
 var age = document.getElementById("age").value;
 var username = document.getElementById("username").value;
 var password = document.getElementById("psw").value;

 db = window.openDatabase("RegistrationDB", "1.0", "Registration", 200000);
 if (dbCreated)
 else
  db.transaction(populateDB, transaction_error, populateDB_success);
}

function populateDB(tx) {
 tx.executeSql('DROP TABLE IF EXISTS Registration');
 var sql = "CREATE TABLE IF NOT EXISTS Registration ( "
   + "firstName VARCHAR(50), " + "lastName VARCHAR(50), "
   + "age INTEGER, " + "username VARCHAR(50), "
   + "password VARCHAR(200))";
 tx.executeSql(sql);
 var fname = document.getElementById("fname").value;
 var lname =  document.getElementById("lname").value;
 var age = document.getElementById("age").value;
 var uname =document.getElementById("username").value;
 var pwrd = document.getElementById("psw").value;
 tx.executeSql("INSERT INTO Registration (firstname,lastname,age,username,password) VALUES ('"+ fname +"','"+ lname +"' , "+ age+", '"+ uname +"','"+ pwrd +"' )");

}

function transaction_error(tx, error) {
 alert("Database Error: " + error);
}

function populateDB_success() {
 dbCreated = true;

 // where you want to move
 alert("Successfully inserted");
  window.location="file:///android_asset/www/main.html";
}