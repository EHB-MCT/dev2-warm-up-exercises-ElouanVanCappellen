import {
    getRandomScores,
    getStudentJSON,
    runTitle
} from './lib.js';

runTitle();
warmup1();
warmup2();

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
    let scores = getRandomScores(10);

    document.getElementById("button-2b").addEventListener('click', function () {

        scores = scores.sort(function (a, b) {
            if (a > b) {
                return 1
            } else {
                return -1
            }
        })
        console.log(scores);



    });

    document.getElementById("button-2a").addEventListener('click', function () {
        //    luister naar button 2a 
        let HTMLCode = '<ul>';
        // maken in een string
        scores.forEach(function (score) {
            HTMLCode += `<li> ${score} </li>`;
            // printen van de score

        });
        HTMLCode += '</ul>';
        console.log(HTMLCode);

        // for (i = 0; i < scores.length; i++) {
        //     "<ul><li>" + scores[i] + "</li></ul>"
        // }
        // kan ook niet ideeaal

        document.getElementById("content-2").innerHTML = HTMLCode;
    });





    document.getElementById("button-3b").addEventListener('click', function () {



    });
}

function warmup3() {
    let student = getStudentJSON();
}

function warmup4() {
    let main, min, max;
}

function warmup5() {

}

// export const getRandomScores = (amount) => {
//     const scores = [];
//     for (let i = 0; i < amount; i++) {
//         scores.push(Math.round(Math.random() * 20));
//     }
//     return scores;
// }