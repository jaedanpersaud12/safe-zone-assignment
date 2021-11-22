//create object template for id card
function idCard(patronName, expiryDate) {
  this.name = patronName;
  this.expiryDate = new Date(expiryDate);
  this.today = new Date();
  this.checkExpiry = function() { //method 
    var difference = this.today.getTime() - this.expiryDate.getTime();
    var sign = Math.sign(difference)
    if (sign == -1) {
      return false;
    } else if (sign == 1) {
      return true;
    }
  }
  this.expired = this.checkExpiry();
}

var patronID1 = new idCard('Jaedan Persaud', '2024/01/11');
var patronID2 = new idCard('Ethan Lalla', '2023/01/11');
var patronID3 = new idCard('Christine Heath', '2020/01/11');
var patronID4 = new idCard('Joshua Ramkissoon', '2024/01/11');
var patronID5 = new idCard('Matthew Eligon', '2023/01/11');


var idCardArray = [patronID1, patronID2, patronID3, patronID4, patronID5];

function vaccCard(patronName, date, vaccinated) {
  this.name = patronName;
  this.secondDose = new Date(date);
  this.vaccinated = vaccinated;
  this.checkDifference = function() {
    var today = new Date();
    var difference = today.getTime() - this.secondDose.getTime();
    difference = Math.floor(difference / 86400000);
    return difference;
  }


  this.checkVaccination = function(index) {
    var date = this.checkDifference();

    var daysUntil = 14 - date;

    if (daysUntil == 1) {
      daysMessage = " day";
    } else {
      daysMessage = " days";
    }

    if (idCardArray[index].expired == false) {
      if (idCardArray[index].name == this.name) {
        if (this.vaccinated == true) {
          if (date >= 14) {
            var message = "Fully Vaccinated.";
            return message;
          } else {
            var message = daysUntil + daysMessage + " until allowed entry.";
            return message;
          }
        } else {
          var message = "Not Vaccinated.";
          return message;
        }
      } else {
        var message = "Name on ID does not match vaccine card.";
        return message;
      }
    } else {
      var message = "ID card expired.";
      return message;
    }
  };

var patronVacc1 = new vaccCard('Jaedan Persaud', '2021/09/11', true);
var patronVacc2 = new vaccCard('Ethan Lalla', undefined, false);
var patronVacc3 = new vaccCard('Christine Heath', '2021/11/11', true);
var patronVacc4 = new vaccCard('Josh Ramkissoon', '2021/01/11', true);
var patronVacc5 = new vaccCard('Matthew Eligon', '2021/11/19', true);

var vaccCardArray = [patronVacc1, patronVacc2, patronVacc3, patronVacc4, patronVacc5];

var vaccArrayLength = vaccCardArray.length;
for (var i = 0; i < vaccArrayLength; i++) {
  document.write("<tr>")
  document.write("<td>", idCardArray[i].name, "</td>")
  document.write("<td>", vaccCardArray[i].checkVaccination(i), "</td>")
  //document.write("<td>", vaccCardArray[i].access(i), "</td>")
  document.write("</tr>")
}
