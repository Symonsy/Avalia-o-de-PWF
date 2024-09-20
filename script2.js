document.addEventListener("DOMContentLoaded", function () {
    var botaocontraste = document.getElementById("mudarcontraste");
    var resetContraste = document.getElementById("resetcontraste");
    var botaoAumentar = document.getElementById("aumentartexto");
    var botaoDiminuir = document.getElementById("diminuirtexto");

    var tamanho = 16;

    botaoAumentar.addEventListener("click", function() {
        tamanho += 2;
        document.body.style.fontSize = tamanho + "px";
    });

    botaoDiminuir.addEventListener("click", function() {
        if (tamanho > 10) { 
            tamanho -= 2;
            document.body.style.fontSize = tamanho + "px";
        }
    });

    botaocontraste.addEventListener("click", function() {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
    });

    resetContraste.addEventListener("click", function() {
        document.body.style.backgroundColor = '';
        document.body.style.color = '';
    });
});
