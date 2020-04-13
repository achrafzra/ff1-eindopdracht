function alertSuperheroName() {
    var superheroName = document.getElementById("superheroname").value;

    alert("Superhero " + superheroName + " has been registered!\n");
}

function consoleLogValues() {
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var superheroname = document.getElementById("superheroname").value;
    var planetname = document.getElementById("planetname").value;
    if (document.getElementsByClassName("male").value != undefined) {
        var gender = document.getElementsByClassName("male").value;
    }
    if (document.getElementsByClassName("female").value != undefined) {
        var gender = document.getElementsByClassName("female").value;
    }
    if (document.getElementsByClassName("x").value != undefined) {
        var gender = document.getElementsByClassName("x").value;
    }
    var superpower = document.getElementById("superpower").value;
    var weakness = document.getElementById("weakness").value;
    var description = document.getElementById("description").value;

    console.log("Firstname is " + firstname);
    console.log("Lastname is " + lastname);
    console.log("Superheroname is " + superheroname);
    console.log("Planetname is " + planetname);
    console.log("Gender is " + gender);
    console.log("Superpower is " + superpower);
    console.log("Weakness is " + weakness);
    console.log("Desciption is " + description);
}