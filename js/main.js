async function CarregarDados() {
    const response = await fetch("json/processo-seletivo-front.json");
    const json = await response.json();
    return json;
}

async function CriarOrdemComDados() {
    const dados = await CarregarDados();
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
        
        let div1 = document.createElement("div");
        div1.className = "d-flex justify-content-end";

        // Accordion
        let acordiao = document.createElement("div");
        acordiao.className = "accordion accordion-flush"
        acordiao.id = "accordionFlushExample"

        let acordiaoItem = document.createElement("div");
        acordiaoItem.className = "accordion-item"

        let h2 = document.createElement("h2")
        h2.className = "accordion-header"

        // Botão Detalhes no Accordion
        let buttonFlash = document.createElement("button");
        buttonFlash.className = "accordion-button";
        buttonFlash.setAttribute("type", "button");
        buttonFlash.setAttribute("data-bs-toggle", "collapse");
        buttonFlash.setAttribute("data-bs-target", "#flush-collapse" + dados.monitoramentos[moni].idMonitoramento);
        buttonFlash.setAttribute("aria-expanded", "false");
        buttonFlash.setAttribute("aria-controls", "flush-collapse" + dados.monitoramentos[moni].idMonitoramento);
        buttonFlash.innerText = "Detalhes"

        let divFlush = document.createElement("div");
        divFlush.className = "accordion-collapse collapse";
        divFlush.id = "flush-collapse" + dados.monitoramentos[moni].idMonitoramento;
        divFlush.setAttribute("aria-labelledby", "flush-heading" + dados.monitoramentos[moni].idMonitoramento);
        divFlush.setAttribute("data-bs-parent", "#accordionFlushExample");

        let acordiaoCorpo = document.createElement("div");
        acordiaoCorpo.className = "accordion-body"

        let div_check = document.createElement("div");
        div_check.className = "form-check d-flex justify-content-start";

        let input_checkbox = document.createElement("input");
        input_checkbox.className = "form-check-input ";
        input_checkbox.setAttribute("type", "checkbox");
        input_checkbox.setAttribute("value", "");
        input_checkbox.setAttribute("id", "flexCheckIndeterminate");

        let label_checkbox = document.createElement("label");
        label_checkbox.className = "form-check-label ms-2";
        label_checkbox.setAttribute("for", "flexCheckIndeterminate");
        label_checkbox.innerText = "Sinalizar compra";

        // Alerta de Comercialização
        input_checkbox.addEventListener("change", function () {
                alert("Comercialização realizada")
                input_checkbox.disabled = true;
        })

        // Data monitoramento
        let row = document.createElement("div");
        row.className = "row";

        let col_0 = document.createElement("div");
        col_0.className = "col-4 d-flex justify-content-start";
        col_0.innerText = "Data Monitoramento";

        let col_0_1 = document.createElement("div");
        col_0_1.className = "col-8 d-flex justify-content-start";

        if (dados.monitoramentos[moni].dataMonitoramento == undefined) {
            col_0_1.innerText = "Não encontrado";
        }
        else if (dados.monitoramentos[moni].dataMonitoramento == null || dados.monitoramentos[moni].dataMonitoramento == "null") {
            col_0_1.innerText = "Não existe";
        }
        else {
            col_0_1.innerText = dados.monitoramentos[moni].dataMonitoramento;
        }

        //Analista
        let col_1 = document.createElement("div");
        col_1.className = "col-4 d-flex justify-content-start";
        col_1.innerText = "Analista";

        let col_1_1 = document.createElement("div");
        col_1_1.className = "col-8 d-flex justify-content-start";

        if (dados.monitoramentos[moni].analista == undefined) {
            col_1_1.innerText = "Não encontrado";
        }
        else if (dados.monitoramentos[moni].analista == null || dados.monitoramentos[moni].analista == "null") {
            col_1_1.innerText = "Não existe";
        }
        else {
            col_1_1.innerText = dados.monitoramentos[moni].analista;
        }

        //Resultado
        let col_2 = document.createElement("div");
        col_2.className = "col-4 d-flex justify-content-start";
        col_2.innerText = "Resultado";

        let col_2_1 = document.createElement("div");
        col_2_1.className = "col-8 d-flex justify-content-start";

        if (dados.monitoramentos[moni].resultado == undefined) {
            col_2_1.innerText = "Não encontrado";
        }
        else if (dados.monitoramentos[moni].resultado == null || dados.monitoramentos[moni].resultado == "null") {
            col_2_1.innerText = "Não existe";
        }
        else {
            col_2_1.innerText = dados.monitoramentos[moni].resultado;
        }

        row.appendChild(col_0);
        row.appendChild(col_0_1);
        row.appendChild(col_1);
        row.appendChild(col_1_1);
        row.appendChild(col_2);
        row.appendChild(col_2_1);

        for (vinc in dados.vinculo) {
            if (dados.monitoramentos[moni].idVinculo == dados.vinculo[vinc].idVinculo) {
                let id;
                let tipo;
                for (prop in dados.propriedades) {
                    if (dados.propriedades[prop].idPropriedade == dados.vinculo[vinc].idPropriedade) {

                        //Nome Propriedade
                        let col_3 = document.createElement("div");
                        col_3.className = "col-4 d-flex justify-content-start";
                        col_3.innerText = "Nome da Propriedade";

                        let col_3_1 = document.createElement("div");
                        col_3_1.className = "col-8 d-flex justify-content-start";

                        if (dados.propriedades[prop].nomePropriedade == undefined) {
                            col_3_1.innerText = "Não encontrado";
                        }
                        else if (dados.propriedades[prop].nomePropriedade == null || dados.propriedades[prop].nomePropriedade == "null") {
                            col_3_1.innerText = "Não existe";
                        }
                        else {
                            col_3_1.innerText = dados.propriedades[prop].nomePropriedade;
                        }

                        //Id Propriedade
                        id = dados.propriedades[prop].idPropriedade;

                        //Tipo Propriedade
                        tipo = dados.propriedades[prop].tipoPropriedade;

                        //Número cadastro Rural
                        let col_4 = document.createElement("div");
                        col_4.className = "col-4 d-flex justify-content-start";
                        col_4.innerText = "Número Cadastro Rural";

                        let col_4_1 = document.createElement("div");
                        col_4_1.className = "col-8 d-flex justify-content-start";

                        if (dados.propriedades[prop].numeroCadastroRural == undefined) {
                            col_4_1.innerText = "Não encontrado";
                        }
                        else if (dados.propriedades[prop].numeroCadastroRural == null || dados.propriedades[prop].numeroCadastroRural == "null") {
                            col_4_1.innerText = "Não existe";
                        }
                        else {
                            col_4_1.innerText = dados.propriedades[prop].numeroCadastroRural;
                        }

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

                        if (dados.produtores[prod].nomeProdutor == undefined) {
                            col_5_1.innerText = "Não encontrado";
                        }
                        else if (dados.produtores[prod].nomeProdutor == null || dados.produtores[prod].nomeProdutor == "null") {
                            col_5_1.innerText = "Não existe";
                        }
                        else {
                            col_5_1.innerText = dados.produtores[prod].nomeProdutor;
                        }

                        //CPF Produtor
                        let col_6 = document.createElement("div");
                        col_6.className = "col-4 d-flex justify-content-start";
                        col_6.innerText = "CPF do Produtor";

                        let col_6_1 = document.createElement("div");
                        col_6_1.className = "col-8 d-flex justify-content-start";

                        if (dados.produtores[prod].cpfProdutor == undefined) {
                            col_6_1.innerText = "Não encontrado";
                        }
                        else if (dados.produtores[prod].cpfProdutor == null || dados.produtores[prod].cpfProdutor == "null") {
                            col_6_1.innerText = "Não existe";
                        }
                        else {
                            col_6_1.innerText = dados.produtores[prod].cpfProdutor;
                        }

                        row.appendChild(col_5);
                        row.appendChild(col_5_1);
                        row.appendChild(col_6);
                        row.appendChild(col_6_1);

                        // Acordião com os mais detalhes
                        h2.appendChild(buttonFlash);
                        acordiaoItem.appendChild(h2);

                        let rowBody = document.createElement("div");
                        rowBody.className = "row";

                        // Parecer Analise
                        let col_7 = document.createElement("div");
                        col_7.className = "col-2 d-flex justify-content-start mb-2";
                        col_7.innerText = "Parecer Analise";

                        let col_7_1 = document.createElement("div");
                        col_7_1.className = "col-10 d-flex justify-content-start mb-2";
                        col_7_1.style.textAlign = "justify"
                        if (dados.monitoramentos[moni].parecerAnalise == undefined) {
                            col_7_1.innerText = "Não encontrado";
                        }
                        else if (dados.monitoramentos[moni].parecerAnalise == null || dados.monitoramentos[moni].parecerAnalise == "null") {
                            col_7_1.innerText = "Não existe";
                        }
                        else {
                            col_7_1.innerText = dados.monitoramentos[moni].parecerAnalise;
                        }

                        // Id Propriedade
                        let col_8 = document.createElement("div");
                        col_8.className = "col-2 d-flex justify-content-start mb-2";
                        col_8.innerText = "Id Propriedade";

                        let col_8_1 = document.createElement("div");
                        col_8_1.className = "col-10 d-flex justify-content-start mb-2";
                        col_8_1.style.textAlign = "justify"
                        if (id == undefined) {
                            col_8_1.innerText = "Não encontrado";
                        }
                        else if (id == null || id == "null") {
                            col_8_1.innerText = "Não existe";
                        }
                        else {
                            col_8_1.innerText = id;
                        }

                        // Tipo Propriedade
                        let col_9 = document.createElement("div");
                        col_9.className = "col-2 d-flex justify-content-start mb-2";
                        col_9.innerText = "Tipo Propriedade";

                        let col_9_1 = document.createElement("div");
                        col_9_1.className = "col-10 d-flex justify-content-start mb-2";
                        col_9_1.style.textAlign = "justify"
                        if (tipo == undefined) {
                            col_9_1.innerText = "Não encontrado";
                        }
                        else if (tipo == null || tipo == "null") {
                            col_9_1.innerText = "Não existe";
                        }
                        else {
                            col_9_1.innerText = tipo;
                        }

                        // Id Produtor
                        let col_10 = document.createElement("div");
                        col_10.className = "col-2 d-flex justify-content-start mb-2";
                        col_10.innerText = "Id Produtor";

                        let col_10_1 = document.createElement("div");
                        col_10_1.className = "col-10 d-flex justify-content-start mb-2";
                        col_10_1.style.textAlign = "justify"
                        if (dados.produtores[prod].idprodutor == undefined) {
                            col_10_1.innerText = "Não encontrado";
                        }
                        else if (dados.produtores[prod].idprodutor == null || dados.produtores[prod].idprodutor == "null") {
                            col_10_1.innerText = "Não existe";
                        }
                        else {
                            col_10_1.innerText = dados.produtores[prod].idprodutor;
                        }

                        // Tipo Vínculo
                        let col_11 = document.createElement("div");
                        col_11.className = "col-2 d-flex justify-content-start mb-2";
                        col_11.innerText = "Tipo Vínculo";

                        let col_11_1 = document.createElement("div");
                        col_11_1.className = "col-10 d-flex justify-content-start mb-2";
                        col_11_1.style.textAlign = "justify"
                        if (dados.vinculo[vinc].tipoVinculoProdutor == undefined) {
                            col_11_1.innerText = "Não encontrado";
                        }
                        else if (dados.vinculo[vinc].tipoVinculoProdutor == null || dados.vinculo[vinc].tipoVinculoProdutor == "null") {
                            col_11_1.innerText = "Não existe";
                        }
                        else {
                            col_11_1.innerText = dados.vinculo[vinc].tipoVinculoProdutor;
                        }

                        rowBody.appendChild(col_7)
                        rowBody.appendChild(col_7_1)
                        rowBody.appendChild(col_8)
                        rowBody.appendChild(col_8_1)
                        rowBody.appendChild(col_9)
                        rowBody.appendChild(col_9_1)
                        rowBody.appendChild(col_10)
                        rowBody.appendChild(col_10_1)
                        rowBody.appendChild(col_11)
                        rowBody.appendChild(col_11_1)
                        div_check.appendChild(input_checkbox);
                        div_check.appendChild(label_checkbox);
                        if (dados.monitoramentos[moni].resultado == "Liberado") {
                            rowBody.appendChild(div_check)
                        }
                        acordiaoCorpo.appendChild(rowBody)
                        divFlush.appendChild(acordiaoCorpo);
                        acordiaoItem.appendChild(divFlush);
                        acordiao.appendChild(acordiaoItem);
                    }
                }
            }
        }

        body.appendChild(row);
        body.appendChild(div1);
        card.appendChild(h5);
        card.appendChild(body);
        card.appendChild(acordiao);
        div.appendChild(card);
    };
}

document.addEventListener('DOMContentLoaded', CriarOrdemComDados)