// Create a website where you can keep track of all the places you've been. Each destination should be an object with multiple properties, like location, landmarks, time of year, notes, etc. Display those properties when a user clicks on a place's name. Complete the business logic for your place object (including specs, which should go in your README). If you complete the business logic, you may work on adding a user interface. (See tonight's lessons for more.)

function PlacesTraveled() {
  this.places = [];
  this.currentId = 0;
}

PlacesTraveled.prototype.addPlace = function(Place) {
  Place.id = this.assignId();
  this.places.push(Place);
}

PlacesTraveled.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

PlacesTraveled.prototype.findPlace = function(id) {
  for (let i=0; i< this.places.length; i++) {
      if (this.places[i]) {
        if (this.places[i].id == id) {
          return this.places[i];
        }
      }
    };
  return false;
}

PlacesTraveled.prototype.deletePlace = function(id) {
  for (let i=0; i< this.places.length; i++) {
    if (this.places[i]) {
      if (this.places[i].id == id) {
        delete this.places[i];
        return true;
        }
    }  
  };
  return false;
}

function Place(location, country, landmarks, timeOfYear, notes) {
  this.location = location;
  this.country = country;
  this.landmarks = landmarks;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
};

let placesTraveled = new PlacesTraveled();

function displayPlaceDetails(placesTraveledToDisplay) {
  let placesList = $('ul#places');
  let htmlForPlacesInfo = '';
  placesTraveledToDisplay.places.forEach(function(place) {
    htmlForPlacesInfo += "<li id=" + place.id + '>' + place.location + '</li>';
  });
  placesList.html(htmlForPlacesInfo);
};

function showPlace(placeId) {
  const place = placesTraveled.findPlace(placeId);
  $('#show-place').show();
  $('.location').html(place.location);
  $('.country').html(place.country);
  $('.landmarks').html(place.landmarks);
  $('.time-of-year').html(place.timeOfYear);
  $('.notes').html(place.notes);
  let buttons = $("#buttons");
  buttons.empty();
  buttons.append("<button class= 'btn btn-warning deleteButton' id=" +  place.id + ">Delete</button>");
}

function attachPlaceListeners() {
  $('ul#places').on("click", "li", function() {
    showPlace(this.id);
  });
  $("#buttons").on("click", ".deleteButton",function() {
    placesTraveled.deletePlace(this.id);
    $('#show-place').hide();
    displayPlaceDetails(placesTraveled);
  });
};

$(document).ready(function() {
  attachPlaceListeners();
  $("form#new-place").submit(function(event) {
    event.preventDefault();
    const inputtedLocation = $("input#new-location").val();
    const inputtedCountry = $("input#new-country").val();
    const inputtedLandmarks = $("input#new-landmarks").val();
    const inputtedTimeOfYear = $("input#new-timeOfYear").val();
    const inputtedNotes = $("input#notes").val();
    
    $("input#new-location").val("");
    $("input#new-country").val("");
    $("input#new-landmarks").val("");
    $("input#new-timeOfYear").val("");
    $("input#notes").val("");
    
    let newPlace = new Place(inputtedLocation, inputtedCountry, inputtedLandmarks, inputtedTimeOfYear, inputtedNotes);
    placesTraveled.addPlace(newPlace);
    displayPlaceDetails(placesTraveled);
    // console.log(placesTraveled.places);
  });
});



// let place1 = new Place("Hawaii", "USA", ["Haleakela",'Honolua bay'], "March", "It was sunny and had nice weather.");
// let place2 = new Place("Asheville", "USA", ["Breweries", "Local art"], "August", "Hot and humid.  A nice liberal oasis in North Carolina.");
// let place3 = new Place ("Avon", "USA", ["snowboard", 'skiing'], 'december', 'cold & frigid');
// placesTraveled.addPlace(place1);
// placesTraveled.addPlace(place2);
// placesTraveled.addPlace(place3);