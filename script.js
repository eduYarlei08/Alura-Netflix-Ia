
/**
 * Gerenciador de seleção de perfil
 * Quando um perfil é clicado, seus dados (nome e imagem) são salvos no localStorage
 * para serem usados na página de catálogo
 */
document.querySelectorAll('.profile a').forEach(link => {
    // Adiciona listener de clique em cada link de perfil
    link.addEventListener('click', () => {
        // Encontra o elemento pai do perfil
        const profile = link.closest('.profile');
        
        // Extrai o nome do perfil da tag <figcaption>
        const nome = profile.querySelector('figcaption').textContent;
        
        // Extrai a URL da imagem do perfil da tag <img>
        const imagem = profile.querySelector('img').src;
        
        // Salva o nome do perfil no localStorage
        localStorage.setItem('perfilAtivoNome', nome);
        
        // Salva a URL da imagem do perfil no localStorage
        localStorage.setItem('perfilAtivoImagem', imagem);
    });
});
