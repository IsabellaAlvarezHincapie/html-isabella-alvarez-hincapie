document.addEventListener("DOMContentLoaded", () => {
  const cardsAdj = [
    { name: "aeropress", img: "images/aeropress.jpg" },
    { name: "chemex", img: "images/chemex.jpg" },
    { name: "moka", img: "images/moka.jpg" },
    { name: "sifon", img: "images/sifon.jpg" },
    { name: "ibrik", img: "images/ibrik.jpg" },
    { name: "hario", img: "images/hario.jpg" },
    { name: "aeropress", img: "images/aeropress.jpg" },
    { name: "chemex", img: "images/chemex.jpg" },
    { name: "moka", img: "images/moka.jpg" },
    { name: "sifon", img: "images/sifon.jpg" },
    { name: "ibrik", img: "images/ibrik.jpg" },
    { name: "hario", img: "images/hario.jpg" }
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
    this.setAttribute("src", cartasTamano);

    if (cartasEscogidas.lenght === 2) {
      setTimeout(verificarpareja, 1000);
    }
  }
  crearTablero();
});
