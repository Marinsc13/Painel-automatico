function gerarTabuadas() {

    let display = document.getElementById("resultado");
    let conteudo = "";
    let base = 1;

    // condição
    while (base <= 10) {

        conteudo += "<div class='tabuada'>";
        conteudo += "<h3>Tabuada do " + base + "</h3>";

        let i = 1;

        while (i <= 10) {

            let resultado = base * i;

            conteudo +=
                base + " x " +
                i + " = " +
                resultado + "<br>";

            // incremento
            i++;
        }

        conteudo += "</div>";

        // incremento
        base++;
    }

    display.innerHTML = conteudo;
}