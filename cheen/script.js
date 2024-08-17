let btnn = document.getElementById('btn');
let audio = new Audio("cheen.mp3"); // Create an Audio object
audio.loop = true;
let para = document.querySelector('p'); // Assuming 'para' is a <p> tag
let img = document.querySelector('img'); // Assuming you have an <img> tag
let body = document.querySelector('body'); // Assuming you have a <body> tag

btnn.addEventListener('click', () => {
    para.textContent = 'CHEEN TAPAK DAM DAM';
    img.src = "cheen.gif";
    audio.play(); // Play the audio
    body.style.background = "black";
    btnn.style.display = "none";
});

