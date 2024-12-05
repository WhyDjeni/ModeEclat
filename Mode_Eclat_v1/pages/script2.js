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
  addRedirectListener("blusa5", "./roupas_mulher/blusa5.html");
  addRedirectListener("blusa6", "./roupas_mulher/blusa6.html");
  addRedirectListener("blusa7", "./roupas_mulher/blusa7.html");
  addRedirectListener("blusa8", "./roupas_mulher/blusa8.html");
  addRedirectListener("calca5", "./roupas_mulher/calca5.html");
  addRedirectListener("calca6", "./roupas_mulher/calca6.html");
  addRedirectListener("calca7", "./roupas_mulher/calca7.html");
  addRedirectListener("calca8", "./roupas_mulher/calca8.html");

});
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("camisa1").addEventListener("click", function() {
      window.location.href = "./roupas_homem/camisa1.html"; 
  });
  document.getElementById("camisa2").addEventListener("click", function() {
      window.location.href = "./roupas_homem/camisa2.html"; 
  });
  document.getElementById("camisa3").addEventListener("click", function() {
      window.location.href = "./roupas_homem/camisa3.html"; 
  });
  document.getElementById("camisa4").addEventListener("click", function() {
      window.location.href = "./roupas_homem/camisa4.html"; 
  });
  document.getElementById("camisa5").addEventListener("click", function() {
    window.location.href = "./roupas_homem/camisa5.html"; 
  });
  document.getElementById("camisa6").addEventListener("click", function() {
    window.location.href = "./roupas_homem/camisa6.html"; 
  });
  document.getElementById("camisa7").addEventListener("click", function() {
    window.location.href = "./roupas_homem/camisa7.html"; 
  });
  document.getElementById("camisa8").addEventListener("click", function() {
    window.location.href = "./roupas_homem/camisa8.html"; 
  });
  document.getElementById("calca1").addEventListener("click", function() {
    window.location.href = "./roupas_homem/calca1.html"; 
  });
  document.getElementById("calca2").addEventListener("click", function() {
    window.location.href = "./roupas_homem/calca2.html"; 
  });
  document.getElementById("calca3").addEventListener("click", function() {
    window.location.href = "./roupas_homem/calca3.html"; 
  });
  document.getElementById("calca4").addEventListener("click", function() {
    window.location.href = "./roupas_homem/calca4.html"; 
  });
});
