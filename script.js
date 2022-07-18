var slideindex = 1;
showimg(slideindex);
function btn(a) {
  showimg((slideindex = a));
}
function arrow(a) {
  showimg((slideindex += a));
}
function showimg(a) {
  const img = document.getElementsByClassName("images");
  if (a < 1) {
    slideindex = img.length;
  }
  if (a > img.length) {
    slideindex = 1;
  }

  for (i = 0; i < img.length; i++) {
    img[i].style.display = "none";
  }
  img[slideindex - 1].style.display = "block";
  var slide = document.getElementsByClassName("button");
  slide[slideindex - 1].checked = "true";
}

function openbox() {
  document.getElementById("forms").style.display="block";
}
function closebox() {
  document.getElementById("forms").style.display = "none";
}
