let resultado = document.getElementById("saida");

document.getElementById('coding').addEventListener("click", () => {
  let entrada = document.getElementById("texto").value;
  let chave = document.getElementById("chave").value;
  chave = parseInt(chave);
  let arrayEntrada = entrada.split('');
  let aux1 = [];
  let aux2 = 0;

  for(let i = 0; i < arrayEntrada.length; i++){
    aux2 = arrayEntrada.[i].charCodeAt();
    console.log(aux2);
    for(let j = 1; j <= chave; j++){
      if ((aux2+chave) == 90){
        aux2 = 65;
        console.log(aux2);
      }
      else{
        aux2++;
        console.log(aux2);
      }
      console.log(aux2);
    }
    console.log(aux2);
    aux1.push(aux2);
    console.log(aux2);
  }

  for(let i = 0; i < aux1.length; i++){
    aux1[i] = String.fromCharCode(aux1[i]);
  }

  resultado.innerText = aux1
})


// if(arrayEntrada[i].charCodeAt() >= 65 && arrayEntrada[i].charCodeAt() <= 90){
//   aux1.push(arrayEntrada[i].charCodeAt()+chave)
// }
// else if(arrayEntrada[i].charCodeAt() >= 96 && arrayEntrada[i].charCodeAt() <= 122){
//   aux1.push(arrayEntrada[i].charCodeAt()+chave)
// }