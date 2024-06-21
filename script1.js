const btnLogin = document.getElementById("btn-login");
const btnLogout = document.getElementById("btn-logout");
function gestisciUtenteLoggato(loggato) {
  if (loggato) {
    btnLogin.style.display = "none";
    btnLogout.style.display = "block";
  } else {
    btnLogin.style.display = "block";
    btnLogout.style.display = "none";
  }
}
if (localStorage.getItem("utenteLoggato") === "true") {
  gestisciUtenteLoggato(true);
} else {
  gestisciUtenteLoggato(false);
}
btnLogin.addEventListener("click", function () {
  localStorage.setItem("utenteLoggato", "true");
  gestisciUtenteLoggato(true);
});
btnLogout.addEventListener("click", function () {
  localStorage.removeItem("utenteLoggato");
  gestisciUtenteLoggato(false);
});
