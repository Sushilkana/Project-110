var family = [];

function Add() {
    var member = document.getElementById("member").value;
    family.push(member + "<br>");
    document.getElementById("members").innerHTML = family;
}