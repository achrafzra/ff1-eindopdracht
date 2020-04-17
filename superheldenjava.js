
function alertfunction() {
  
  var fName = document.getElementById("name").value;
  var lName = document.getElementById("lastname").value;
  var hName = document.getElementById("heroname").value;
  var pName = document.getElementById("planetname").value;
  
  alert(
    "Uw gegevens zijn succesvol verstuurd!" + "\n" +
    "\n" + 
    "Uw Naam: " + fName + "\n" +
    "Uw Achternaam: " + lName + "\n" +
    "Uw Superheld naam: " + hName + "\n" +
    "Uw Planeet van herkomst: " + pName
    );
    
}