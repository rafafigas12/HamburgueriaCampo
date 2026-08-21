document.addEventListener('DOMContentLoaded', () => {

    // --- LÓGICA DO MENU HAMBÚRGUER (MOBILE) ---
    const menuToggle = document.getElementById('menu-toggle') || document.getElementById('mobile-menu') || document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.navbar nav');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = menuToggle.querySelector('i');
            if (icon) {
                if (navMenu.classList.contains('active')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-xmark');
                } else {
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                }
            }
        });

        // Fechar o menu ao clicar num link de navegação
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }

    const containerLojas = document.getElementById('lojas-container');

    // O JavaScript só vai tentar criar as lojas se encontrar o container na página atual
    if (containerLojas) {

        // --- 1. CRIAR A ESTRUTURA DO MODAL (INVISÍVEL POR DEFEITO) ---
        const modal = document.createElement('div');
        modal.id = 'loja-modal';
        modal.classList.add('modal'); // Classe que vamos usar no CSS
        modal.innerHTML = `
            <div class="modal-content">
                <span class="fechar-modal" id="fechar-btn">&times;</span>
                <div id="modal-info"></div>
            </div>
        `;
        document.body.appendChild(modal); // Adiciona o modal no fundo da página

        const modalInfo = document.getElementById('modal-info');
        const fecharBtn = document.getElementById('fechar-btn');

        function abrirModal(loja) {
            modalInfo.innerHTML = `
                <h2 class="modal-titulo">${loja.nome}</h2>
                
                <div class="modal-detalhes">
                    <div class="detalhe-item">
                        <i class="fa-solid fa-location-dot"></i>
                        <p>${loja.morada}<br>${loja.codigo_postal}</p>
                    </div>
                    
                    <div class="detalhe-item">
                        <i class="fa-solid fa-phone"></i>
                        <p><a href="tel:${loja.telefone}">${loja.telefone}</a></p>
                    </div>
                    
                    <div class="detalhe-item">
                        <i class="fa-solid fa-clock"></i>
                        <p>${loja.horario.dias}<br>${loja.horario.horas}</p>
                    </div>
                </div>
                
                <a href="${loja.link_maps}" target="_blank" class="btn-primary modal-btn">
                    <i class="fa-solid fa-map-location-dot"></i> Abrir Google Maps
                </a>
            `;
            modal.classList.add('mostrar'); // Mostra a janela
        }

        // Fechar o modal ao clicar no botão 'X'
        fecharBtn.addEventListener('click', () => {
            modal.classList.remove('mostrar');
        });

        // Fechar o modal ao clicar na zona escura à volta da caixa
        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.classList.remove('mostrar');
            }
        });

        // --- 2. OS DADOS DAS LOJAS ---
        const dadosLojas = [
            {
                "id": "loja-1",
                "nome": "Hamburgueria do Campo - Portela de Sintra",
                "imagem": "fotos/foto_portela.jpeg",
                "morada": "R. Pedro de Cintra n.11/13 Portela de Sintra, Sintra",
                "codigo_postal": "2710-436",
                "telefone": "+351 219 230 059",
                "email": "[EMAIL_ADDRESS]",
                "horario": {
                    "dias": "Segunda a Sábado",
                    "horas": "12h00 - 22h00"
                },
                "link_maps": "https://maps.app.goo.gl/9vg6hwgAnw2Kz4Mt9"
            },
            {
                "id": "loja-2",
                "nome": "Hamburgueria do Campo - São Pedro de Sintra",
                "imagem": "fotos/foto_sintra.jpeg",
                "morada": "R. Aviador Carlos Bleck 8, Sintra",
                "codigo_postal": "2710-513",
                "telefone": "+351 962 282 029",
                "email": "[EMAIL_ADDRESS]",
                "horario": {
                    "dias": "Segunda a Sábado e Domingo",
                    "horas": "Seg-Sáb: 12h00 - 15h00, 19h00 - 22h00 | Dom: 12h00 - 15h00"
                },
                "link_maps": "https://maps.app.goo.gl/W3HwxhyPiwj625Br9"
            },
            {
                "id": "loja-3",
                "nome": "Hamburgueria do Campo - Évora",
                "imagem": "fotos/foto_evora.jpeg",
                "morada": "R. da Horta das Figueiras 110, Évora",
                "codigo_postal": "7005-212",
                "telefone": "+351 266 106 653",
                "email": "[EMAIL_ADDRESS]",
                "horario": {
                    "dias": "Segunda a Domingo",
                    "horas": "12h00 - 22h00"
                },
                "link_maps": "https://maps.app.goo.gl/Du4a3iXrRisurkCq5"
            }
        ];

        // --- 3. CRIAR OS CARTÕES SIMPLIFICADOS ---
        dadosLojas.forEach(loja => {
            const lojaCard = document.createElement('div');
            lojaCard.classList.add('categoria-card');

            // Vamos mostrar apenas a Imagem, o Nome e a primeira parte da morada
            const ruaApenas = loja.morada.split(',')[0];

            lojaCard.innerHTML = `
                <img src="${loja.imagem}" alt="Fotografia da ${loja.nome}" class="loja-img">
                
                <div class="loja-info">
                    <h3>${loja.nome}</h3>
                    <p style="color: #777; font-size: 14px; margin-bottom: 20px;">${ruaApenas}</p>
                    <!-- O botão que aciona o modal -->
                    <button class="btn-primary btn-detalhes" style="padding: 10px 15px; font-size: 14px; cursor: pointer; width: 100%; margin-top: auto;">Ver Detalhes</button>
                </div>
            `;

            // Adicionar o evento de clique ao botão deste cartão
            const btnDetalhes = lojaCard.querySelector('.btn-detalhes');
            btnDetalhes.addEventListener('click', () => abrirModal(loja));

            containerLojas.appendChild(lojaCard);
        });
    }
    // --- LÓGICA DO SLIDER (HERO SECTION) ---
    const slides = document.querySelectorAll('.hero-bg');
    const textos = document.querySelectorAll('.hero-text'); // Procura os novos blocos de texto
    let currentSlide = 0;

    // Só executa se encontrar as imagens e os textos na página
    if (slides.length > 0 && textos.length > 0) {
        setInterval(() => {
            // 1. Esconde a imagem e o texto atuais
            slides[currentSlide].classList.remove('active');
            textos[currentSlide].classList.remove('active');

            // 2. Avança para o próximo slide (volta a zero se chegar ao fim)
            currentSlide = (currentSlide + 1) % slides.length;

            // 3. Mostra a nova imagem e o novo texto
            slides[currentSlide].classList.add('active');
            textos[currentSlide].classList.add('active');
        }, 5000); // Muda a cada 5 segundos
    }

    // --- LÓGICA DE FILTRAGEM DA SELEÇÃO DO CAMPO ---
    const botoesFiltro = document.querySelectorAll('.btn-filtro');
    const produtos = document.querySelectorAll('.cartao-produto');

    if (botoesFiltro.length > 0 && produtos.length > 0) {
        botoesFiltro.forEach(botao => {
            botao.addEventListener('click', () => {

                // 1. Remove a cor de fundo (classe ativo) de todos os botões
                botoesFiltro.forEach(b => b.classList.remove('ativo'));

                // 2. Adiciona a cor de fundo apenas ao botão que foi clicado
                botao.classList.add('ativo');

                // 3. Lê o valor que está no atributo "data-filtro" (ex: "vaca")
                const filtroAtivo = botao.getAttribute('data-filtro');

                // 4. Corre todos os cartões de produto
                produtos.forEach(produto => {
                    const categoriaProduto = produto.getAttribute('data-categoria');

                    // Se clicarmos em "Todos" OU se a categoria do produto corresponder ao filtro
                    if (filtroAtivo === 'todos' || categoriaProduto === filtroAtivo || (filtroAtivo === 'hamburgueres' && (categoriaProduto === 'vaca' || categoriaProduto === 'frango'))) {
                        produto.classList.remove('esconder-produto'); // Mostra o produto
                    } else {
                        produto.classList.add('esconder-produto'); // Esconde o produto
                    }
                });
            });
        });
    }
});