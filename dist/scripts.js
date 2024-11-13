"use strict";
function somar(a, b) {
    return a + b;
}
function subtrair(a, b) {
    return a - b;
}
function multiplicar(a, b) {
    return a * b;
}
function dividir(a, b) {
    if (b === 0) {
        throw new Error("Não é possível dividir por zero");
    }
    return a / b;
}
function calcular() {
    const numero1 = document.getElementById("input1").valueAsNumber;
    const numero2 = document.getElementById("input2").valueAsNumber;
    const operacao = document.getElementById("operacao").value;
    let resultado = null;
    try {
        switch (operacao) {
            case '+':
                resultado = somar(numero1, numero2);
                break;
            case '-':
                resultado = subtrair(numero1, numero2);
                break;
            case '*':
                resultado = multiplicar(numero1, numero2);
                break;
            case '/':
                resultado = dividir(numero1, numero2);
                break;
            default:
                alert("Operação inválida!");
                return;
        }
        const resultadoElemento = document.getElementById("resultado");
        if (resultadoElemento) {
            resultadoElemento.innerText = `Resultado: ${resultado}`;
        }
    }
    catch (error) {
        alert(error);
    }
}
