let resultado = document.getElementById("saida");

document.getElementById('texto').addEventListener("change", (el) => {
  let entrada = el.target.value;
  const chave = document.getElementById('chave').value;
  let arrayEntrada = entrada.split('');
  let aux1 = [];

  for(let i = 0; i < arrayEntrada.length; i++){
    aux1.push(arrayEntrada[i])
  }
  console.log(aux1)
  resultado.innerText = aux1
})


// if(arrayEntrada[i].charCodeAt() <= 65 && arrayEntrada.charCodeAt() >= 90){
//   let str = arrayEntrada.charCodeAt()
//   aux1.push(str);
//   console.log(str)
// }