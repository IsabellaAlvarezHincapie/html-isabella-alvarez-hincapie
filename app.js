document.addEventListener("DOMContentLoaded", () => {
  const cardsAdj = [
    { name: "aeropress", img: "img/aeropress.jpg" },
    { name: "chemex", img: "img/chemex.jpg" },
    { name: "moka", img: "img/moka.jpg" },
    { name: "sifon", img: "img/sifon.jpg" },
    { name: "ibrik", img: "img/ibrik.jpg" },
    { name: "hario", img: "img/hario.jpg" },
    { name: "aeropress", img: "img/aeropress.jpg" },
    { name: "chemex", img: "img/chemex.jpg" },
    { name: "moka", img: "img/moka.jpg" },
    { name: "sifon", img: "img/sifon.jpg" },
    { name: "ibrik", img: "img/ibrik.jpg" },
    { name: "hario", img: "img/hario.jpg" }
  ];
  const cuadricula = document.querySelector(".cuadricula");
  const resultado = document.querySelector("#resultado");
  var cartasEscogidas = [];
  var cartasEscogidasId = [];
  var cartasGanadas = [];

  function crearTablero() {
    for (let i = 0; i < cardsAdj.length; i++) {
      var carta = document.createElement("img");
      carta.setAttribute("src", "images/reverso.png");

      carta.setAttribute("data-id", i);
      carta.addEventListener("clisck", voltearCarta);

      cuadricula.appendChild(carta);
    }
  }
});
