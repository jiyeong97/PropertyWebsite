/*
 @name: Final Project-Phase2
  @Course Code: SODV1201
  @class: Software Development Diploma program.
  @author: Rajnandani Manocha, Jiyeong Yun
*/


//Get value from search box
function searchDB() {
    txtSearch = document.getElementById("searchBox").value;
    searchProperty(txtSearch);
  }
  

  //Search property in condition and get result
  function searchProperty(txtSearch) {
    var select = document.getElementById("menu");
    var localEmp = {};

    //1 is for search based on address
    if(select.value == 1)
    {
        localEmp.Address = txtSearch;
        $.get("http://localhost:8000/search/" + localEmp.Address, (data) => {
            for(x=0; x<data.length ; x++){
                document.getElementById("dataResult").innerHTML += "</br></br>Address : " + data[x].Address + "</br>Neighborhood : " + data[x].Neighborhood + "</br>Size : " + data[x].Size + "</br>Garage : " + data[x].Garage + "</br>Public Transit : " + data[x].Transit;
            }
        });
    }

    //2 is for neighborhood
    if(select.value == 2){
        localEmp.Neighborhood = txtSearch;
        $.get("http://localhost:8000/search/" + localEmp.Neighborhood, (data) => {
            for(x=0; x<data.length ; x++){
                document.getElementById("dataResult").innerHTML += "</br></br>Address : " + data[x].Address + "</br>Neighborhood : " + data[x].Neighborhood + "</br>Size : " + data[x].Size + "</br>Garage : " + data[x].Garage + "</br>Public Transit : " + data[x].Transit;
            }
        });
    } 

    //3 is for square feet
    if(select.value == 3){
        localEmp.Size = txtSearch;
        $.get("http://localhost:8000/search/" + localEmp.Size, (data) => {
            for(x=0; x<data.length ; x++){
                document.getElementById("dataResult").innerHTML += "</br></br>Address : " + data[x].Address + "</br>Neighborhood : " + data[x].Neighborhood + "</br>Size : " + data[x].Size + "</br>Garage : " + data[x].Garage + "</br>Public Transit : " + data[x].Transit;
            }
        });
    } 

    //4 is for parking garage or not
    if(select.value == 4){
        localEmp.Garage = txtSearch;
        $.get("http://localhost:8000/search/" + localEmp.Garage, (data) => {
            for(x=0; x<data.length ; x++){
                document.getElementById("dataResult").innerHTML += "</br></br>Address : " + data[x].Address + "</br>Neighborhood : " + data[x].Neighborhood + "</br>Size : " + data[x].Size + "</br>Garage : " + data[x].Garage + "</br>Public Transit : " + data[x].Transit;
            }
        });
    } 

    //5 is for transit
    if(select.value == 5){
        localEmp.Transit = txtSearch;
        $.get("http://localhost:8000/search/" + localEmp.Transit, (data) => {
            for(x=0; x<data.length ; x++){
                document.getElementById("dataResult").innerHTML += "</br></br>Address : " + data[x].Address + "</br>Neighborhood : " + data[x].Neighborhood + "</br>Size : " + data[x].Size + "</br>Garage : " + data[x].Garage + "</br>Public Transit : " + data[x].Transit;
            }
        });
    } 
  }