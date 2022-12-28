async function CarregarDados() {
    const response = await fetch("json/processo-seletivo-front.json");
    const json = await response.json();
    return json;
}

async function CriarOrdemComDados() {
    const dados = await CarregarDados();

    console.log(dados)
    let div = document.getElementById("apresentacao");
    for (moni in dados.monitoramentos) {

        //Estrutura padrão
        let card = document.createElement("div");
        card.className = "card mb-3";
        let h5 = document.createElement("h5");
        h5.className = "card-header";
        h5.innerText = "Ordem de compra";
        let body = document.createElement("div");
        body.className = "card-body";
        let a = document.createElement("a");
        let div1 = document.createElement("div");
        div1.className = "d-flex justify-content-end"
        a.className = "btn btn-primary mt-3";
        a.innerText = "Detalhes";

        // Data monitoramento
        let row = document.createElement("div");
        row.className = "row";
        let col_0 = document.createElement("div");
        col_0.className = "col-4 d-flex justify-content-start";
        col_0.innerText = "Data Monitoramento";
        let col_0_1 = document.createElement("div");
        col_0_1.className = "col-8 d-flex justify-content-start";
        col_0_1.innerText = `${dados.monitoramentos[moni].dataMonitoramento}`;

        //Analista
        let col_1 = document.createElement("div");
        col_1.className = "col-4 d-flex justify-content-start";
        col_1.innerText = "Analista";
        let col_1_1 = document.createElement("div");
        col_1_1.className = "col-8 d-flex justify-content-start";
        col_1_1.innerText = `${dados.monitoramentos[moni].analista}`;

        //Resultado
        let col_2 = document.createElement("div");
        col_2.className = "col-4 d-flex justify-content-start";
        col_2.innerText = "Resultado";
        let col_2_1 = document.createElement("div");
        col_2_1.className = "col-8 d-flex justify-content-start";
        col_2_1.innerText = `${dados.monitoramentos[moni].resultado}`;

        row.appendChild(col_0);
        row.appendChild(col_0_1);
        row.appendChild(col_1);
        row.appendChild(col_1_1);
        row.appendChild(col_2);
        row.appendChild(col_2_1);

        for (vinc in dados.vinculo) {
            if (dados.monitoramentos[moni].idVinculo == dados.vinculo[vinc].idVinculo) {
                for (prop in dados.propriedades) {
                    if (dados.propriedades[prop].idPropriedade == dados.vinculo[vinc].idPropriedade) {

                        //Nome Propriedade
                        let col_3 = document.createElement("div");
                        col_3.className = "col-4 d-flex justify-content-start";
                        col_3.innerText = "Nome da Propriedade";
                        let col_3_1 = document.createElement("div");
                        col_3_1.className = "col-8 d-flex justify-content-start";
                        col_3_1.innerText = `${dados.propriedades[prop].nomePropriedade}`;

                        //Número cadastro Rural
                        let col_4 = document.createElement("div");
                        col_4.className = "col-4 d-flex justify-content-start";
                        col_4.innerText = "Número Cadastro Rural";
                        let col_4_1 = document.createElement("div");
                        col_4_1.className = "col-8 d-flex justify-content-start";
                        col_4_1.innerText = `${dados.propriedades[prop].numeroCadastroRural}`;

                        row.appendChild(col_3);
                        row.appendChild(col_3_1);
                        row.appendChild(col_4);
                        row.appendChild(col_4_1);

                    }
                }
                for (prod in dados.produtores) {
                    if (dados.produtores[prod].idprodutor == dados.vinculo[vinc].idProdutor) {
                        //Nome Produtor
                        let col_5 = document.createElement("div");
                        col_5.className = "col-4 d-flex justify-content-start";
                        col_5.innerText = "Nome do Produtor";
                        let col_5_1 = document.createElement("div");
                        col_5_1.className = "col-8 d-flex justify-content-start";
                        col_5_1.innerText = `${dados.produtores[prod].nomeProdutor}`;

                        //CPF Produtor
                        let col_6 = document.createElement("div");
                        col_6.className = "col-4 d-flex justify-content-start";
                        col_6.innerText = "CPF do Produtor";
                        let col_6_1 = document.createElement("div");
                        col_6_1.className = "col-8 d-flex justify-content-start";
                        col_6_1.innerText = `${dados.produtores[prod].cpfProdutor}`;

                        row.appendChild(col_5);
                        row.appendChild(col_5_1);
                        row.appendChild(col_6);
                        row.appendChild(col_6_1);

                    }
                }
            }
        }

        body.appendChild(row);
        div1.appendChild(a)
        body.appendChild(div1);
        card.appendChild(h5);
        card.appendChild(body);
        div.appendChild(card);

    };

}

document.addEventListener('DOMContentLoaded', CriarOrdemComDados)


