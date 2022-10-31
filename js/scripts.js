window.addEventListener("load", function() {
    const locationCatalog = document.getElementById("locationCatalog");
    locationCatalog.addEventListener("change", check);
    //console.log(document.getElementById('drbox').checked);
});
window.addEventListener("load", function () {
    const form = document.getElementById("submitVisit");
    form.addEventListener("submit", getInfo);

  });
  
//------------------------------------------------------------------------------

function AddressBook() {
    this.contacts = {};
    this.currentId = 0;
}

AddressBook.prototype.addContact = function (contact) {
    contact.id = this.assignId();
    this.contacts[contact.id] = contact;
};

AddressBook.prototype.assignId = function () {
    this.currentId += 1;
    return this.currentId;
}

//Business Logic
function Visit(location, landmark, year, ) {
    this.location = location;
    this.landmark = landmark;
    this.year = year;

}


let addressBook = new AddressBook();


let singapore = new Visit("Singapore", "Merlion", 2014);
let dr = new Visit("D.R.", "Ocean", 2018);

addressBook.addContact(singapore);
addressBook.addContact(dr);

console.log(addressBook);



function getInfo(event){
    event.preventDefault();

    const locationInput = document.getElementById("locationInput").value;
    const landmarkInput = document.getElementById("landmarkInput").value;
    const yearInput = document.getElementById("yearInput").value;

    let newLocation = new Visit(locationInput, landmarkInput, yearInput);
    console.log("hello")
    return addressBook.addContact(newLocation);

}



//UI Logic


function check(){
    const singaporeBox = document.getElementsByName("singaporeBox").checked;
    const singaporeInfo = document.querySelector("#singaporeInfo");
    const drBox = document.getElementsByName("drBox").checked;
    const drInfo = document.querySelector("#drInfo");
    const drLocation = document.querySelector("#drLocation");
    const drLandmark = document.querySelector("#drLandmark");
    const drYear = document.querySelector("#drYear");

    drLocation.innerHTML = dr.location;
    drLandmark.innerHTML = dr.landmark;
    drYear.innerHTML = dr.year;


    if(singaporeBox === true){
        singaporeInfo.removeAttribute("class", "hidden");
    }
    else {
        singaporeInfo.setAttribute("class", "hidden");
    }
    
    if(drBox === true){
        drInfo.removeAttribute("class", "hidden");
    }else{
        drInfo.setAttribute("class", "hidden");    }
}