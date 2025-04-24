function calcular() {
  const alcool = parseFloat(document.getElementById('alcool').value);
  const gasolina = parseFloat(document.getElementById('gasolina').value);
  const resultado = document.getElementById('resultado');

  if (isNaN(alcool) || isNaN(gasolina)) {
    resultado.innerText = "Por favor, preencha os dois campos com números válidos.";
    resultado.style.color = "red";
    resultado.style.fontWeight = "bold";
    return;
  }

  const proporcao = alcool / gasolina;

  if (proporcao < 0.7) {
    resultado.innerText = "Abasteça com Álcool.";
    resultado.style.color = "green";
    resultado.style.fontSize = "20px";
    resultado.style.fontWeight = "bold";
  } else {
    resultado.innerText = "Abasteça com Gasolina.";
    resultado.style.color = "blue";
    resultado.style.fontSize = "20px";
    resultado.style.fontWeight = "bold";
  }
}
