let amigo = [];
let resultado = document.getElementById("resultado");

function adicionarAmigo() {
    let nomeDoAmigo = document.querySelector('input').value; 

    if (nomeDoAmigo === '') {
        resultado.innerHTML = "Por favor, insira um nome.";
        resultado.style.color = "red";
        return;
    } 
    if (amigo.includes(nomeDoAmigo)) {
        resultado.innerHTML = "Por favor, digite um nome diferente do outro!";
        resultado.style.color = "red";
        return; 
    }

    amigo.push(nomeDoAmigo); 
    resultado.innerHTML = "Nome adicionado com sucesso!";
    resultado.style.color = "green";

    atualizarListaAmigos(); 
    limparCampo(); 
}

function atualizarListaAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; 
    amigo.forEach(nome => {
        const novoItem = document.createElement("li");
        novoItem.textContent = nome;
        listaAmigos.appendChild(novoItem);
    });
}

function limparCampo() {
    document.querySelector('input').value = ''; 
}

function sortearAmigo() {

        if (amigo.length === 0) {
            resultado.innerHTML = "A lista está vazia, adicione amigos antes de sortear!";
            resultado.style.color = "red";
            return;
        }
        
        if (amigo.length === 1) { 
            resultado.innerHTML = "Só há um amigo na lista, sorteio impossível!";
            resultado.style.color = "red"; 
            return;
            
        }
 
    let nomeSorteado = Math.floor(Math.random() * amigo.length); 
    let amigoSorteado = amigo[nomeSorteado];
    resultado.innerHTML = `Amigo sorteado: ${amigoSorteado}`; 
    resultado.style.color = "green"; 

    amigo.splice(nomeSorteado, 1);

    atualizarListaAmigos();
}
