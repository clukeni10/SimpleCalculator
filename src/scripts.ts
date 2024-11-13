function somar(a: number, b: number): number {
      return a + b;
}

function subtrair(a: number, b: number): number {
      return a - b;
}

function multiplicar(a: number, b: number): number {
      return a * b;
}

function dividir(a: number, b: number): number {
      if (b === 0) {
            throw new Error("Não é possível dividir por zero");
      }
      return a / b;
}

function calcular(): void {
      const numero1 = (document.getElementById("input1") as HTMLInputElement).valueAsNumber;

      const numero2 = (document.getElementById("input2") as HTMLInputElement).valueAsNumber;

      const operacao = (document.getElementById("operacao") as HTMLSelectElement).value;

      let resultado: number | null = null;

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

            if (resultadoElemento){
                  resultadoElemento.innerText = `Resultado: ${resultado}`;
            }
      } catch (error){
            alert(error);
      }
}