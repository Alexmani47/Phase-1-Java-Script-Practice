console.log("JavaScript is connected!");
alert("Hello from JavaScript!");


function checkSpeed(speed) {
    if (speed < 70) {
        console.log("OK");
        return;
    }
    let points = Math.floor((speed - 70) / 5);
    if (points > 12) {
        console.log("License sespended");
    } else {
        console.log("Points:", points);
    }
}
let speed = prompt("Enter car speed:");
speed = Number(speed);
if (speed >= 0) {
    checkSpeed(speed);
} else {
    console.log("invalid speed");
}