const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const mysql = require("mysql");
// helps extract data from client
const bodyParser = require("body-parser");
// cors is not best to be used on production; will need to do something different on prod
const cors = require("cors");

app.use(cors());

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true
  })
);

var Users = require("./Users");
app.use("/users", Users);

var RegisterMembers = require("./registerMembers");
app.use("/members", RegisterMembers);

var RegisterClients = require("./registerClients");
app.use("/clients", RegisterClients);

var AssignClients = require("./assignClients");
app.use("/assignClients", AssignClients);

var GetTherapists = require("./getTherapists");
app.use("/therapists", GetTherapists);

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Artm@y08",
  database: "dev2qa"
});

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// CREATE
var insertRecord =
  "INSERT INTO calendar (client, therapist, location, startdate, enddate) VALUES(?,?,?,?,?)";

// CREATE2
var insertRecord2 =
  "INSERT INTO testevent VALUES ('event2', 2019-07-13 11:30:00, 2019-07-13 12:30:00, 'John Smith', 'Harry Potter')";

// CREATE3 (this WORKS btw)
var insertRecord3 =
  "INSERT INTO testevent SET client= 'johnny boy', therapist = 'harry pooper' ";

// READv2
var readRecord = "SELECT * FROM calendar WHERE client = ?";

// READv2
var readRecord2 = "SELECT * FROM testevent WHERE client = ?";

// UPDATE
var updateRecord =
  "UPDATE calendar SET therapist = ?, location = ?, startdate = ?, enddate = ? WHERE client =?";

// UPDATE2
var updateRecord2 =
  "UPDATE testevent SET title = ?, start = ?, end = ?, therapist = ? WHERE client =?";

// DELETE
var deleteRecord = "DELETE FROM calendar WHERE client=?";

// READ products
//var readRecord2 = "SELECT * FROM products";

con.connect(err => {
  if (err) {
    console.log("Error connecting to Db");
    return;
  }
  console.log("Connection established");
});

// create a GET route

app.get("/express_backend", (req, res) => {
  res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO0001 REACT" });
});

app.get("/events", function(req, res) {
  var sql = "SELECT * FROM testevent";
  con.query(sql, function(err, rows) {
    if (err) {
      res.json({ Error: true, Message: "Error Execute Sql", err });
    } else {
      // res.json({ "Error": false, "Message": "Success", "Visitors": rows });
      res.json(rows);
    }
  });
});

app.get("/templates", function(req, res) {
  var sql = "SELECT * FROM templates";
  con.query(sql, function(err, rows) {
    if (err) {
      res.json({ Error: true, Message: "Error Execute Sql", err });
    } else {
      // res.json({ "Error": false, "Message": "Success", "Visitors": rows });
      res.json(rows);
    }
  });
});

app.get("/forms", function(req, res) {
  var sql = "SELECT * FROM forms";
  con.query(sql, function(err, rows) {
    if (err) {
      res.json({ Error: true, Message: "Error Execute Sql", err });
    } else {
      // res.json({ "Error": false, "Message": "Success", "Visitors": rows });
      res.json(rows);
    }
  });
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

app.get("/users", function(req, res) {
  var sql = "SELECT * FROM users";
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

/*
app.get("/events/add", (req, res) => {
  const INSERT_EVENTS_QUERY =
    //"INSERT INTO products (name, price) VALUES ('PLZName', 500)";
    //"INSERT INTO products (name, price) VALUES ('${name}', ${price})";
    //"INSERT INTO products (price) VALUES (${price})";
    // "INSERT INTO products (price) VALUES (:price)";
    // "INSERT INTO products (price) VALUES (price)";
    // "INSERT INTO products (price) SET ?";
    // "INSERT INTO products (name, price) VALUES (products.name, products.price)"; // doesn't error, but puts in nulls
    //"INSERT INTO products (name, price) VALUES (${products.name}, ${products.price})";
    //"INSERT INTO testevent (client, therapist) VALUES ('clientname', 'therapistname')";
    "INSERT INTO testevent (title, start, end, client, therapist) VALUES ( event2, 2019-07-13 11:30:00, 2019-07-13 12:30:00, John Smith, Harry Potter)";

  con.query(INSERT_EVENTS_QUERY, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.send("sucessfully added product");
    }
  });
});
*/

// THIS WORKS
app.post("/putData", function(req, res) {
  //var title = req.body.title;

  var sql =
    "INSERT INTO testevent (title, client) VALUES ('" +
    req.body.title +
    "','" +
    req.body.client +
    "')";
  con.query(sql, function(err, rows) {
    if (err) {
      res.json({ Error: true, Message: "Error Execute Sql", err });
    } else {
      // res.json({ "Error": false, "Message": "Success", "Visitors": rows });
      res.json(rows);
    }
  });
});

//THIS ALSO WORKS
app.post("/putData2", function(req, res) {
  //var title = req.body.title;

  var sql =
    "INSERT INTO testevent (title, bill_type, client_type, client, therapist, location, category, start, end ) VALUES ('" +
    req.body.newClient +
    "','" +
    req.body.newBillType +
    "','" +
    req.body.newClientType +
    "','" +
    req.body.newClient +
    "','" +
    req.body.newTherapist +
    "','" +
    req.body.newLocation +
    "','" +
    req.body.newCategory +
    "','" +
    req.body.selectedDate +
    "','" +
    req.body.endSelectedDate +
    "')";
  con.query(sql, function(err, rows) {
    if (err) {
      res.json({ Error: true, Message: "Error Execute Sql", err });
    } else {
      // res.json({ "Error": false, "Message": "Success", "Visitors": rows });
      res.json(rows);
    }
  });
});

//WHERE EXISTS TABLE
app.post("/putNewMember2", function(req, res) {
  //var title = req.body.title;

  var sql =
    "INSERT INTO members (role, title, first_name, last_name, email, phone, street_address, city, zip, location, npi, pass, confirm_pass) VALUES ('" +
    req.body.newRole +
    "','" +
    req.body.newTitle +
    "','" +
    req.body.newFirstName +
    "','" +
    req.body.newLastName +
    "','" +
    req.body.newEmail +
    "','" +
    req.body.newPhone +
    "','" +
    req.body.newStreetAddress +
    "','" +
    req.body.newCity +
    "','" +
    req.body.newZip +
    "','" +
    req.body.newLocation +
    "','" +
    req.body.newNPI +
    "','" +
    req.body.newPass +
    "','" +
    req.body.newConfirmPass +
    "') WHERE NOT EXISTS SELECT email from members WHERE email = '" +
    req.body.newEmail +
    "'";
  con.query(sql, function(err, rows) {
    if ((req.body.newEmail = con.query("EXISTS SELECT email from members"))) {
      res.json({ Error: true, Message: "Error Execute Sql", err });
    } else {
      // res.json({ "Error": false, "Message": "Success", "Visitors": rows });
      res.json(rows);
    }
  });
});

/*
app.post("/putData2", function(req, res) {
  var title = req.body.title;
  var sql = "INSERT INTO testevent ( title) VALUES( ?)";
  con.query(sql, [title], function(err, rows) {
    if (err) {
      res.json({ Error: true, Message: "Error Execute Sql", err });
    } else {
      // res.json({ "Error": false, "Message": "Success", "Visitors": rows });
      res.json(rows);
      console.log(req.body);
    }
  });
});
*/

/*
app.get("/products/add", (req, res) => {
  const { name, price } = req.query;
  const INSERT_PRODUCTS_QUERY =
    //"INSERT INTO products (name, price) VALUES ('PLZName', 500)";
    //"INSERT INTO products (name, price) VALUES ('${name}', ${price})";
    //"INSERT INTO products (price) VALUES (${price})";
    // "INSERT INTO products (price) VALUES (:price)";
    // "INSERT INTO products (price) VALUES (price)";
    // "INSERT INTO products (price) SET ?";
    // "INSERT INTO products (name, price) VALUES (products.name, products.price)"; // doesn't error, but puts in nulls
    //"INSERT INTO products (name, price) VALUES (${products.name}, ${products.price})";
    "INSERT INTO products (name, price) VALUES ('+name', +price)"; //posts "+name" as name; doesn't post price


  con.query(INSERT_PRODUCTS_QUERY, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.send("sucessfully added product");
    }
  });
});

*/

/*

app.get("/products", (req, res) => {
  con.query(readRecord2, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json({ data: results });
    }
  });
});

/*



/*

app.get("/products/add", (req, res) => {
  const { name, price } = req.query;
  const data2 = { name: "$name", price: 4 };
  const INSERT_PRODUCTS_QUERY = "INSERT INTO products SET ?";
  con.query(INSERT_PRODUCTS_QUERY, req.query, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json("sucessfully added product");
    }
  });
});
*/

/*
  con.end((err) => {
    // The connection is terminated gracefully
    // Ensures all previously enqueued queries are still
    // before sending a COM_QUIT packet to the MySQL server.
  });
*/

/*

con.query(readRecord, ["john"], function(err, rows) {
  if (err) throw err;
  else {
    console.log(rows);
  }
});
*/

//CREATE a record.

/*
con.query(
  insertRecord,
  ["test", "test", "test", "2015-01-07", "2015-01-07"],
  function(err, res) {
    if (err) throw err;
    else {
      console.log("A new calendar entry has been added.");
    }
  }
);
*/

/*

app.get("/backend", function(req, res) {
  con.query(readRecord, ["test"], function(err, rows) {
    if (!err) res.send(rows) && console.log("The solution is: ", rows);
    else console.log("Error while performing Query.");
  });
});


  /*
//DELETE a record.
con.query(deleteRecord, ["test"], function(err, res) {
  if (err) throw err;
  else {
    console.log("A client is removed.");
  }
});
*/

app.get("/events/add2", (req, res) => {
  con.query(readRecord2, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json({ data: results });
    }
  });
});
