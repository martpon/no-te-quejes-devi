const queja = document.getElementById("queja");
const count = document.getElementById("count");

let devisCount = 0;

queja.addEventListener("click",() => {

    devisCount++;

    count.innerText = `${devisCount}`;

    const audio = document.getElementById("audio");
    audio.play()


})