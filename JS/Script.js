function dobraASoma(lista) {
    // Escreva aqui seu código
    let aux1 = "";
    for(let i = 0; i < lista.length; i++){
      aux1 += lista[i];
      console.log(aux1)
    }
    return aux1*2;
  }

  let teste=[1,2,3,4]
  teste.length
console.log(dobraASoma(teste))