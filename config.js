//A lógica do efeito consiste em cada letra ser adiconada após a outra

function typeWrite(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach( function(letra, i) {
        setTimeout(function() {
            elemento.innerHTML += letra;
        }, 80 * i)
    })
        
    };


const frase = document.querySelector('h1');
typeWrite(frase);
