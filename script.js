 <script>
    // Função que é chamada quando o usuário compra um produto
    function comprar(produto) {
      alert("Você comprou: " + produto); // Mostra um alerta com o produto comprado
    }

    // Função para abrir/fechar o modal do carrinho
    function toggleCart() {
      const overlay = document.getElementById('cartOverlay');
      overlay.style.display = (overlay.style.display === 'flex') ? 'none' : 'flex';
    }
  </script>
