function stopclicked() {
    document.getElementById("stopButton").style.backgroundColor = "#df1124";
    document.getElementById("stopLight").style.backgroundColor = "#df1124";

    document.getElementById("readyButton").style.backgroundColor = "#4b5069";
    document.getElementById("readyLight").style.backgroundColor = "#4b5069";
    document.getElementById("goButton").style.backgroundColor = "#4b5069";
    document.getElementById("goLight").style.backgroundColor = "#4b5069";
}

function readyclicked() {
    document.getElementById("readyButton").style.backgroundColor = "#f7c948";
    document.getElementById("readyLight").style.backgroundColor = "#f7c948";

    document.getElementById("stopButton").style.backgroundColor = "#4b5069";
    document.getElementById("stopLight").style.backgroundColor = "#4b5069";
    document.getElementById("goButton").style.backgroundColor = "#4b5069";
    document.getElementById("goLight").style.backgroundColor = "#4b5069";
}

function goclicked() {
    document.getElementById("goButton").style.backgroundColor = "#199473";
    document.getElementById("goLight").style.backgroundColor = "#199473";

    document.getElementById("stopButton").style.backgroundColor = "#4b5069";
    document.getElementById("stopLight").style.backgroundColor = "#4b5069";
    document.getElementById("readyButton").style.backgroundColor = "#4b5069";
    document.getElementById("readyLight").style.backgroundColor = "#4b5069";

}