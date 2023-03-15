document.addEventListener("DOMContentLoaded", () => {
  const cardsAdj = [
    { name: "aeropress", img: "images/aeropress.jpeg" },
    { name: "chemex", img: "images/chemex.jpeg" },
    { name: "moka", img: "images/moka.jpeg" },
    { name: "sifon", img: "images/sifon.jpeg" },
    { name: "ibrik", img: "images/ibrik.jpeg" },
    { name: "hario", img: "images/hario.jpeg" },
    { name: "aeropress", img: "images/aeropress.jpeg" },
    { name: "chemex", img: "images/chemex.jpeg" },
    { name: "moka", img: "images/moka.jpeg" },
    { name: "sifon", img: "images/sifon.jpeg" },
    { name: "ibrik", img: "images/ibrik.jpeg" },
    { name: "hario", img: "images/hario.jpeg" }
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
      carta.addEventListener("click", voltearCarta);
      cuadricula.appendChild(carta);
    }
  }
  function voltearCarta() {
    var cardId = this.getAttribute("data-id");
    cartasEscogidas.push(cardsAdj[cardId].name);
    cartasEscogidasId.push(cardId);
    this.setAttribute("src", cardsAdj[cardId].img);
    if (cartasEscogidas.lenght === 2) {
      setTimeout(verificarPareja, 1000);
    }
  }
  crearTablero();
});
