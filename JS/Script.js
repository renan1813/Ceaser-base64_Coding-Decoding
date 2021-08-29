let textoDecodificado = document.getElementById("texto");
let textoCodificado = document.getElementById("saida");
textoDecodificado.innerText = "Type the text"
textoCodificado.innerText = "???? ?? ????"
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

function descodificarLowerCase(letra, chave){
  let contador = letra;

  for(let i = chave; i >= 1; i--){
    if(contador == 97){
      contador = 122;
    }
    else{
      contador--;
    }
  }

  return contador;
}

function descodificarUpperCase(letra, chave){
  let contador = letra;

  for(let i = chave; i >= 1; i--){
    if(contador == 65){
      contador = 90;
    }
    else{
      contador--;
    }
  }

  return contador;
}

// Codificar Caesar

document.getElementById('caesarCoding').addEventListener("click", () => {
  let entrada = document.getElementById("texto").value;
  let chave = document.getElementById("chave").value;
  chave = parseInt(chave);
  let arrayEntrada = entrada.split('');
  let aux1 = [];
  let aux2 = 0;
  let aux3 = "";
  if(chave == 1813){
    alert(`MEU PIPI NO SEU POPO`)
  }
  else{
  for(let i = 0; i < arrayEntrada.length; i++){
    aux2 = arrayEntrada[i].charCodeAt();
    if (aux2 >= 65 && aux2 <= 90){
      aux1.push(codificarUpperCase(aux2, chave));
    }
    else if(aux2 >= 97 && aux2 <= 122){
      aux1.push(codificarLowerCase(aux2, chave))
    }
    else{
      aux1.push(aux2);
    }
  }

  for(let i = 0; i < aux1.length; i++){
    aux1[i] = String.fromCharCode(aux1[i]);
  }

  aux3 = aux1.join("");
  textoCodificado.value = aux3;
}
})

// Descodificar Caesar

document.getElementById('caesarDecoding').addEventListener("click", () => {
  let entrada = document.getElementById("saida").value;
  let chave = document.getElementById("chave").value;
  chave = parseInt(chave);
  let arrayEntrada = entrada.split('');
  let aux1 = [];
  let aux2 = 0;
  let aux3 = "";
  
  if(chave == 1813){
    alert(`MEU POPO NO SEU PIPI`)
  }
  else{
  for(let i = 0; i < arrayEntrada.length; i++){
    aux2 = arrayEntrada[i].charCodeAt();
    if (aux2 >= 65 && aux2 <= 90){
      aux1.push(descodificarUpperCase(aux2, chave));
    }
    else if(aux2 >= 97 && aux2 <= 122){
      aux1.push(descodificarLowerCase(aux2, chave))
    }
    else{
      aux1.push(aux2);
    }
  }

  for(let i = 0; i < aux1.length; i++){
    aux1[i] = String.fromCharCode(aux1[i]);
  }

  aux3 = aux1.join("");
  textoDecodificado.value = aux3;
}
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