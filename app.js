//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

alert("Digite o nome dos amigos que deseja adicionar")

function adicionarAmigo() {
    let campoNome = document.getElementById("amigo");
    let nome = campoNome.value.trim();

    if (nome === "") {
        alert("Por favor, Insira um nome")
        return;
    }
    amigos.push(nome)
    atualizarLista();
    campoNome.value = "";
}

function atualizarLista() {
    let lista = document.getElementById("lista-amigos");
    lista.innerHTML = "";

    amigos.forEach((amigo) => {
        let item = document.createElement("li");
        item.innerHTML = amigo;
        lista.appendChild(item);
    });
}


