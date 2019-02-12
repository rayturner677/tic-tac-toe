VAL = "X";
xWin = false;

function swapTurns() {
    VAL = VAL === "X" ? "O" : "X";
    // if (VAL === "X") {
    //     VAL = "O";
    // } else {
    //     VAL = "X";
    // }
}

function gameSetup() {
    const tdAll = document.querySelectorAll("td");

    tdAll.forEach(function(td) {
        td.addEventListener("click", function() {
            if (!xWin) {
                this.innerText = VAL;
                this.classList.add(VAL);
                checkPattern();
                swapTurns();
            }
        });
    });
}

function checkPattern() {
    var patterns = [
        $(`#one.${VAL} , #two.${VAL} , #three.${VAL}`),
        $(`#four.${VAL}, #five.${VAL}, #six.${VAL}`),
        $(`#seven.${VAL}, #eight.${VAL}, #nine.${VAL}`),
        $(`#one.${VAL}, #four.${VAL}, #seven.${VAL}`),
        $(`#two.${VAL}, #five.${VAL}, #eight.${VAL}`),
        $(`#three.${VAL}, #six.${VAL}, #nine.${VAL}`),
        $(`#one.${VAL}, #five.${VAL}, #nine.${VAL}`),
        $(`#three.${VAL}, #five.${VAL}, #seven.${VAL}`)
    ];

    var winner = patterns.find(pattern => pattern.length === 3);

    xWin = winner !== undefined;

    $(winner).addClass("win");

    if (winner && VAL === "X") {
        document.querySelector("#win1").classList.remove("hide");
        document.querySelector("#win1").classList.add("show");
    }
    if (winner && VAL === "O") {
        document.querySelector("#win2").classList.remove("hide");
        document.querySelector("#win2").classList.add("show");
    }
}

function lockInput() {
    var box = document.querySelector(".test");
    if (box !== null) {
        box.setAttribute = disable;
    } else {
    }
}

window.addEventListener("load", gameSetup);
