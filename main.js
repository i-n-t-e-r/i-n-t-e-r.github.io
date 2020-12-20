function eraToggle() {
  document.body.classList.toggle("modern-body");
  var retroCont = document.getElementsByClassName("retro-container")[0];
  var modernCont = document.getElementsByClassName("modern-container")[0];
  if (retroCont.style.display === "block" && modernCont.style.display === "none") {
    retroCont.style.display = "none";
    modernCont.style.display = "block";
  }
  else if (retroCont.style.display === "none" && modernCont.style.display === "block") {
    retroCont.style.display = "block";
    modernCont.style.display = "none";
  }
  else {
    console.log("Toggle error! :(");
  }
}
