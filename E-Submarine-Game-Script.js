function my() {
    document.getElementById("youSubmarine").style.transition = "10s";
    document.getElementById("youSubmarine").style.top = "70px";
    document.getElementById("youSubmarine").style.left = "40px";
    document.getElementById("enemySubmarine").style.transition = "10s";
    document.getElementById("enemySubmarine").style.top = "70px";
    document.getElementById("enemySubmarine").style.right = "40px";
}

function my2() {
    document.getElementById("trial4").innerHTML = "1";
    var dS = Number(document.getElementById("dS").value);
    if (dS < "0") {
        document.getElementById("dS").value = "0";
    }
    if (dS > "400") {
        document.getElementById("dS").value = "400";
    }
    var dS = Number(document.getElementById("dS").value);
    document.getElementById("trial3").innerHTML = dS;
    var youSubmarine5 = document.getElementById("youSubmarine");
    var youSubmarine = window.getComputedStyle(youSubmarine5, null).getPropertyValue("top");
    document.getElementById("trial").innerHTML = youSubmarine;
    var youSubmarine4 = document.getElementById("trial").innerHTML;
    if (youSubmarine4.length == 4) {
        var youSubmarine2 = document.getElementById("trial").innerHTML.slice(0, 2);
        var youSubmarine3 = Number(youSubmarine2);
    }
    if (youSubmarine4.length == 5) {
        var youSubmarine2 = document.getElementById("trial").innerHTML.slice(0, 3);
        var youSubmarine3 = Number(youSubmarine2);
    }
    var differance = Number((youSubmarine3 - 70) - dS);
    if (differance < 0) {
        setTimeout(() => {
            document.getElementById("youSubmarine").style.transition = "0.05s";
            document.getElementById("trial4").innerHTML = "2";
            my4()
        }, 0)
    }
    if (differance > 0) {
        setTimeout(() => {
            document.getElementById("youSubmarine").style.transition = "0.05s";
            document.getElementById("trial4").innerHTML = "2";
            my5()
        }, 0)
    }
}

function my4() {
    var youSubmarine5 = document.getElementById("youSubmarine");
    var youSubmarine = window.getComputedStyle(youSubmarine5, null).getPropertyValue("top");
    document.getElementById("trial").innerHTML = youSubmarine;
    var youSubmarine4 = document.getElementById("trial").innerHTML;
    if (youSubmarine4.length == 4) {
        var youSubmarine2 = document.getElementById("trial").innerHTML.slice(0, 2);
        var youSubmarine3 = Number(youSubmarine2);
    }
    if (youSubmarine4.length == 5) {
        var youSubmarine2 = document.getElementById("trial").innerHTML.slice(0, 3);
        var youSubmarine3 = Number(youSubmarine2);
    }
    document.getElementById("youSubmarine").style.top = youSubmarine3 + 1 + "px";
    if (document.getElementById("trial4").innerHTML == "1") {
        document.getElementById("diveAt").click();
    }
    if ((youSubmarine3 - 70) != document.getElementById("trial3").innerHTML && document.getElementById("trial4").innerHTML == "2") {
        setTimeout(() => {
            my4()
        }, 0)
    }
}

function my5() {
    var youSubmarine5 = document.getElementById("youSubmarine");
    var youSubmarine = window.getComputedStyle(youSubmarine5, null).getPropertyValue("top");
    document.getElementById("trial").innerHTML = youSubmarine;
    var youSubmarine4 = document.getElementById("trial").innerHTML;
    if (youSubmarine4.length == 4) {
        var youSubmarine2 = document.getElementById("trial").innerHTML.slice(0, 2);
        var youSubmarine3 = Number(youSubmarine2);
    }
    if (youSubmarine4.length == 5) {
        var youSubmarine2 = document.getElementById("trial").innerHTML.slice(0, 3);
        var youSubmarine3 = Number(youSubmarine2);
    }
    document.getElementById("youSubmarine").style.top = (youSubmarine3 - 1) + "px";
    if (document.getElementById("trial4").innerHTML == "1") {
        document.getElementById("diveAt").click();
    }
    if ((youSubmarine3 - 70) != document.getElementById("trial3").innerHTML && document.getElementById("trial4").innerHTML == "2") {
        setTimeout(() => {
            my5()
        }, 0)
    }
}

function my3() {
    document.getElementById("trial5").innerHTML = "mousedown";
    document.getElementById("youSubmarine").style.transition = "0.1s";
    setTimeout(() => {
        my9()
    }, 0)
}

function my6() {
    document.getElementById("trial5").innerHTML = "mouseup";
}

function my9() {
    var youSubmarine2 = document.getElementById("youSubmarine");
    var youSubmarine = window.getComputedStyle(youSubmarine2, null).getPropertyValue("left");
    document.getElementById("trial6").innerHTML = youSubmarine;
    var youSubmarine5 = document.getElementById("trial6").innerHTML;
    if (youSubmarine5.length == 3) {
        var youSubmarine3 = document.getElementById("trial6").innerHTML.slice(0, 1);
        var youSubmarine4 = Number(youSubmarine3);
    }
    if (youSubmarine5.length == 4) {
        var youSubmarine3 = document.getElementById("trial6").innerHTML.slice(0, 2);
        var youSubmarine4 = Number(youSubmarine3);
    }
    if (youSubmarine5.length == 5) {
        var youSubmarine3 = document.getElementById("trial6").innerHTML.slice(0, 3);
        var youSubmarine4 = Number(youSubmarine3);
    }
    if (youSubmarine5.length == 6) {
        var youSubmarine3 = document.getElementById("trial6").innerHTML.slice(0, 4);
        var youSubmarine4 = Number(youSubmarine3);
    }
    document.getElementById("youSubmarine").style.left = (youSubmarine4 - 1) + "px";
    if (document.getElementById("trial5").innerHTML == "mousedown") {
        setTimeout(() => {
            my9()
        }, 0)
    }
}

function my7() {
    document.getElementById("trial7").innerHTML = "mousedown";
    document.getElementById("youSubmarine").style.transition = "0.1s";
    setTimeout(() => {
        my10()
    }, 0)
}

function my8() {
    document.getElementById("trial7").innerHTML = "mouseup";
}

function my10() {
    var youSubmarine2 = document.getElementById("youSubmarine");
    var youSubmarine = window.getComputedStyle(youSubmarine2, null).getPropertyValue("left");
    document.getElementById("trial8").innerHTML = youSubmarine;
    var youSubmarine5 = document.getElementById("trial8").innerHTML;
    if (youSubmarine5.length == 3) {
        var youSubmarine3 = document.getElementById("trial8").innerHTML.slice(0, 1);
        var youSubmarine4 = Number(youSubmarine3);
    }
    if (youSubmarine5.length == 4) {
        var youSubmarine3 = document.getElementById("trial8").innerHTML.slice(0, 2);
        var youSubmarine4 = Number(youSubmarine3);
    }
    if (youSubmarine5.length == 5) {
        var youSubmarine3 = document.getElementById("trial8").innerHTML.slice(0, 3);
        var youSubmarine4 = Number(youSubmarine3);
    }
    if (youSubmarine5.length == 6) {
        var youSubmarine3 = document.getElementById("trial8").innerHTML.slice(0, 4);
        var youSubmarine4 = Number(youSubmarine3);
    }
    document.getElementById("youSubmarine").style.left = (youSubmarine4 + 1) + "px";
    if (document.getElementById("trial7").innerHTML == "mousedown") {
        setTimeout(() => {
            my10()
        }, 0)
    }
}



function launchMissile() {
    var missile = document.createElement("INPUT");
    missile.setAttribute("type", "range");
    missile.style.position = "relative";
    missile.style.width = "500px";
    missile.style.height = "20px";
    missile.style.min = "1";
    missile.style.max = "500";
    missile.style.id = "missile";
    // missile.style.position = "relative";
    // missile.style.width = "500px";
    // missile.style.height = "20px";
    // missile.min = "1";
    // missile.max = "500";
    // missile.id = "missile";
    document.getElementById("youSubmarine").appendChild(missile);
}
