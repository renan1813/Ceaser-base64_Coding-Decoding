let resultado = document.getElementById("saida");

function codificarLowerCase(letra, chave){
  let contador = letra;

  for(let i = 1; i <= chave; i++){
    if(contador == 122){
      contador = 97;
    }
    else{
      contador++;
    }
  }

  return contador;
}

function codificarUpperCase(letra, chave){
  let contador = letra;

  for(let i = 1; i <= chave; i++){
    if(contador == 90){
      contador = 65;
    }
    else{
      contador++;
    }
  }

  return contador;
}

document.getElementById('coding').addEventListener("click", () => {
  let entrada = document.getElementById("texto").value;
  let chave = document.getElementById("chave").value;
  chave = parseInt(chave);
  let arrayEntrada = entrada.split('');
  let aux1 = [];
  let aux2 = 0;

  for(let i = 0; i < arrayEntrada.length; i++){
    aux2 = arrayEntrada[i].charCodeAt();
    if (aux2 >= 65 && aux2 <= 90){
      aux1.push(codificarUpperCase(aux2, chave));
    }
    else if(aux2 >= 97 && aux2 <= 122){
      aux1.push(codificarLowerCase(aux2, chave))
    }
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



// ----------------------------------------------------------------------------------------
// let resultado = document.getElementById("saida");

// function codificarLowerCase(letra, chave){
//   let contador = letra;

//   for(let i = 1; i <= chave; i++){
//     if(contador == 122){
//       contador = 97;
//     }
//     else{
//       contador++;
//     }
//   }

// }

// function codificarUpperCase(letra, chave){
//   let contador = letra;

//   for(let i = 1; i <= chave; i++){
//     if(contador == 90){
//       contador = 65;
//     }
//     else{
//       contador++;
//     }
//   }

// }

// document.getElementById('coding').addEventListener("click", () => {
//   let entrada = document.getElementById("texto").value;
//   let chave = document.getElementById("chave").value;
//   chave = parseInt(chave);
//   let arrayEntrada = entrada.split('');
//   let aux1 = [];
//   let aux2 = 0;

//   for(let i = 0; i < arrayEntrada.length; i++){
//     aux2 = arrayEntrada[i].charCodeAt();
//     console.log(aux2);
//     for(let j = 1; j <= chave; j++){
//       if ((aux2+chave) == 90){
//         aux2 = 65;
//         console.log(aux2);
//       }
//       else{
//         aux2++;
//         console.log(aux2);
//       }
//       console.log(aux2);
//     }
//     console.log(aux2);
//     aux1.push(aux2);
//     console.log(aux2);
//   }

//   for(let i = 0; i < aux1.length; i++){
//     aux1[i] = String.fromCharCode(aux1[i]);
//   }

//   resultado.innerText = aux1
// })