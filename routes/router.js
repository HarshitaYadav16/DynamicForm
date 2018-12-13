const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const router = express.Router();
const User = require("../models/user");
const Field = require("../models/field");
const Input = require("../models/input");
const path = require("path");
const jwt = require("jsonwebtoken");
const moment = require("moment");
const ensureToken = require("../middleware/ensuretoken");
//const axios = require("axios");

//POST route for new user registration
/**
 * @api {post} /register Registration of new user
 * @apiName Register
 * @apiGroup User
 * @apiSuccess {JSON} JWT of the registered user
 * @apiError 400 Bad Request Error All fields are required to be filled by the user Auth failed.
 */
router.post("/register", (req, res, next) => {
  if (req.body.password !== req.body.passwordConf) {
    var err = new Error("Passwords do not match.");
    err.status = 400;
    res.send("passwords dont match");
    return next(err);
  }
  if (
    req.body.name &&
    req.body.email &&
    req.body.username &&
    req.body.password
  ) {
    const userData = {
      name: req.body.name,
      email: req.body.email,
      username: req.body.username,
      password: req.body.password
    };

    User.create(userData, (error, user) => {
      if (error) {
        return next(error);
      } else {
        req.session.userId = user._id;
        res.send(
          "User registered successfully" +
            "<br><a href='/logout'>Login again</a>"
        );
      }
    });
  } else if (req.body.logusername && req.body.logpassword) {
    User.authenticate(
      req.body.logusername,
      req.body.logpassword,
      (error, user) => {
        if (error || !user) {
          var err = new Error("Wrong username or password.");
          err.status = 401;
          return next(err);
        } else {
          const userlogin = {
            name: user.name,
            email: user.email,
            username: user.username
          };
          const token = jwt.sign(
            {
              userlogin
            },
            "my_secret_key",
            {
              expiresIn: "24h" // expires in 24 hours
            }
          );
          //console.log(token);
          //   res.json({
          //     token: token
          //   });
          req.session.token = token;
          console.log(req.session.token);
          req.session.userId = user._id;
          req.session.username = user.username;
          console.log("Login user " + req.session.username);
          if (user.username == "admin") {
            return res.redirect("/homepage");
          } else {
            return res.sendFile(
              path.join(__dirname + "/../views/userform.html")
            );
          }
        }
      }
    );
  } else {
    let err = new Error("All fields required.");
    err.status = 400;
    return next(err);
  }
});

router.get("/gettoken", (req, res, next) => {
  console.log("token " + req.session.token);
  res.json({
    token: req.session.token
  });
});

router.get("/fieldadded", (req, res, next) => {
  res.send("form submitted" + "<br><a href='/logout'>Logout</a>");
});

router.post("/addfield", (req, res, next) => {
  const fieldData = {
    fieldname: req.body.fieldname,
    fieldtype: req.body.fieldtype,
    required: req.body.required,
    defaultvalue: req.body.defaultvalue
  };

  console.log(fieldData);

  Input.create(fieldData, (error, input) => {
    if (error) {
      return next(error);
    } else {
      return res.redirect("/homepage");
    }
  });

  //res.send("Field added");
  //return res.redirect("/homepage");
});

router.post("/addnewfield", (req, res, next) => {
  //console.log(req.body);
  let result = req.body;
  //console.log(result);
  for (var i in result) {
    console.log(i); // alerts key
    console.log(result[i]); //alerts key's value
    console.log(typeof result[i]);
    if (isNaN(result[i])) {
    } else {
      result[i] = parseInt(result[i]);
    }
  }

  Field.create(result, (error, input) => {
    if (error) {
      return next(error);
    } else {
      return res.redirect("/tablepage");
    }
  });
});

router.get("/newfield", ensureToken, (req, res, next) => {
  Input.find((err, data) => {
    if (err) res.send(err);
    else return res.send(data);
  });
});

router.get("/user", ensureToken, (req, res, next) => {
  User.find((err, data) => {
    if (err) res.send(err);
    else return res.send(data);
  });
});

router.get("/formfield", ensureToken, (req, res, next) => {
  Field.find((err, data) => {
    if (err) res.send(err);
    else return res.send(data);
  });
});

//GET route to get movie details
/**
 * @api {get} /homepage redirects to homepage of application
 * @apiName homepage
 */
router.get("/homepage", (req, res, next) => {
  return res.sendFile(path.join(__dirname + "/../views/homepage.html"));
});

router.get("/addfieldpage", (req, res, next) => {
  return res.sendFile(path.join(__dirname + "/../views/addfield.html"));
});

router.get("/tablepage", (req, res, next) => {
  return res.sendFile(path.join(__dirname + "/../views/table.html"));
});

//DELETE route to delete user according to ID
/**
 * @api {delete} /deleteMovie/:id Deletes movie information
 * @apiName deleteMovie
 * @apiGroup Movie
 * @apiParam {Number} id Movie unique ID.
 * @apiSuccess {String} delete movie movie name
 * @apiSuccess {String} delete actors All actors of the movie
 * @apiSuccess {String} delete director director of the movie
 * @apiSuccess {String} delete producer producer of the movie
 * @apiSuccess {Date} delete released_date released date of the movie
 * @apiSuccess {Number} delete budget budget of the movie
 * @apiError Sends the error
 */
router.get("/deleteField/:id", (req, res) => {
  console.log(req.params.id);
  Input.findOneAndRemove(
    {
      _id: req.params.id
    },
    (err, data) => {
      if (err) res.send(err);
      else {
        console.log(data);
        return res.redirect("/homepage");
      }
    }
  );
});

//GET route for user to logout
/**
 * @api {get} /logout Destroys session and returns to login page
 * @apiName logout
 * @apiGroup Movie
 * @apiSuccess {String} redirects to login page
 * @apiError Sends the error
 */
router.get("/logout", (req, res, next) => {
  if (req.session) {
    // delete session object
    req.session.destroy(err => {
      if (err) {
        return next(err);
      } else {
        return res.redirect("/");
      }
    });
  }
});

// Make a request for a user with a given ID
// axios
//   .get("/getinputdetails")
//   .then(function(response) {
//     console.log(response);
//   })
//   .catch(function(error) {
//     console.log(error);
//   });

module.exports = router;
