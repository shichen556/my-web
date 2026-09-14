let interval = null;
let i = 0;

const colors = [
    "#FFFACD", // amarillo suave
    "#FFDAB9", // melocotón claro
    "#FFB6C1", // rosa empolvado
    "#F5F5DC", // beige cálido
    "#F08080", // coral suave
    "#E6E6FA", // lavanda claro
    "#DDA0DD", // violeta pastel
    "#DCDCDC", // gris humo
    "#C1E1C1", // verde matcha
    "#B0E0E6", // azul pastel
    "#ADD8E6", // cielo suave
    "#98FB98" // verde menta
];

function startRGB() {
    if (!interval) {
        interval = setInterval(function() {
            document.body.style.backgroundColor = colors[i];
            if (i < colors.length) {
                i++;
            } else {
                i = 0;
            }
        }, 1000);
    }
}

function stopRGB() {
    clearInterval(interval);
    interval = null;
    document.body.style.backgroundColor = "aliceblue";
}

function changeRGBMode(event) {
    const onButton = document.getElementById("on");
    const offButton = document.getElementById("off");

    let button = event.currentTarget;

    if (button === onButton) {
        startRGB();
        onButton.classList.toggle('hidden');
        offButton.classList.toggle('hidden');
    } else if (button === offButton) {
        stopRGB();
        offButton.classList.toggle('hidden');
        onButton.classList.toggle('hidden');
    }
}
