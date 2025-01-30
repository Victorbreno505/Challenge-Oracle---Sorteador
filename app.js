let amigos = [];

alert("Digite o nome dos amigos que deseja adicionar");

function adicionarAmigo() {
    let campoNome = document.getElementById("campoNome");
    let nome = campoNome.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome");
        return;
    }

    amigos.push(nome);
    atualizarLista();
    campoNome.value = "";
}

function atualizarLista() {
    let lista = document.getElementById("lista-amigos");
    lista.innerHTML = ""; // Limpa a lista antes de atualizar

    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li");
        item.innerHTML = amigos[i];
        lista.appendChild(item);
    }
}

function sortearAmigo() {
    // Verifica se há amigos na lista
    if (amigos.length === 0) {
        alert("Adicione pelo menos um amigo antes de sortear!");
        return;
    }

    
    let indiceSorteado = Math.floor(Math.random() * amigos.length); // Gera um índice aleatório dentro do array

    
    let amigoSorteado = amigos[indiceSorteado]; // Obtém o nome sorteado

    // Exibe o resultado na página
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<p>O amigo sorteado é: <strong>${amigoSorteado}</strong></p>`;
}