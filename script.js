//Create object for id card with property 'name'
var idCard = {
  name: 'Abdool Persaud',
};


/*Create object for vaccine card with properties; 'name' , 'vaccinationType',
and a boolean 'fullyVaccinated' which states whether the patron has been fully vaccinated or not */
var vaccCard = {
  name: 'Jaedan Persaud',
  vaccinationType: "J&J",
  fullyVaccinated: true,
}

/*if statement which outputs a message determined by if the name on the vaccine card and the id
card match and also if the 'fullyVaccinated' boolean is true or false*/

//if both statements are true a message is outputted saying the patron can enter the premises
 if (idCard.name == vaccCard.name && vaccCard.fullyVaccinated == true){
  var result = "Patron is fully vaccinated! Please Enjoy! :)";
  }

// if either of the statements are false a message is outputted saying the patron cannot enter

else {
  var result = "Patron has not been vaccinated. Kindly exit.";
}

//default message
//var result = "Patron is fully vaccinated! Please Enjoy! :)";

//writes the output to the document object in the browser
document.write("<h3>Patron Name: <span class=\"bold\">" + idCard.name + "</span></h3>")
document.write("<h3>Vaccine Type: <span class=\"bold\">" + vaccCard.vaccinationType + " </span></h3>");
document.write("<h3>" + result + "</h3>");
