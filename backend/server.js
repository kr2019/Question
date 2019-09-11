const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const mysql = require("mysql");
// helps extract data from client
const bodyParser = require("body-parser");
// cors is not best to be used on production; will need to do something different on prod
const cors = require("cors");
//test comm
app.use(cors());

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true
  })
);

var RegisterMembers = require("./registerMembers");
app.use("/members", RegisterMembers);

var RegisterClients = require("./registerClients");
app.use("/clients", RegisterClients);

var AssignClients = require("./assignClients");
app.use("/assignClients", AssignClients);

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Artm@y08",
  database: "dev2qa"
});

// console.log that server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

con.connect(err => {
  if (err) {
    console.log("Error connecting to Db");
    return;
  }
  console.log("Connection established");
});

app.get("/members", function(req, res) {
  var sql = "SELECT * FROM members";
  con.query(sql, function(err, rows) {
    if (err) {
      res.json({ Error: true, Message: "Error Execute Sql", err });
    } else {
      // res.json({ "Error": false, "Message": "Success", "Visitors": rows });
      res.json(rows);
    }
  });
});

app.get("/gettherapists", function(req, res) {
  var sql =
    "SELECT member_full_name FROM members WHERE active = 1 AND role = 'therapist' ";
  con.query(sql, function(err, rows) {
    if (err) {
      res.json({ Error: true, Message: "Error Execute Sql", err });
    } else {
      // res.json({ "Error": false, "Message": "Success", "Visitors": rows });
      res.json(rows);
    }
  });
});

app.get("/getclients", function(req, res) {
  var sql = "SELECT client_full_name FROM clients ";
  con.query(sql, function(err, rows) {
    if (err) {
      res.json({ Error: true, Message: "Error Execute Sql", err });
    } else {
      // res.json({ "Error": false, "Message": "Success", "Visitors": rows });
      res.json(rows);
    }
  });
});

app.get("/selectedclients", function(req, res) {
  var sql =
    "SELECT * FROM clients WHERE assi_therapist_full_name = 'Harry Potter'";
  con.query(sql, function(err, rows) {
    if (err) {
      res.json({ Error: true, Message: "Error Execute Sql", err });
    } else {
      // res.json({ "Error": false, "Message": "Success", "Visitors": rows });
      res.json(rows);
    }
  });
});

// keep
app.get("/allclients", function(req, res) {
  var sql = "SELECT * FROM clients";
  con.query(sql, function(err, rows) {
    if (err) {
      res.json({ Error: true, Message: "Error Execute Sql", err });
    } else {
      // res.json({ "Error": false, "Message": "Success", "Visitors": rows });
      res.json(rows);
    }
  });
});

app.get("/clientlist", function(req, res) {
  var sql = "SELECT id, first_name, last_name FROM clients";
  con.query(sql, function(err, rows) {
    if (err) {
      res.json({ Error: true, Message: "Error Execute Sql", err });
    } else {
      // res.json({ "Error": false, "Message": "Success", "Visitors": rows });
      res.json(rows);
    }
  });
});

app.get("/memberInfo", function(req, res) {
  var sql =
    "SELECT title, first_name, last_name, role, email, phone, street_address, city, zip, location, npi, pass, confirm_pass FROM members WHERE first_name = 'Harry'";
  con.query(sql, function(err, rows) {
    if (err) {
      res.json({ Error: true, Message: "Error Execute Sql", err });
    } else {
      // res.json({ "Error": false, "Message": "Success", "Visitors": rows });
      res.json(rows);
    }
  });
});

app.get("/membersTable", function(req, res) {
  var sql = "SELECT first_name, last_name, role, email, phone FROM members";
  con.query(sql, function(err, rows) {
    if (err) {
      res.json({ Error: true, Message: "Error Execute Sql", err });
    } else {
      // res.json({ "Error": false, "Message": "Success", "Visitors": rows });
      res.json(rows);
    }
  });
});
