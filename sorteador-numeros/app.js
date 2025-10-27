

function sortear() {

    let numeroMinimo = Number(document.getElementById("de").value);
    let numeroMaximo = Number(document.getElementById("ate").value);
    let quantidadeDeSorteios = Number(document.getElementById("resultado").value); 
    
    for(let i = 1; i >= quantidadeDeSorteios; i++){
     
    let numeroSorteado = Math.floor(Math.random() * (numeroMaximo - numeroMinimo + 1)) + numeroMinimo;

    let numerosGanhadores = [];
    numerosGanhadores.push(numeroSorteado);

    }
    
    document.querySelector("resultado") = numerosGanhadores;
    alert(numerosGanhadores);

}