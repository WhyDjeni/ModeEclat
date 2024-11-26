document.getElementById("shop-now").addEventListener("click", function() {
    alert("Redirecionando para a seção de produtos!");
    window.location.href = "#produtos";
});

// Função que alterna a classe 'favorited' para alterar a cor do coração
function toggleFavorite(element) {
    element.classList.toggle('favorited');
}
