let textForTyping = "Паметни усисивач - иновација будућности";
let elementForTyping = document.querySelector(".text-over-video");

let charactersPerMinute = 1.5;

function type() {
    elementForTyping.innerHTML = "";

    let currentLocation = 0;

    function typewriter() {
        if(currentLocation < textForTyping.length) {
            elementForTyping.innerHTML += textForTyping[currentLocation++];
            setTimeout(typewriter, 60 * charactersPerMinute);
        }
    }

    typewriter();
}

type();