/*
 @name: Final Project-Phase1
  @Course Code: SODV1201
  @class: Software Development Diploma program.
  @author: Rajnandani Manocha, Jiyeong Yun
*/


//owner array
var owner = [
    [ "Brielle Williamson", "brielle@gmail.com", "5879372000","33 Mentos NW Calgary", "TD Bank", "800", "N", "Banff-trail station","Meeting room", 20, "Smoking", "06/03/2022", "1day",90  ],
    [ "Herrod Chandler", "herrod@gmail.com", "5874137500", "456 Mints SW Calgary", "Subway", "1200", "Y", "Chinook Station","Private office room", 6, "Non-Smoking", "06/05/2022", "1month",1800 ],
    [ "Rhona Davidson", "rhona@gmail.com", "4038327900", "721 SourJelly SE Calgary", "Safeway", "900", "Y", "Aderson Station", "Meeting room", 15, "Smoking", "04/23/2022", "1day",80 ],
    [ "Colleen Hurst", "colleen@gmail.com", "4035205500", "548 Febreze NE Calgary", "CIBC", "2000", "Y", "Victoria Park Station", "Desk in an open work area", 3, "Non-Smoking", "07/11/2022", "1week",180 ],
    [ "Sonya Frost", "sonya@gmail.com", "5876969321", "68 Falconridge NE Calgary", "Dominoz", "1800", "N", "Whitehorn Station", "Desk in an open work area", 5, "Smoking", "06/08/2022", "1month",180 ],
    [ "Jena Gaines", "jena3@gmail.com", "5876690560", "696 Macleod SW Calgary", "JW Mariott", "2100", "Y", "Stampede Station", "Meeting room", 15, "Smoking", "04/27/2022", "1day",60 ],
    [ "Quinn Flynn", "quinn7@gmail.com", "5876669999", "35 Northland NW Calgary", "Registry", "450", "N", "Mc-Knight station","Meeting room", 30, "Non-Smoking", "05/28/2022", "1week",90 ]
];

//coworker array
var coworker = [
        [ "Angelica Ramos", "angel@gmail.com", "4037896677" ],
        [ "Gavin Joyce", "gaivi@gmail.com", "5873334545" ],
        [ "Jennifer Chang", "jenn@gmail.com", "5876769090" ],
        [ "Brenden Wagner", "bren@gmail.com", "5876067878" ],
        [ "Fiona Green", "fin@gmail.com", "4037778888" ],
        [ "Shou Itou", "shou@gmail.com", "5879094444" ],
        [ "Michelle House", "michelle45@gmail.com", "5876669843" ],
        [ "Suki Burks", "suks@gmail.com", "5879994567" ],
        [ "Prescott Bartlett", "presi@gmail.com", "5879213456" ],
        [ "Gavin Cortez", "gavin67@gmail.com", "5879653789" ],
    ];


//USER STORY 1

//function to add new owner information in the owner array
function ownerAdd(){
var owner2 = [(document.getElementById("ownerName").value), (document.getElementById("ownerEmail").value),(document.getElementById("ownerPhone").value)];

owner.push(owner2);  //push method to add info in the owner array
console.log(owner); 
}

//function to add new owner information in the coworker array
function coworkerAdd(){
var coworker2 = [(document.getElementById("coName").value), (document.getElementById("coEmail").value),(document.getElementById("coPhone").value)]; 

coworker.push(coworker2); //push method to add info in the owner array
console.log(coworker);
}


//USER STORY 2 and 3

//link to the other ownerPage
function property(){
window.location.href='ownerPage.html';
}

//link to other coworkerPage
function searchWorkspace(){
window.location.href='coworkerPage.html';
}

//function to display the property list
function showProperty(){
for(var i=0; i<owner.length; i++)
{
    document.getElementById("propertyList").innerHTML+="</br>Address : "+owner[i][3]+"</br>Neighbor : " + owner[i][4] + "</br>Square : " + owner[i][5] + "sqft</br>Parking : " + owner[i][6]
    +"</br>Transport :  " + owner[i][7] + "</br>";
}
}

//function that adds the property written by user to the existing properties
function addProperty(){
var address = document.getElementById("ownerAddress").value;
var neighbor = document.getElementById("ownerNeighbor").value;
var square = document.getElementById("ownerSquare").value;
var parking = document.getElementById("ownerParking").value;
var transport = document.getElementById("ownerTransport").value;

document.getElementById("list").innerHTML+="</br>Address : " + address + "</br>Neighbor : "+ neighbor +"</br>Square : " + square + "sqft</br>Parking : " + parking + "</br>Transport : " + transport +"</br>";

var ownerProperty1 = [(address),(neighbor),(square),(parking),(transport)];
owner.push(ownerProperty1);
console.log(owner);
}


//function to add detail of workspace
function addDetail()
{
var mr=document.getElementById("meetingRoom").checked;
var po=document.getElementById("privateOffice").checked;
var ow=document.getElementById("openWork").checked;
var seat=document.getElementById("seats").value;
var sm=document.getElementById("smoking").checked;
var ns=document.getElementById("non-smoking").checked;
var date=document.getElementById("date").value;
var lease=document.getElementById("lease").value;
var price=document.getElementById("price").value;

//function that checks which checkbox is checked for type of room in workspace
function type()
{
    var x;
    if(mr==true){
        x="Meeting Room";
        document.getElementById("list").innerHTML += "</br> Type : Meeting Room";
    }
    else if(po==true){
        x = "Private Office";
        document.getElementById("list").innerHTML += "</br> Type : Private Office";
    }
    else if(ow==true){
        x = "Desk in an open area";
        document.getElementById("list").innerHTML += "</br> Type : Desk in an open area";
    }
    return x;
};

//smoking function to check if the workspace is smoking or non smoking
function smoking(){
    var x;
    if(sm==true){
        x = "Smoking";
        document.getElementById("list").innerHTML += "</br> Smoking";
    }
    else if(ns==true){
        x = "Non-Smoking"
        document.getElementById("list").innerHTML += "</br> Non-smoking";
    }
    return x;
}

document.getElementById("list").innerHTML+="</br> Seat : " + seat + "</br>Available Date : " + date + "</br>Lease term : " + lease + "</br>Price : " + price + " CAD";


//variables created for showing the list of workspace that is entered by user using checkbox and input box
var ownerProperty1 = (type());
var ownerProperty2 = (seat);
var ownerProperty3 = (smoking());
var ownerProperty4 = (date);
var ownerProperty5 = (lease);
var ownerProperty6 = (price);

//push method to add the above info in the owner array
owner[7].push(ownerProperty1);
owner[7].push(ownerProperty2);
owner[7].push(ownerProperty3);
owner[7].push(ownerProperty4);
owner[7].push(ownerProperty5);
owner[7].push(ownerProperty6);
console.log(owner);
}


//USER STORY 4-8

//function contact to get the contact info of the workspace owner 
function contact(){
var inputInfo = document.getElementById("menu").value;
for(var i=0; i< owner.length; i++){
    if(inputInfo == owner[i][3])
    {
        document.getElementById("resultInfo").innerHTML+="</br>Name : "+owner[i][0]+"</br>E-mail : " + owner[i][1] + "</br>Phone: " + owner[i][2] + "</br>";
    }
}
}

//function to search for workspace by any given criteria
function search(){
    var select = document.getElementById("menu");
    var info = document.getElementById("searchBox").value;
    var i;

    //conditions checked on the basis of criteria chosen by user
    if(select.value == 1){
        for(i=0; i<owner.length; i++){
            if(owner[i][3] == info){
                document.getElementById("result").innerHTML += "</br>Address : " + owner[i][3] +"</br>Neighbor : "+ owner[i][4] +"</br>Square : " + owner[i][5] + "sqft</br>Parking : " + owner[i][6] + "</br>Transport : " + owner[i][7] + "</br>Type : " + owner[i][8] +"</br>Seats : "+ owner[i][9] +"</br>Smoking/ Non-smoking : " + owner[i][10] + "</br>Available Date : " + owner[i][11] + "</br>Lease Term : " + owner[i][12] + "</br>Price : " + owner[i][13] + " CAD"+ "</br>";
            }
        }
    }

    if(select.value == 2){
        for(i=0; i<owner.length; i++){
            if(owner[i][4] == info){
                document.getElementById("result").innerHTML += "</br>Address : " + owner[i][3] +"</br>Neighbor : "+ owner[i][4] +"</br>Square : " + owner[i][5] + "sqft</br>Parking : " + owner[i][6] + "</br>Transport : " + owner[i][7] +"</br>Type : " + owner[i][8] +"</br>Seats : "+ owner[i][9] +"</br>Smoking/ Non-smoking : " + owner[i][10] + "</br>Available Date : " + owner[i][11] + "</br>Lease Term : " + owner[i][12] + "</br>Price : " + owner[i][13] + " CAD"+ "</br>";
            }
        }
    }

    if(select.value == 3){
        for(i=0; i<owner.length; i++){
            if(owner[i][5] == info){
                document.getElementById("result").innerHTML += "</br>Address : " + owner[i][3] +"</br>Neighbor : "+ owner[i][4] +"</br>Square : " + owner[i][5] + "sqft</br>Parking : " + owner[i][6] + "</br>Transport : " + owner[i][7] + "</br>Type : " + owner[i][8] +"</br>Seats : "+ owner[i][9] +"</br>Smoking/ Non-smoking : " + owner[i][10] + "</br>Available Date : " + owner[i][11] + "</br>Lease Term : " + owner[i][12] + "</br>Price : " + owner[i][13] + " CAD"+ "</br>";
            }
        }
    }

    if(select.value == 4){
        for(i=0; i<owner.length; i++){
            if(owner[i][6] == info){
                document.getElementById("result").innerHTML += "</br>Address : " + owner[i][3] +"</br>Neighbor : "+ owner[i][4] +"</br>Square : " + owner[i][5] + "sqft</br>Parking : " + owner[i][6] + "</br>Transport : " + owner[i][7] + "</br>Type : " + owner[i][8] +"</br>Seats : "+ owner[i][9] +"</br>Smoking/ Non-smoking : " + owner[i][10] + "</br>Available Date : " + owner[i][11] + "</br>Lease Term : " + owner[i][12] + "</br>Price : " + owner[i][13] + " CAD"+ "</br>";
            }
        }
    }

    if(select.value == 5){
        for(i=0; i<owner.length; i++){
            if(owner[i][7] == info){
                document.getElementById("result").innerHTML += "</br>Address : " + owner[i][3] +"</br>Neighbor : "+ owner[i][4] +"</br>Square : " + owner[i][5] + "sqft</br>Parking : " + owner[i][6] + "</br>Transport : " + owner[i][7] + "</br>Type : " + owner[i][8] +"</br>Seats : "+ owner[i][9] +"</br>Smoking/ Non-smoking : " + owner[i][10] + "</br>Available Date : " + owner[i][11] + "</br>Lease Term : " + owner[i][12] + "</br>Price : " + owner[i][13] + " CAD"+ "</br>";
            }
        }
    }

    if(select.value == 6){
        for(i=0; i<owner.length; i++){
            if(owner[i][9] == info){
                document.getElementById("result").innerHTML += "</br>Address : " + owner[i][3] +"</br>Neighbor : "+ owner[i][4] +"</br>Square : " + owner[i][5] + "sqft</br>Parking : " + owner[i][6] + "</br>Transport : " + owner[i][7] + "</br>Type : " + owner[i][8] +"</br>Seats : "+ owner[i][9] +"</br>Smoking/ Non-smoking : " + owner[i][10] + "</br>Available Date : " + owner[i][11] + "</br>Lease Term : " + owner[i][12] + "</br>Price : " + owner[i][13] + " CAD"+ "</br>";
            }
        }
    }

    if(select.value == 7){
        for(i=0; i<owner.length; i++){
            if(owner[i][11] == info){
                document.getElementById("result").innerHTML += "</br>Address : " + owner[i][3] +"</br>Neighbor : "+ owner[i][4] +"</br>Square : " + owner[i][5] + "sqft</br>Parking : " + owner[i][6] + "</br>Transport : " + owner[i][7] + "</br>Type : " + owner[i][8] +"</br>Seats : "+ owner[i][9] +"</br>Smoking/ Non-smoking : " + owner[i][10] + "</br>Available Date : " + owner[i][11] + "</br>Lease Term : " + owner[i][12] + "</br>Price : " + owner[i][13] + " CAD"+ "</br>";
            }
        }
    }

    if(select.value == 8){
        for(i=0; i<owner.length; i++){
            if(owner[i][12] == info){
                document.getElementById("result").innerHTML += "</br>Address : " + owner[i][3] +"</br>Neighbor : "+ owner[i][4] +"</br>Square : " + owner[i][5] + "sqft</br>Parking : " + owner[i][6] + "</br>Transport : " + owner[i][7] + "</br>Type : " + owner[i][8] +"</br>Seats : "+ owner[i][9] +"</br>Smoking/ Non-smoking : " + owner[i][10] + "</br>Available Date : " + owner[i][11] + "</br>Lease Term : " + owner[i][12] + "</br>Price : " + owner[i][13] + " CAD"+ "</br>";
            }
        }
    }

    if(select.value == 9){
        for(i=0; i<owner.length; i++){
            if(owner[i][13] == info){
                document.getElementById("result").innerHTML += "</br>Address : " + owner[i][3] +"</br>Neighbor : "+ owner[i][4] +"</br>Square : " + owner[i][5] + "sqft</br>Parking : " + owner[i][6] + "</br>Transport : " + owner[i][7] + "</br>Type : " + owner[i][8] +"</br>Seats : "+ owner[i][9] +"</br>Smoking/ Non-smoking : " + owner[i][10] + "</br>Available Date : " + owner[i][11] + "</br>Lease Term : " + owner[i][12] + "</br>Price : " + owner[i][13] + " CAD"+ "</br>";
            }
        }
    }
}

//function to select a workspace and view its details
function detail(){
    var mr=document.getElementById("meetingRoom").checked;
    var po=document.getElementById("privateOffice").checked;
    var ow=document.getElementById("openWork").checked;
    var sm=document.getElementById("smoking").checked;
    var ns=document.getElementById("non-smoking").checked;
    var i;
    if(mr==true){
        for(i=0; i<owner.length; i++){
            if(owner[i][8] == "Meeting room" ){
                document.getElementById("detailInfo").innerHTML += "</br>Address : " + owner[i][3] +"</br>Neighbor : "+ owner[i][4] +"</br>Square : " + owner[i][5] + "sqft</br>Parking : " + owner[i][6] + "</br>Transport : " + owner[i][7] +  "</br>Type : " + owner[i][8] +"</br>Seats : "+ owner[i][9] +"</br>Smoking/ Non-smoking : " + owner[i][10] + "</br>Available Date : " + owner[i][11] + "</br>Lease Term : " + owner[i][12] + "</br>Price : " + owner[i][13] + " CAD"+ "</br>";
            }
        }
    }
    else if(po==true){
        for(i=0; i<owner.length; i++){
            if(owner[i][8] == "Private office room"){
                document.getElementById("detailInfo").innerHTML += "</br>Address : " + owner[i][3] +"</br>Neighbor : "+ owner[i][4] +"</br>Square : " + owner[i][5] + "sqft</br>Parking : " + owner[i][6] + "</br>Transport : " + owner[i][7] +  "</br>Type : " + owner[i][8] +"</br>Seats : "+ owner[i][9] +"</br>Smoking/ Non-smoking : " + owner[i][10] + "</br>Available Date : " + owner[i][11] + "</br>Lease Term : " + owner[i][12] + "</br>Price : " + owner[i][13] + " CAD"+ "</br>";
            }
        }
    }
    else if(ow==true){
        for(i=0; i<owner.length; i++){
            if(owner[i][8] == "Desk in an open work area"){
                document.getElementById("detailInfo").innerHTML += "</br>Address : " + owner[i][3] +"</br>Neighbor : "+ owner[i][4] +"</br>Square : " + owner[i][5] + "sqft</br>Parking : " + owner[i][6] + "</br>Transport : " + owner[i][7] + "</br>Type : " + owner[i][8] +"</br>Seats : "+ owner[i][9] +"</br>Smoking/ Non-smoking : " + owner[i][10] + "</br>Available Date : " + owner[i][11] + "</br>Lease Term : " + owner[i][12] + "</br>Price : " + owner[i][13] + " CAD"+ "</br>";
            }
        }
    };
    if(sm==true){
        for(i=0; i<owner.length; i++){
            if(owner[i][10] == "Smoking"){
                document.getElementById("detailInfo").innerHTML += "</br>Address : " + owner[i][3] +"</br>Neighbor : "+ owner[i][4] +"</br>Square : " + owner[i][5] + "sqft</br>Parking : " + owner[i][6] + "</br>Transport : " + owner[i][7] + "</br>Type : " + owner[i][8] +"</br>Seats : "+ owner[i][9] +"</br>Smoking/ Non-smoking : " + owner[i][10] + "</br>Available Date : " + owner[i][11] + "</br>Lease Term : " + owner[i][12] + "</br>Price : " + owner[i][13] + " CAD"+ "</br>";
            }
        }
    }
    else if(ns==true){
        for(i=0; i<owner.length; i++){
            if(owner[i][10] == "Non-Smoking"){
                document.getElementById("detailInfo").innerHTML += "</br>Address : " + owner[i][3] +"</br>Neighbor : "+ owner[i][4] +"</br>Square : " + owner[i][5] + "sqft</br>Parking : " + owner[i][6] + "</br>Transport : " + owner[i][7] + "</br>Type : " + owner[i][8] +"</br>Seats : "+ owner[i][9] +"</br>Smoking/ Non-smoking : " + owner[i][10] + "</br>Available Date : " + owner[i][11] + "</br>Lease Term : " + owner[i][12] + "</br>Price : " + owner[i][13] + " CAD"+ "</br>";
            }
        }
    }
}