const resimler = [
  "img/lefttoppics/ecopic1.jpg",
  "img/lefttoppics/ecopic2.jpg",
  "img/lefttoppics/ecopic3.jpg",
];
let resimSirasi = 0;

function resimDegistir() {
  const resimYolu = `img/${resimler[resimSirasi]}`;
  document.getElementById(
    "resimler"
  ).innerHTML = `<img src="${resimYolu}" alt="Resim">`;

  resimSirasi = (resimSirasi + 1) % resimler.length;

  setTimeout(resimDegistir, 2000); // 2 saniyede bir resim değişimi
}

resimDegistir();
