/*
 @name: Final Project-Phase2
  @Course Code: SODV1201
  @class: Software Development Diploma program.
  @author: Rajnandani Manocha, Jiyeong Yun
*/

var db = require("./DBconnection.js");
var express = require("express");

var app = express();

//Middleware
app.use(express.static(__dirname));
app.use(express.json());
app.use(express.urlencoded({extended:false}));


//Listen to server
var server = app.listen(8000, () => {
    console.log("Server is listenning on port " + server.address().port);
});


//get a list of users
app.get("/userlist", function(req, res){
    db.all("SELECT * from 'dbo.Users' ", function (err, rows){
        if(err){
            res.status(200).json({error: err.message});
            return;
        }
        res.json(rows);
    })
});

app.get("/userlist/:id", function(req, res){
    db.all("SELECT * from 'dbo.Users' where 'ID_User' = " + req.params.id, function (err, rows){
        if(err){
            res.status(200).json({error: err.message});
            return;
        }
        res.json(rows);
    });
})

app.post("/users/", function(req,res){
    var params = [
        req.body.ID_User,
        req.body.Name,
        req.body.Email,
        req.body.Phone
    ];

    db.run(
        "insert into 'dbo.Users' (ID_User, Name, Email, Phone) values (?, ?, ?, ?)",
        params,
        function (err, rows) {
            if(err) {
                res.status(200).json({error: err.message});
                return;
            }
            res.json(rows);
        }
    );
});


//get a list of properties
app.get("/propertylist", function(req, res){
    db.all("SELECT * from 'dbo.Properties' ", function (err, rows){
        if(err){
            res.status(200).json({error: err.message});
            return;
        }
        res.json(rows);
    })
});

app.post("/properties/", function(req,res){
    var params = [
        req.body.ID_Property,
        req.body.ID_User,
        req.body.Address,
        req.body.Neighborhood,
        req.body.Size,
        req.body.Garage,
        req.body.Transit
    ];

    db.run(
        "insert into 'dbo.Properties' (ID_Property, ID_User, Address, Neighborhood, Size, Garage, Transit) values (?, ?, ?, ?, ?, ?, ?)",
        params,
        function (err, rows) {
            if(err) {
                res.status(200).json({error: err.message});
                return;
            }
            res.json(rows);
        }
    );
});


//get a list of workspaces
app.get("/workspacelist", function(req, res){
    db.all("SELECT * from 'dbo.Workspaces' ", function (err, rows){
        if(err){
            res.status(200).json({error: err.message});
            return;
        }
        res.json(rows);
    })
});

app.post("/workspaces/", function(req,res){
    var params = [
        req.body.ID_WS,
        req.body.ID_User,
        req.body.ID_Property,
        req.body.Type,
        req.body.NumberOfPeople,
        req.body.Smoking,
        req.body.AvailableStartDate,
        req.body.Term,
        req.body.Pric
    ];

    db.run(
        "insert into 'dbo.Workspaces' (ID_WS,ID_User, ID_Property, Type, NumberOfPeope, Smoking, AvailableStratDate, Term, Price) values (?, ?, ?, ?, ?, ?, ?, ?, ?)",
        params,
        function (err, rows) {
            if(err) {
                res.status(200).json({error: err.message});
                return;
            }
            res.json(rows);
        }
    );
});


//get infromation about property in condition for searching function
app.get("/search/:text", function(req, res){
    db.all(
        "select * from 'dbo.Properties' where Address like '" + req.params.text + "' or Neighborhood like '" + req.params.text +"' or Size like '"+ req.params.text +"' or Garage like '"+ req.params.text +"' or Transit like '"+ req.params.text +"'",
        function (err, rows) {
            if (err) {
                res.status(200).json({ error: err.message });
                return;
            }
            console.log(rows);
            res.json(rows);
        }
    );
})