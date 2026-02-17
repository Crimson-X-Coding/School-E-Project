 function test(){
    alert("working")
 }

 document.addEventListener("DOMContentLoaded", function () {

  const overlay = document.getElementById("cookieOverlay");
  const acceptBtn = document.getElementById("acceptCookies");

  if (localStorage.getItem("cookiesAccepted") === "true") {
    overlay.style.display = "none";
  } else {
    document.body.style.overflow = "hidden";
  }

  acceptBtn.addEventListener("click", function () {
    localStorage.setItem("cookiesAccepted", "true");
    overlay.style.display = "none";
    document.body.style.overflow = "auto";
  });

});