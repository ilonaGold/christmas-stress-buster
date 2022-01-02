const btn = document.getElementById("btn");
let timer = document.getElementById("timer");
let affirmation = document.getElementById("affirmation");
let time = 14;
let relaxTime = time * 60;
const audio = new Audio("christmas_song.mp3");

function countdown() {
     let relaxTimer = setInterval(() => {
        if (relaxTime > 0) {
            document.body.style.backgroundImage = "url(http://www.animationsoftware7.com/img/agifs/snow02.gif)";
            relaxTime--;
            const days = Math.floor(relaxTime / 3600 / 24); 
            const hours = Math.floor(relaxTime / 3600) % 24; 
            const min = Math.floor(relaxTime / 60) % 60; 
            const sec = Math.floor(relaxTime % 60); 
            timer.innerHTML =  `${format(min)}:${format(sec)}`;
            audio.play();
            audio.loop = true;
        } else if (relaxTime <= 0) { 
            clearInterval(relaxTimer);
            affirmation.textContent = "Meet other smiling people!";
            document.body.style.backgroundImage = "none";
            audio.pause();
        }
    }, 1000)
}

function format(t) {
    return t < 10 ? `0${t}` : t;
}

btn.addEventListener("click", countdown);