function onDocumentReady() {
    const isLogged = localStorage.getItem("isLogged");
    if (isLogged === "true") {const nodeWelmcome = document.createElement("h1");
        nopeWelmcome.textContent = "Welcome";
        const nodeRoot = document.getElementById("root");
        nodeRoot.appendChild(nodeWelmcome);}
      
      else { 
        const nodeButtonLogin = document.createElement("button");
        nodeButtonLogin.textContent = "Login";
    function onButtonLoginClick() {
        localStorage.setItem("isLogged", "true");
    }
    nodeButtonLogin.addEventListener("click", onButtonLoginClick);
}
document.addEventListener("DOMContentLoaded", onDocumentReady);