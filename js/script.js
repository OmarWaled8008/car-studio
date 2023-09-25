const imgItems = Array.from(document.querySelectorAll(".items img"));
const imgOverLay = document.getElementById("imgOverLay");
const imgIcon = document.getElementById("imgicon");
const iconClose = document.getElementById("closeicon");
const iconNext = document.getElementById("nexticon");
const iconPrev = document.getElementById("previcon");
let index = 0;
for (let i = 0; i < imgItems.length; i++) {
  imgItems[i].addEventListener("click", function (e) {
    index = imgItems.indexOf(e.target);
    imgOverLay.style.display = "flex";
    imgIcon.style.backgroundImage = `url(${e.target.src})`;
  });
}
iconClose.addEventListener("click", function () {
  imgOverLay.style.display = "none";
});

iconNext.addEventListener("click", function () {
  index++;
  index = index % 6;
  console.log(index);
  // if (index === imgItems.length) index = 0;
  imgIcon.style.backgroundImage = `url(${imgItems[index].src})`;
});
iconPrev.addEventListener("click", function () {
  index--;
  if (index < 0) index = imgItems.length - 1;
  imgIcon.style.backgroundImage = `url(${imgItems[index].src})`;
});
imgOverLay.addEventListener("click", function () {
  imgOverLay.style.display = "none";
});
imgicon.addEventListener("click", function (e) {
  e.stopPropagation();
});
