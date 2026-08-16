document.addEventListener('DOMContentLoaded', () => {



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

        // Função para preencher e mostrar o pop-up
        function abrirModal(loja) {
            modalInfo.innerHTML = `
                <h2 style="font-family: 'Poppins', sans-serif; margin-bottom: 20px;">${loja.nome}</h2>
                <p><strong>Morada:</strong><br> ${loja.morada}<br>${loja.codigo_postal}</p>
                <br>
                <p><strong>Telefone:</strong><br> <a href="tel:${loja.telefone}" style="color: #333; text-decoration: none;">${loja.telefone}</a></p>
                <br>
                <p><strong>Horário:</strong><br> ${loja.horario.dias}<br>${loja.horario.horas}</p>
                <br>
                <a href="${loja.link_maps}" target="_blank" class="btn-primary" style="padding: 10px 20px; font-size: 16px; display: inline-block; margin-top: 15px;">Abrir Google Maps</a>
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
                    <button class="btn-primary btn-detalhes" style="padding: 10px 15px; font-size: 14px; cursor: pointer; border: none; width: 100%; margin-top: auto;">Ver Detalhes</button>
                </div>
            `;

            // Adicionar o evento de clique ao botão deste cartão
            const btnDetalhes = lojaCard.querySelector('.btn-detalhes');
            btnDetalhes.addEventListener('click', () => abrirModal(loja));

            containerLojas.appendChild(lojaCard);
        });
    }
    // --- CÓDIGO DO SLIDER DA HERO SECTION ---
    const slides = document.querySelectorAll('.hero-bg');
    let currentSlide = 0;

    if (slides.length > 0) {
        setInterval(() => {
            // Remove a classe 'active' da imagem atual (esconde)
            slides[currentSlide].classList.remove('active');

            // Passa para a próxima imagem. 
            // O operador '%' garante que se chegar ao fim, volta ao zero.
            currentSlide = (currentSlide + 1) % slides.length;

            // Adiciona a classe 'active' à nova imagem (mostra)
            slides[currentSlide].classList.add('active');
        }, 5000); // 5000 ms = 5 segundos
    }
});