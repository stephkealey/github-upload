var $ = function (id) {
    return document.getElementById(id);
};

function birthdays () {
    var birthdayMatches = 0;
    var people = new Array(25);
    for (var i = 0; i<people.length; i++){
        people[i] = Math.floor(Math.random() * 365) + 1;
    }
    for (var i = 0; i<people.length-1; i++) {
        //if (people[i]==1)
        //if (indexOf(people[i]) != lastIndexOf(people[i]))
        for(var j = i+1; j <people.length; j++) {
            if (people[i] == people[j]) {
                birthdayMatches++;
            }
        }
    }
    if (birthdayMatches >= 1) return true;
    return false;
} // exptSuccess
     
function main () {
    const exptTitle = "at least 2 birthdays";
    var numBirthdays = parseInt(prompt("How many trials do you want to run?"));
    var numDuplicates = 0;
    for (var i = 0; i < numBirthdays; i++) {
        if (birthdays())
            numDuplicates++;
    } // for
    var prob = numDuplicates / numBirthdays;
    $("output").value = prob.toFixed(3);
alert("Probability of " + exptTitle + " is: " + prob.toFixed(3));
} // main

window.onload = function() {
    $("calculate").onclick = main;
    $("output").value = "";
};