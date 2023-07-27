/*
 @name: Final Project-Phase2
  @Course Code: SODV1201
  @class: Software Development Diploma program.
  @author: Rajnandani Manocha, Jiyeong Yun
*/


//login owner page


//Link to owner login page
function addNew(){
    location.href = "http://localhost:8000/html/ownerLogin.html?action=new";
}


//Get user list and save user input in user list
function loadFields()
{
    const params = new URLSearchParams(document.location.search);
    var ID_User = params.get("id");
    console.log(params.get("action"))

    if(params.get("action") == null)
    {
        //get method to get user list
        //localhost 8000 is connected for back end
        $.get("http://localhost:8000/userlist/" + ID_User, (data) => {
            console.log(data);
            document.getElementById("userId1").value = ID_User;
            document.getElementById("ownerName").value = data[0].Name;
            document.getElementById("ownerEmail").value = data[0].Email;
            document.getElementById("ownerPhone").value = data[0].Phone;
        });
    }
}

function register(){
    const params = new URLSearchParams(document.location.search);
    var ID_User = params.get("id");
    var action = params.get("action");

    if(action == "new"){
        addOwnerDatabase();
    }
    else{
        window.alert("This user ID is taken.");
    }
}


function addOwnerDatabase(){
    var localEmp = {};
    localEmp.ID_User = document.getElementById("userId1").value;
    localEmp.Name = document.getElementById("ownerName").value;
    localEmp.Email = document.getElementById("ownerEmail").value;
    localEmp.Phone = document.getElementById("ownerPhone").value;

    //user entered info is got using GET and then using fetch and POST its added into user list database
    fetch("http://localhost:8000/users/", {
        headers : {
            Accept : "application/json",
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(localEmp),
    })
    .then(function (res) {
        window.alert("User login successfully");
    })
    .catch(function (res){
        console.log(res);
    });
}

//login coworker page

//Link to coworker login page
function addNewCo(){
    location.href = "http://localhost:8000/html/coworkerLogin.html?action=new";
}

//Get user list and save user input in user list
function loadFieldsCo()
{
    const params = new URLSearchParams(document.location.search);
    var ID_User = params.get("id");
    console.log(params.get("action"))

    //get method to get user list
    //localhost 8000 is connected for back end
    if(params.get("action") == null){
        $.get("http://localhost:8000/userlist/" + ID_User, (data) => {
            console.log(data);
            document.getElementById("userId").value = ID_User;
            document.getElementById("coName").value = data[0].Name;
            document.getElementById("coEmail").value = data[0].Email;
            document.getElementById("coPhone").value = data[0].Phone;
        });
    }
}

function registerCo(){
    const params = new URLSearchParams(document.location.search);
    var ID_User = params.get("id");
    var action = params.get("action");
    if(action == "new"){
        addOwnerDatabaseCo();
    }
    else{
        window.alert("This ID is taken.");
    }
}

function addOwnerDatabaseCo(){
    var localEmp = {};
    localEmp.ID_User = document.getElementById("userId").value;
    localEmp.Name = document.getElementById("coName").value;
    localEmp.Email = document.getElementById("coEmail").value;
    localEmp.Phone = document.getElementById("coPhone").value;

    //user entered info is got using GET and then using fetch and POST its added into user list database

    fetch("http://localhost:8000/users/", {
        headers : {
            Accept : "application/json",
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(localEmp),
    })
    .then(function (res) {
        window.alert("User login successfully");
    })
    .catch(function (res){
        console.log(res);
    });
}


