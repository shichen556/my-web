// Random reposition of button, score system and mouse coordinates tracking
document.addEventListener("mousemove", function(event) {
    var x = document.getElementById("valueX");
    var y = document.getElementById("valueY");

    x.textContent = parseInt(event.clientX);
    y.textContent = parseInt(event.clientY);
});

function score(event) {
    const buttonElement = document.getElementById("button");
    var scoreElement = document.getElementById("score");

    let button = event.currentTarget;

    if (button === buttonElement) {
        scoreElement.textContent = parseInt(scoreElement.textContent) + 1;
        setPos(button);

    }
}

function setPos(elem) {
    var maxX = window.innerWidth - elem.offsetWidth;
    var maxY = window.innerHeight - elem.offsetHeight;

    var x = Math.floor(Math.random() * maxX);
    var y = Math.floor(Math.random() * maxY);

    elem.style.left = x + "px";
    elem.style.top = y + "px";
}

function restart(event) {
    const resetElement = document.getElementById("reset");
    const buttonElement = document.getElementById("button");
    var scoreElement = document.getElementById("score");

    let button = event.currentTarget;

    if (button === resetElement) {
        scoreElement.textContent = 0;
        buttonElement.style.left = "0px";
        buttonElement.style.top = "200px";
    }
}
