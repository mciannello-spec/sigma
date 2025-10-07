let cartas=["😂","🤕","🦄","🍟","🍓","🥕","🚒","🌈","🏄‍♂️","🤞"];
let mazo=cartas+ cartas
let tablero= document.getElementById('tablero');

for (let i=0;i<mazo.length;i++){
tablero.innerHTML+="<div class='carta'>"+cartas[Math.floor(Math.random() * cartas.length)]+"</div>"
}