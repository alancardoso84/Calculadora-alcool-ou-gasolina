function calcular() {
  const alcool = parseFloat(document.getElementById('alcool').value);
  const gasolina = parseFloat(document.getElementById('gasolina').value);
  const resultado = document.getElementById('resultado');

  if (isNaN(alcool) || isNaN(gasolina)) {
    resultado.innerText = "Por favor, preencha os dois campos com números válidos.";
    return;
  }

  const proporcao = alcool / gasolina;

  if (proporcao < 0.7) {
    resultado.innerText = "Abasteça com Álcool.";
  } else {
    resultado.innerText = "Abasteça com Gasolina.";
  }
}
