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

document.addEventListener("DOMContentLoaded", function() {
    // Referência para o link Contato
    const contatoLink = document.getElementById("contato-link");
    const contatoFormulario = document.getElementById("contato-formulario");

    // Adiciona um evento de clique no link Contato
    contatoLink.addEventListener("click", function(event) {
        event.preventDefault(); // Evita que o link redirecione a página

        // Alterna a visibilidade do formulário
        if (contatoFormulario.style.display === "none") {
            contatoFormulario.style.display = "block";
        } else {
            contatoFormulario.style.display = "none";
        }
    });
});

