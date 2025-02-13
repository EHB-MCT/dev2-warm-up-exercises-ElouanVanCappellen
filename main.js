import {
    getRandomScores,
    getStudentJSON,
    runTitle
} from './lib.js';

runTitle();
warmup1();

function warmup1() {
    console.log("Exercise week 1");
    // addEventListener('click',changeText);
    document.getElementById("button-1a").onclick = changeText;
    document.getElementById("button-1b").onclick = changeColor;
    document.getElementById("button-1c").onclick = newBoldText;
}

function changeText() {

    document.getElementById("content-1").innerHTML = "Hallo, dit is de oefening van Elouan Van Cappellen";
}

function changeColor() {

    const container1 = document.querySelector("#section-1");

    container1.style.background = "lightblue";
}

function newBoldText() {

    const newElement = document.createElement("h1");
    newElement.innerHTML = "Ik ben er klaar voor!";

    document.getElementById("content-1").append(newElement);
}

function warmup2() {
    console.log("Exercise week 2");
    const scores = getRandomScores(10);
}

function warmup3() {
    let student = getStudentJSON();
}

function warmup4() {
    let main, min, max;
}

function warmup5() {

}