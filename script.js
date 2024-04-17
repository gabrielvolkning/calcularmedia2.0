function calcularMedia() {
    var numerosStr = document.getElementById("numerosInput").value;
    var numeros = numerosStr.split(",").map(Number);

    // Verifica se há números no array
    if (numeros.length === 0 || isNaN(numeros[0])) {
        document.getElementById("resultado").innerText = "Por favor, insira números válidos.";
        return;
    }

    var soma = numeros.reduce(function(total, numero) {
        return total + numero;
    }, 0);

    var media = soma / numeros.length;

    document.getElementById("resultado").innerText = "A média é: " + media.toFixed(2);
}