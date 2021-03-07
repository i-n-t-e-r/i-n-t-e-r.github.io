function changeBackground(id) {
  urlPath = "url(./img/" + id + ".jpg" + ")";
  console.log(urlPath);
  document.getElementById("store").style.backgroundImage = urlPath;
}

function restoreBackground() {
    document.getElementById("store").style.backgroundImage = 'none';
}
