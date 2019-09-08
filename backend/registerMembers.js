//const express = require("express");
const express = require("express");
const registerMembers = express.Router();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const Member = require("./Member");
registerMembers.use(cors());

process.env.SECRET_KEY = "secret";

//REGISTER

registerMembers.post("/registermember", (req, res) => {
  const newMemberData = {
    title: req.body.title,
    member_first_name: req.body.firstName,
    member_last_name: req.body.lastName,
    member_full_name: req.body.firstName + " " + req.body.lastName,
    phone: req.body.phone,
    street_address: req.body.address,
    city: req.body.city,
    role: req.body.role,
    zip: req.body.zipCode,
    location: req.body.primaryLocation,
    npi: req.body.npi,
    email: req.body.email,
    pass: req.body.currentPassword,
    notes: req.body.notes,
    active: req.body.checkedActive
    // admin: req.body.checkedAdmin,
    // therapist: req.body.checkedThera,
    //intern: req.body.checkedIntern
  };

  Member.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(member => {
      if (!member) {
        const hash = bcrypt.hashSync(newMemberData.pass, 10);
        newMemberData.pass = hash;
        Member.create(newMemberData)
          .then(member => {
            let token = jwt.sign(member.dataValues, process.env.SECRET_KEY, {
              expiresIn: 1440
            });
            res.json("user and token created" + token);
          })
          .catch(err => {
            res.send("error: " + err);
          });
      } else {
        res.json({ error: "Member's email already exsis" });
      }
    })
    .catch(err => {
      res.send("error" + err);
    });
});

module.exports = registerMembers;
