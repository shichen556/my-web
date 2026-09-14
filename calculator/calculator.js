// Basic operations calculator
var feedback = document.getElementById("query");

document.querySelectorAll("button").forEach(
    button => {
        button.addEventListener("click", function(event) {
            let button = event.currentTarget;
            if (button.textContent != "C" && button.textContent != "AC" && button.textContent != "=" && button.textContent!= "Show live alert") {
                feedback.value += button.textContent;
            }

        });
    });

function del() {
    let display = document.getElementById("query");
    display.value = display.value.slice(0, -1);
}

function deleteAll() {
    let display = document.getElementById("query");
    display.value = "";
}

function result() {
    let display = document.getElementById("query");
    let allowedChars = ['0', '1', '2', '3',
        '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '.'
    ];

    for (let i = 0; i < display.value.length; i++) {
        if (allowedChars.includes(display.value[i])) {
            let res = eval(display.value);
            display.value = res;
        } else {
            alert("Error: Only numerical input allowed, try again");
        }
    }
}
