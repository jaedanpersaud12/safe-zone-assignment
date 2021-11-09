// Created Object in constructor notation for idCard object and defined some properties and a method to check if the expiry date on the ID Card has passed.
var idCard = new Object();
idCard.name = 'Jaedan Persaud',
  idCard.expiryDate = new Date('Jan 1, 2024, 00:00:00'),
  idCard.today = new Date(),
  idCard.checkExpiry = function() {
    var difference = idCard.today.getTime() - idCard.expiryDate.getTime();
    var sign = Math.sign(difference)
    if (sign == -1) {
      return false;
    } else if (sign == 1) {
      return true;
    }
  };

//returned value from method and declared it in a variable "expired"
var expired = idCard.checkExpiry();

//created object in literal notation for the vaccination card object and defined some properties and 2 methods;
var vaccCard = {
  name: 'Jaedan Persaud',
  vaccinationType: 'J&J',
  secondDose: new Date('Nov 5, 2021 12:00:00'),
  vaccinated: true,

  //one method to check the difference between 2 dates; the day the patron took his last, and final, vaccination shot and today. to determine if 14 days has elapsed since then.
  checkDifference: function() {
    var today = new Date();
    var difference = today.getTime() - vaccCard.secondDose.getTime();
    difference = Math.floor(difference / 86400000);
    return difference;
  },

  //the second method is to run through a set of conditions based on given information to determine if a patron meets all criteria to enter the safe zone.
  checkVaccination: function() {
    var date = vaccCard.checkDifference();

    var daysUntil = 14 - date;

    if (daysUntil == 1) {
      var daysMessage = " day";
    } else {
      var daysMessage = " days";
    } //checks if the number of days is a 1. if it is, the word becomes singular.

    if (expired == false) { //checks if the patrons id card has expired
      if (idCard.name == vaccCard.name) { //checks if the name on the ID card matches that on the vaccination card
        if (vaccCard.vaccinated == true) { //checks if a patron has been fully vaccinated
          if (date >= 14) { //checks if 14 days has elapsed since their last shot.
            var message = "You've been fully vaccinated!";
            return message;
          } else {
            var message = "You have " + daysUntil + daysMessage + " until you are allowed entry.";
            return message;
          }
        } else {
          var message = "You have not been vaccinated. You cannot enter.";
          return message;
        }
      } else {
        var message = "The name on the ID card does not match the name on the vaccine card. You cannot enter.";
        return message;
      }
    } else {
      var message = "Your ID Card has expired. You cannot enter.";
      return message;
    }
  }
};

//takes the return from the checkVaccination function and puts it in a variable "message"
var message = vaccCard.checkVaccination();

//finds the id "message" in the HTML and replaces it with the "message" variable.
var messageEl = document.getElementById("message");
messageEl.textContent = message;
