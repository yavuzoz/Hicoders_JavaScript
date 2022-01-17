let batteryLevel = 0;
const batteryOne = document.querySelector("#battaryOne");
const batteryTwo = document.querySelector("#battaryTwo");
const batteryThree = document.querySelector("#battaryThree");
const batteryTextStatus = document.querySelector("#battaryShow");

document.querySelector("#raise").addEventListener("click", fullBattery);
document.querySelector("#minus").addEventListener("click", emptyBattery);