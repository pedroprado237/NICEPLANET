async function CarregarDados() {
    const response = await fetch("json/processo-seletivo-front.json");
    const json = await response.json();
    return json;
}

function MaisDetalhes(parecer, idProp, tipoProp, idProd, tipoVinc) {
    let div = document.getElementById("apresentacao");
    let div_0 = document.createElement("div");
    div_0.className = "modal fade";
    div_0.id = "staticBackdrop";
    div_0.setAttribute("data-bs-backdrop", "static")
    div_0.setAttribute("data-bs-keyboard", "false")
    div_0.setAttribute("tabindex", "-1")
    div_0.setAttribute("aria-labelledby", "staticBackdropLabel")
    div_0.setAttribute("aria-hidden", "true")

    let div_1 = document.createElement("div");
    div_1.className = "modal-dialog modal-xl";

    let div_2 = document.createElement("div");
    div_2.className = "modal-content";

    let div_3 = document.createElement("div");
    div_3.className = "modal-header";

    let h1 = document.createElement("div");
    h1.className = "modal-title fs-5";
    h1.id = "staticBackdropLabel";
    h1.innerHTML = "Detalhes";

    let button_exit = document.createElement("button");
    button_exit.className = "btn-close";
    button_exit.setAttribute("type", "button");
    button_exit.setAttribute("data-bs-dismiss", "modal");
    button_exit.setAttribute("arial-label", "Close");

    let div_4 = document.createElement("div");
    div_4.className = "modal-body";

    // Parecer da Analise
    let row = document.createElement("div");
    row.className = "row";
    let col_0 = document.createElement("div");
    col_0.className = "col-2 d-flex justify-content-start mb-2";
    col_0.innerText = "Parecer Analise";
    let col_0_1 = document.createElement("div");
    col_0_1.className = "col-10 d-flex justify-content-start mb-2";
    col_0_1.style.textAlign = "justify"
    col_0_1.innerText = `${parecer}`;

    // ID Propriedade
    let col_1 = document.createElement("div");
    col_1.className = "col-2 d-flex justify-content-start mb-2";
    col_1.innerText = "ID Propriedade";
    let col_1_1 = document.createElement("div");
    col_1_1.className = "col-10 d-flex justify-content-start mb-2";
    col_1_1.style.textAlign = "justify"
    col_1_1.innerText = `${idProp}`;

    // Tipo Propriedade
    let col_2 = document.createElement("div");
    col_2.className = "col-2 d-flex justify-content-start mb-2";
    col_2.innerText = "Tipo Propriedade";
    let col_2_1 = document.createElement("div");
    col_2_1.className = "col-10 d-flex justify-content-start mb-2";
    col_2_1.style.textAlign = "justify"
    col_2_1.innerText = `${tipoProp}`;

    // ID Produtor
    let col_3 = document.createElement("div");
    col_3.className = "col-2 d-flex justify-content-start mb-2";
    col_3.innerText = "ID Produtor";
    let col_3_1 = document.createElement("div");
    col_3_1.className = "col-10 d-flex justify-content-start mb-2";
    col_3_1.style.textAlign = "justify"
    col_3_1.innerText = `${idProd}`;

    // Vinculo
    let col_4 = document.createElement("div");
    col_4.className = "col-2 d-flex justify-content-start";
    col_4.innerText = "Tipo Vinculo";
    let col_4_1 = document.createElement("div");
    col_4_1.className = "col-10 d-flex justify-content-start";
    col_4_1.style.textAlign = "justify"
    col_4_1.innerText = `${tipoVinc}`;

    let div_5 = document.createElement("div");
    div_5.className = "modal-footer";

    let div_6 = document.createElement("div");
    div_6.className = "form-check d-flex justify-content-start";

    let input_checkbox = document.createElement("input");
    input_checkbox.className = "form-check-input ";
    input_checkbox.setAttribute("type","checkbox");
    input_checkbox.setAttribute("value","");
    input_checkbox.setAttribute("id","flexCheckIndeterminate");

    let label_checkbox = document.createElement("label");
    label_checkbox.className = "form-check-label";
    label_checkbox.setAttribute("for","flexCheckIndeterminate");
    label_checkbox.innerText = "Sinalizar compra";


    let button_teste = document.createElement("button");
    button_teste.className = "btn btn-secondary";
    button_teste.setAttribute("data-bs-dismiss", "modal");
    button_teste.innerText = "Teste";

    let button_salvar = document.createElement("button");
    button_salvar.className = "btn btn-primary";
    button_salvar.innerText = "Salvar";

    div_3.appendChild(h1);
    div_3.appendChild(button_exit);
    div_2.appendChild(div_3);
    row.appendChild(col_0);
    row.appendChild(col_0_1);
    row.appendChild(col_1);
    row.appendChild(col_1_1);
    row.appendChild(col_2);
    row.appendChild(col_2_1);
    row.appendChild(col_3);
    row.appendChild(col_3_1);
    row.appendChild(col_4);
    row.appendChild(col_4_1);
    div_4.appendChild(row);
    div_2.appendChild(div_4);
    div_6.appendChild(input_checkbox);
    div_6.appendChild(label_checkbox);
    div_5.appendChild(div_6);
    div_5.appendChild(button_salvar);
    div_2.appendChild(div_5);
    div_1.appendChild(div_2);
    div_0.appendChild(div_1);
    div.appendChild(div_0);

    console.log(parecer)
    console.log(idProp)
    console.log(tipoProp)
    console.log(idProd)
    console.log(tipoVinc)
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

        let button = document.createElement("button");

        let div1 = document.createElement("div");

        div1.className = "d-flex justify-content-end"
        button.className = "btn btn-primary mt-3";
        button.innerText = "Detalhes";
        button.setAttribute("data-bs-toggle", "modal")
        button.setAttribute("data-bs-target", "#staticBackdrop")

        // Data monitoramento
        let row = document.createElement("div");
        row.className = "row";

        let col_0 = document.createElement("div");
        col_0.className = "col-4 d-flex justify-content-start";
        col_0.innerText = "Data Monitoramento";

        let col_0_1 = document.createElement("div");
        col_0_1.className = "col-8 d-flex justify-content-start";
        if (dados.monitoramentos[moni].dataMonitoramento != undefined || dados.monitoramentos[moni].dataMonitoramento != null) {
            col_0_1.innerText = `${dados.monitoramentos[moni].dataMonitoramento}`;
        }
        else {
            col_0_1.innerText = "Não encontrado";
        }

        //Analista
        let col_1 = document.createElement("div");
        col_1.className = "col-4 d-flex justify-content-start";
        col_1.innerText = "Analista";

        let col_1_1 = document.createElement("div");
        col_1_1.className = "col-8 d-flex justify-content-start";
        if (dados.monitoramentos[moni].analista != undefined || dados.monitoramentos[moni].analista != null) {
            col_1_1.innerText = `${dados.monitoramentos[moni].analista}`;
        }
        else {
            col_1_1.innerText = "Não encontrado";
        }

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
                        col_3_1.innerText = `${dados.propriedades[prop].nomePropriedade}`;

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

                        // Inserção dos dados para o modal
                        button.setAttribute("onclick", `MaisDetalhes("${dados.monitoramentos[moni].parecerAnalise}",
                        "${id}","${tipo}","${dados.produtores[prod].idprodutor}","${dados.vinculo[vinc].tipoVinculoProdutor}")`)
                    }
                }
            }
        }
        body.appendChild(row);
        div1.appendChild(button)
        body.appendChild(div1);
        card.appendChild(h5);
        card.appendChild(body);
        div.appendChild(card);
    };
}
document.addEventListener('DOMContentLoaded', CriarOrdemComDados)

