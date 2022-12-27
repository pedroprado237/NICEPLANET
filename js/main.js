 async function CarregarDados(){
    const response = await fetch("json/processo-seletivo-front.json");
    const json = await response.json();
    return json;
    }

async function CriarOrdemComDados(){
    const dados= await CarregarDados();

    let div = document.getElementById("apresentacao");
    let card = document.createElement("div");
    card.className="card";
    let h5 = document.createElement("h5");
    h5.className="card-header";
    h5.innerText="Ordem de compra";
    let body = document.createElement("div");
    body.className="card-body";
    let row = document.createElement("div");
    row.className="row";
    let col_4 = document.createElement("div");
    col_4.className="col-4 d-flex justify-content-start";
    col_4.innerText="Nome da Propriedade";
    let col_8 = document.createElement("div");
    col_8.className="col-8";



    row.appendChild(col_4);
    row.appendChild(col_8);
    body.appendChild(row)
    card.appendChild(h5);
    card.appendChild(body);
    div.appendChild(card);

    console.log(dados);

}



document.addEventListener('DOMContentLoaded',CriarOrdemComDados)


