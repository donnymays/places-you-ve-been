// Create a website where you can keep track of all the places you've been. Each destination should be an object with multiple properties, like location, landmarks, time of year, notes, etc. Display those properties when a user clicks on a place's name. Complete the business logic for your place object (including specs, which should go in your README). If you complete the business logic, you may work on adding a user interface. (See tonight's lessons for more.)

function PlacesTraveled() {
  this.places = [];
}

function Place(location, country, landmarks, timeOfYear, notes) {
  this.location = location;
  this.country = country;
  this.landmarks = landmarks;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
};
 
PlacesTraveled.prototype.addPlace = function(Place) {
  this.places.push(Place);
}



let placesTraveled = new PlacesTraveled();
let hawaii = new Place("Hawaii", "USA", ["Haleakela",'Honolua bay'], "March", "It was sunny and had nice weather.");
PlacesTraveled.prototype.addPlace(hawaii);