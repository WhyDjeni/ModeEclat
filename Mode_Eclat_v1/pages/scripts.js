document.addEventListener('DOMContentLoaded', function () {
    console.log("Página carregada com sucesso!");
  });
  document.addEventListener('DOMContentLoaded', function () {
    // Nome da categoria (pode ser alterado dinamicamente)
    const categoryName = "Mulher"; // Exemplo de nome dinâmico
    
    // Obter os elementos
    const categorySection = document.getElementById('categorySection');
    const categoryTitle = document.getElementById('categoryTitle');
    const categoryBackground = document.getElementById('categoryBackground');
    
    // Atribuir nome à seção e ao título
    categoryTitle.textContent = categoryName;
  
    // Atribuir a imagem de fundo e o texto alternativo
    categoryBackground.src = "https://cdn.builder.io/api/v1/image/assets/TEMP/e542b95d9f38833c8eb5070b9fd091dfbb30470ce48ec649bdee73073032725e?placeholderIfAbsent=true&apiKey=0c9f602e70454795bc5c3060fa79b030";
    categoryBackground.alt = `${categoryName} background`; // Texto alternativo dinâmico
  });

// Adicionando uma ação para o botão "Ver mais"
document.querySelector('.view-more-button').addEventListener('click', function() {
  alert('Carregar mais produtos...');
});

document.getElementById("camisa1").addEventListener("click", function() {
  window.location.href = "camisa1.html"; 
})
document.getElementById("camisa2").addEventListener("click", function() {
  window.location.href = "camisa2.html"; 
});

document.getElementById("camisa3").addEventListener("click", function() {
  window.location.href = "camisa3.html"; 
});
document.getElementById("camisa4").addEventListener("click", function() {
  window.location.href = "camisa4.html"; 
});
