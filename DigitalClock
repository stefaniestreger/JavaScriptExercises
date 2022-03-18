"use strict";
const $ = selector => document.querySelector(selector);

const padSingleDigit = num => num.toString().padStart(2, "0");

const displayCurrentTime = () => {
    
    const currentDateTime = new Date();
    const currentHour = currentDateTime.getHours();
    const currentMinutes = currentDateTime.getMinutes();
    const currentSeconds = currentDateTime.getSeconds();
    const ampm = "AM";

    if (currentHour > 12) {
        currentHour =- 12;
        ampm = "PM";
    } else {
        switch( ampm ) {
            case currentHour == 12:
                ampm == "AM";
                break;
            case currentHour == 0:
                ampm == "PM";
                break;
        }
    }
    $("#hours").firstChild.nodeValue = currentHour;
    $("#minutes").firstChild.nodeValue = padSingleDigit(currentMinutes);
    $("#seconds").firstChild.nodeValue = padSingleDigit(currentSeconds);
    $("#ampm").firstChild.nodeValue = ampm;
};

document.addEventListener("DOMContentLoaded", () => {
    displayCurrentTime();
    setInterval(displayCurrentTime, 1000);
});
