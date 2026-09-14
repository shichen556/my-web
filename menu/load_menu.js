fetch('/menu/menu.html') // Loads menu.html
    .then(response => response.text()) // Converts the response into text (string of text)
    .then(data => {
        document.getElementById('menu').innerHTML = data; // Inserts (replace) the text into a <div> tag which id is 'menu'
    });
