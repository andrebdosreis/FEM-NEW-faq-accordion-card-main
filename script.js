let nquestions = document.querySelectorAll('.question');
let nanswers = document.querySelectorAll('.answer');

function addDataKey() {
    for (let i in nquestions) {
        nquestions[i].setAttribute('data-key', i);
        nanswers[i].setAttribute('data-key', i);
    }
}

function resposta(dataKey) {
    nquestions[dataKey].classList.toggle("question-bold");
    nanswers[dataKey].classList.toggle("hide");
}


addDataKey();
