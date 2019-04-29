let name1 = prompt("Please enter your name", "");
let name2 = prompt("Please enter your name", "");
let name3 = prompt("Please enter your name", "");

let name1length = (name1.length);
let name2length = (name2.length);
let name3length = (name3.length);

let result = "";

console.log(name1length);
console.log(name2length);
console.log(name3length);

let longestName = Math.max(name1length, name2length, name3length);

console.log(longestName);

if ((longestName === name1length) && (longestName === name2length) && (longestName === name3length)){
    alert("All three names, " + name1 + ", " + name2 + ", " + name3 + ", are the same length.")
}
else if ((longestName === name1length) && (longestName === name2length)) {
    alert(name1 + " and " + name2 + " tie for the longest name");
}
else if ((longestName === name1length) && (longestName === name3length)) {
    alert(name1 + " and " + name3 + " tie for the longest name");
}
else if ((longestName === name2length) && (longestName === name3length)) {
    alert(name2 + " and " + name3 + " tie for the longest name");
}
else if (longestName === name1length) {
    alert(name1 + " has the longest name!")
}
else if (longestName === name2length) {
    alert(name2 + " has the longest name!")
}
else if (longestName === name3length) {
    alert(name3 + " has the longest name!")
}
else {
    alert("Idk what happened, this messed up.");
}

// I talked with some engineers at work about this logic, they mentioned it would be better to make an empty array
// will explore this method on my free time