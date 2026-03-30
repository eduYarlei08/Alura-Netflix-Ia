// Importa o array de categorias do arquivo de dados
import { categories } from './data.js';

// Importa a função para criar componentes de carrossel
import { createCarousel } from './components/Carousel.js';

/**
 * Executa o código assim que o DOM estiver completamente carregado
 * Responsável por:
 * 1. Recuperar dados do perfil selecionado do localStorage
 * 2. Atualizar a navbar com nome e imagem do perfil
 * 3. Gerar carrosséis de categorias na página
 */
document.addEventListener('DOMContentLoaded', () => {
    // Recupera o nome do perfil ativo salvo no localStorage
    const nomePerfil = localStorage.getItem('perfilAtivoNome');
    
    // Recupera a URL da imagem do perfil ativo salvo no localStorage
    const imagemPerfil = localStorage.getItem('perfilAtivoImagem');

    // Verifica se ambos os dados (nome e imagem) estão disponíveis
    if (nomePerfil && imagemPerfil) {
        // Seleciona o elemento da navbar que mostra o nome do perfil
        const kidsLink = document.querySelector('.kids-link');
        
        // Seleciona a imagem do ícone de perfil na navbar
        const profileIcon = document.querySelector('.profile-icon');
        
        // Atualiza o texto exibido com o nome do perfil escolhido
        if (kidsLink) kidsLink.textContent = nomePerfil;
        
        // Atualiza a src da imagem com a imagem do perfil escolhido
        if (profileIcon) profileIcon.src = imagemPerfil;
    }

    // Seleciona o container principal onde os carrosséis serão adicionados
    const container = document.getElementById('main-content');
    
    // Verifica se o container existe antes de tentar usá-lo
    if (container) {
        // Itera sobre cada categoria de conteúdo
        categories.forEach(category => {
            // Cria um carrossel para a categoria atual
            const carousel = createCarousel(category);
            
            // Adiciona o carrossel ao container da página
            container.appendChild(carousel);
        });
    }
});
