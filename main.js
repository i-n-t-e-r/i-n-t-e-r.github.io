window.document.onload = function() {
  let clicks = sessionStorage.getItem("clickCount");
  if (clicks % 2 !== 0 || !clicks) {
    document.body.classList.replace("retro-body", "modern-body");
  }
  else {
    document.body.classList.replace("modern-body", "retro-body");
  }
}

function eraToggle() {
  let clicks = sessionStorage.getItem("clickCount");
  if (clicks) {
    sessionStorage.setItem("clickCount", Number(clicks)+1);
  } else {
    sessionStorage.setItem("clickCount", 0);
  }
  console.log(clicks);
  // sessionStorage.clickcount += 1;
  var retroCont = document.getElementsByClassName("retro-container")[0];
  var modernCont = document.getElementsByClassName("modern-container")[0];
  if (clicks % 2 !== 0 || !clicks) {
    retroCont.style.display = "none";
    modernCont.style.display = "block";
    document.body.classList.replace("retro-body", "modern-body");
  }
  else {
    retroCont.style.display = "block";
    modernCont.style.display = "none";
    document.body.classList.replace("modern-body", "retro-body");
  }

  // document.body.classList.toggle("modern-body");
  // var retroCont = document.getElementsByClassName("retro-container")[0];
  // var modernCont = document.getElementsByClassName("modern-container")[0];
  // if (retroCont.style.display === "block" && modernCont.style.display === "none") {
  //   retroCont.style.display = "none";
  //   modernCont.style.display = "block";
  // }
  // else if (retroCont.style.display === "none" && modernCont.style.display === "block") {
  //   retroCont.style.display = "block";
  //   modernCont.style.display = "none";
  // }
  // else {
  //   console.log("Toggle error! :(");
  // }
}
