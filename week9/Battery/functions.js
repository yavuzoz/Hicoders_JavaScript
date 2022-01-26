function fullBattery() {
    if (batteryLevel < 3) {
        batteryLevel++;
    }
    batteryColor();
    batteryTextStatus();
}

function emptyBattery() {
    if (batteryLevel > 0) {
        batteryLevel--;
    }
    batteryColor();
    batteryTextStatus();
}

function batteryColor() {
    if (batteryLevel === 0) {
        batteryOne.style["background-color"] = "white";
        batteryTwo.style["background-color"] = "white";
        batteryThree.style["background-color"] = "white";
    } else if (batteryLevel === 1) {
        batteryOne.style["background-color"] = "red";
        batteryTwo.style["background-color"] = "white";
        batteryThree.style["background-color"] = "white";
    } else if (batteryLevel === 2) {
        batteryOne.style["background-color"] = "orange";
        batteryTwo.style["background-color"] = "orange";
        batteryThree.style["background-color"] = "white";
    } else if (batteryLevel === 3) {
        batteryOne.style["background-color"] = "green";
        batteryTwo.style["background-color"] = "green";
        batteryThree.style["background-color"] = "green";
    }

}

function batteryTextStatus() {
    if (batteryLevel === 0) {
        batteryText.innerHTML = "Doluluk Orani: %0";
    } else if (batteryLevel === 1) {
        batteryText.innerHTML = "Doluluk Orani: %33";
    } else if (batteryLevel === 2) {
        batteryText.innerHTML = "Doluluk Orani: %66";
    } else if (batteryLevel === 3) {
        batteryText.innerHTML = "Doluluk Orani: %100";
    }
}