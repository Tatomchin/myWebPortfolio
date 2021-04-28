// Script for Portfolio 

var statusPop1 = false;
var statusPop2 = false;

function popUp1() {
    if (statusPop1) {
        document.getElementById('popWork1').style.visibility = "hidden";
        document.getElementById('BGpopUpBox').style.visibility = "hidden";
        document.getElementById('crossClose').style.visibility = "hidden";
        statusPop1 = false;
    } else {
        document.getElementById('popWork1').style.visibility = "visible";
        document.getElementById('BGpopUpBox').style.visibility = "visible";
        document.getElementById('crossClose').style.visibility = "visible";
        statusPop1 = true;
    }
}

function closePop() {
    if (statusPop1) {
        document.getElementById('popWork1').style.visibility = "hidden";
        document.getElementById('BGpopUpBox').style.visibility = "hidden";
        document.getElementById('crossClose').style.visibility = "hidden";
        statusPop1 = false;
    }

    if (statusPop2) {
        for (let i = 2; i < 5; i++) {
            document.getElementById('popWork' + i).style.display = "none";
        }
        document.getElementById('crossClose').style.visibility = "hidden";
        statusPop2 = false;
    }
}

function popUp2(num) {
    if (statusPop2) {
        for (let i = 2; i < 3; i++) {
            document.getElementById('popWork' + i).style.display = "none";
        }

        document.getElementById('crossClose').style.visibility = "hidden";
        statusPop2 = false;
    } else {
        document.getElementById('popWork' + num).style.display = "block";
        document.getElementById('crossClose').style.visibility = "visible";
        statusPop2 = true;
    }
}