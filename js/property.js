/*
 @name: Final Project-Phase2
  @Course Code: SODV1201
  @class: Software Development Diploma program.
  @author: Rajnandani Manocha, Jiyeong Yun
*/

//Get Property information from user

//link to html page
function inputPage(){
    location.href = "http://localhost:8000/html/ownerInput.html?action=new";
}

function loadProperty()
{
    const params = new URLSearchParams(document.location.search);
    var ID_Property = params.get("id");
    console.log(params.get("action"))

    if(params.get("action") == null)
    {
        //GET method is used to get property list entered by user and is connected to localhost
        $.get("http://localhost:8000/propertylist/" + ID_Property, (data) => {
            console.log(data);
            document.getElementById("propertyID").value = ID_Property;
            document.getElementById("userID").value = data[0].ID_User;
            document.getElementById("ownerAddress").value = data[0].Address;
            document.getElementById("ownerNeighbor").value = data[0].Neighborhood;
            document.getElementById("ownerSquare").value = data[0].Size;
            document.getElementById("ownerParking").value = data[0].Garage;
            document.getElementById("ownerTransport").value = data[0].Transit;
        });
    }
}

function addNewProperty(){
    const params = new URLSearchParams(document.location.search);
    var ID_Property = params.get("id");
    var action = params.get("action");

    if(action == "new"){
        addOwnerProperty();
    }
    else{
        window.alert("This property ID is taken.");
    }
}

function addOwnerProperty(){
    var localEmp = {};

    localEmp.ID_Property = document.getElementById("propertyID").value;
    localEmp.ID_User = document.getElementById("userID").value;
    localEmp.Address = document.getElementById("ownerAddress").value;
    localEmp.Neighborhood = document.getElementById("ownerNeighbor").value;
    localEmp.Size= document.getElementById("ownerSquare").value;
    localEmp.Garage = document.getElementById("ownerParking").value;
    localEmp.Transit = document.getElementById("ownerTransport").value;

    //fetch and post to put property entered into localhost that has the database
    fetch("http://localhost:8000/properties/", {
        headers : {
            Accept : "application/json",
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(localEmp),
    })

    .then(function (res) {
        window.alert("Property added successfully");
    })
    
    .catch(function (res){
        console.log(res);
    });
}