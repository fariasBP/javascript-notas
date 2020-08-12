
let destino = document.getElementById("destino");
let circle = document.getElementById("circle");

destino.addEventListener("dragover", (e)=>{ // PERMITIR
    console.log("dragover");
    e.preventDefault();
})
destino.addEventListener("drop", (e)=>{ // SOLTAR
    console.log("drop");
    e.preventDefault();
    var data = e.dataTransfer.getData('text/plain');
    e.target.appendChild(document.getElementById(data));
})
circle.addEventListener("dragstart", (e)=>{ // ARRASTRAR
    console.log("dragstart");
    console.log(e.dataTransfer.setData("text/plain", e.target.id));
})