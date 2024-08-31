// Relogio
function relogio() {
    let date = new Date();

    let hours = date.getHours();

    let minutes = date.getMinutes();

    let seconds = date.getSeconds();
    minutes = minutes < 10 ? 0 + minutes : minutes;

    seconds = seconds < 10 ? 0 + seconds : seconds;

    let time = hours + ":" + minutes + ":" + seconds;
    document.getElementById("relogio").innerHTML = time;

    setTimeout(relogio, 1000);
}
relogio();