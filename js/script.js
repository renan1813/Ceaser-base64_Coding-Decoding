let textoDecodificado = document.getElementById("texto");
let textoCodificado = document.getElementById("saida");
textoDecodificado.innerText = "Type the text";
textoCodificado.innerText = "???? ?? ????";
function codificarLowerCase(letra, chave)
{
  let contador = letra;

  for (let i = 1; i <= chave; i++)
  {
    if (contador == 122)
    {
      contador = 97;
    }
    else{
      contador++;
    }
  }

  return contador;
}

function codificarUpperCase(letra, chave)
{
  let contador = letra;

  for (let i = 1; i <= chave; i++)
  {
    if (contador == 90)
    {
      contador = 65;
    }
    else
    {
      contador++;
    }
  }

  return contador;
}

function descodificarLowerCase(letra, chave)
{
  let contador = letra;

  for (let i = chave; i >= 1; i--)
  {
    if (contador == 97)
    {
      contador = 122;
    }
    else
    {
      contador--;
    }
  }

  return contador;
}

function descodificarUpperCase(letra, chave)
{
  let contador = letra;

  for (let i = chave; i >= 1; i--)
  {
    if (contador == 65)
    {
      contador = 90;
    }
    else
    {
      contador--;
    }
  }

  return contador;
}

// Codificar Caesar

document.getElementById("caesarCoding").addEventListener("click", () =>
{
  let entrada = document.getElementById("texto").value;
  let chave = document.getElementById("chave").value;
  chave = parseInt(chave);
  let arrayEntrada = entrada.split("");
  let aux1 = [];
  let aux2 = 0;
  let aux3 = "";
  if (chave == 1813)
  {
    alert(`MEU PIPI NO SEU POPO`);
  }
  else
  {
    for (let i = 0; i < arrayEntrada.length; i++)
    {
      aux2 = arrayEntrada[i].charCodeAt();
      if (aux2 >= 65 && aux2 <= 90)
      {
        aux1.push(codificarUpperCase(aux2, chave));
      }
      else if (aux2 >= 97 && aux2 <= 122)
      {
        aux1.push(codificarLowerCase(aux2, chave));
      }
      else
      {
        aux1.push(aux2);
      }
    }

    for (let i = 0; i < aux1.length; i++)
    {
      aux1[i] = String.fromCharCode(aux1[i]);
    }

    aux3 = aux1.join("");
    textoCodificado.value = aux3;
  }
});

// Descodificar Caesar

document.getElementById("caesarDecoding").addEventListener("click", () => {
  let entrada = document.getElementById("saida").value;
  let chave = document.getElementById("chave").value;
  chave = parseInt(chave);
  let arrayEntrada = entrada.split("");
  let aux1 = [];
  let aux2 = 0;
  let aux3 = "";

  if (chave == 1813) 
  {
    alert(`MEU POPO NO SEU PIPI`);
  }
  else
  {
    for (let i = 0; i < arrayEntrada.length; i++)
    {
      aux2 = arrayEntrada[i].charCodeAt();
      if (aux2 >= 65 && aux2 <= 90)
      {
        aux1.push(descodificarUpperCase(aux2, chave));
      }
      else if (aux2 >= 97 && aux2 <= 122)
      {
        aux1.push(descodificarLowerCase(aux2, chave));
      }
      else
      {
        aux1.push(aux2);
      }
    }

    for (let i = 0; i < aux1.length; i++)
    {
      aux1[i] = String.fromCharCode(aux1[i]);
    }

    aux3 = aux1.join("");
    textoDecodificado.value = aux3;
  }
});

document.getElementById('baseCoding').addEventListener("click", () =>
{
  let entrada = document.getElementById('texto').value
  let resultado = btoa(entrada)
  textoCodificado.value = resultado
})

document.getElementById('baseDecoding').addEventListener("click", () =>
{
  let entrada = document.getElementById('saida').value
  let resultado = atob(entrada)
  textoDecodificado.value = resultado
})
// um comentario engraçado, sua risada esta programada para daqui a 142 minutos