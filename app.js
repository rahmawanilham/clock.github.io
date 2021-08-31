// selector
const Det = document.querySelector(".jarum_det");
const Men = document.querySelector(".jarum_men");
const hour = document.querySelector(".jarum_jam");
const html = document.querySelector("html");

// my funct

function tentukanWaktu() {
  const waktuSekarang = new Date();

  // analog clock
  const detik = waktuSekarang.getSeconds();
  const detikDerajat = (detik / 60) * 360 + 90;
  Det.style.transform = `rotate(${detikDerajat}deg)`;

  const menit = waktuSekarang.getMinutes();
  const menitDerajat = (menit / 60) * 360 + (detik / 60) * 6 + 90;
  Men.style.transform = `rotate(${menitDerajat}deg)`;

  const jam = waktuSekarang.getHours();
  const jamDerajat = (jam / 12) * 360 + (menit / 60) * 30 + 90;
  hour.style.transform = `rotate(${jamDerajat}deg)`;

  if (menit < 10) {
    document.querySelector(".digital-clock").innerHTML =
      jam + ":" + "0" + menit;
  } else {
    document.querySelector(".digital-clock").innerHTML = jam + ":" + menit;
  }
}

// event handling
setInterval(tentukanWaktu, 1000);

const buttonTheme = document.querySelector(".header input");
buttonTheme.addEventListener("click", function () {
  if (html.dataset.theme === "light") {
    html.dataset.theme = "dark";
  } else {
    html.dataset.theme = "light";
  }
});

const slider = document.querySelector(".slider");
const links = document.querySelectorAll("a");

function indikator(e) {
  slider.style.left = e.offsetLeft + "px";
  slider.style.width = e.offsetWidth + "px";
}

links.forEach((link) => {
  link.addEventListener("click", function (e) {
    indikator(e.target);
    e.preventDefault();
  });
});
