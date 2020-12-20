
document.addEventListener("DOMContentLoaded", function(event) {
  let clicks = sessionStorage.getItem("clickCount");
  if (!clicks) {
    sessionStorage.setItem("clickCount", 0);
  }
  if (clicks % 2 === 0) {
    showRetroSite();
  }
  else {
    showModernSite();
  }
});

function showModernSite() {
  let retroCont = document.getElementsByClassName("retro-container")[0];
  let modernCont = document.getElementsByClassName("modern-container")[0];
  retroCont.style.display = "none";
  modernCont.style.display = "block";
  document.body.classList.replace("retro-body", "modern-body");
}

function showRetroSite() {
  let retroCont = document.getElementsByClassName("retro-container")[0];
  let modernCont = document.getElementsByClassName("modern-container")[0];
  retroCont.style.display = "block";
  modernCont.style.display = "none";
  document.body.classList.replace("modern-body", "retro-body");
}

function eraToggle() {
  let clicks = sessionStorage.getItem("clickCount");
  clicks = Number(clicks) + 1;
  sessionStorage.setItem("clickCount", clicks);
  if (clicks % 2 === 0) {
    showRetroSite();
  }
  else {
    showModernSite();
  }

}
