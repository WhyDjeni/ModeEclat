document.addEventListener('DOMContentLoaded', function() {
  function addRedirectListener(elementId, destination) {
      document.getElementById(elementId).addEventListener("click", function() {
          window.location.href = destination; 
      });
  }

  addRedirectListener("blusa1", "./roupas_mulher/blusa1.html");
  addRedirectListener("blusa2", "./roupas_mulher/blusa2.html");
  addRedirectListener("blusa3", "./roupas_mulher/blusa3.html");
  addRedirectListener("blusa4", "./roupas_mulher/blusa4.html");

  addRedirectListener("camisa1", "./roupas_homem/camisa1.html");
  addRedirectListener("camisa2", "./roupas_homem/camisa2.html");
  addRedirectListener("camisa3", "./roupas_homem/camisa3.html");
  addRedirectListener("camisa4", "./roupas_homem/camisa4.html");
});
