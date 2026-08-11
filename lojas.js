document.addEventListener('DOMContentLoaded', () => {

    const dadosLojas = [
        {
            "id": "loja-1",
            "nome": "Hamburgueria do Campo - Portela de Sintra",
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

    const containerLojas = document.getElementById('lojas-container');

    // Gerar o HTML para cada loja
    dadosLojas.forEach(loja => {
        const lojaCard = document.createElement('div');

        // Adicionamos a classe para o CSS e injetamos o conteúdo
        lojaCard.classList.add('categoria-card'); // Usei a mesma classe das categorias para aproveitar o estilo CSS

        lojaCard.innerHTML = `
            <h3>${loja.nome}</h3>
            <br>
            <p><strong>Morada:</strong><br> ${loja.morada}<br>${loja.codigo_postal}</p>
            <br>
            <p><strong>Telefone:</strong><br> <a href="tel:${loja.telefone}" style="color: #333; text-decoration: none;">${loja.telefone}</a></p>
            <br>
            <p><strong>Horário:</strong><br> ${loja.horario.dias}<br>${loja.horario.horas}</p>
            <br>
            <a href="${loja.link_maps}" class="btn-primary" style="padding: 10px 15px; font-size: 14px;">Obter Direções</a>
        `;

        containerLojas.appendChild(lojaCard);
    });
});