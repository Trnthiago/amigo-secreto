let listaDeAmigos = [];
//FUNCTION PARA ADICIONAR AMIGO
function adicionarAmigo() {
    let nomeAmigo = document.getElementById("amigo").value;
    if (nomeAmigo == "") {
        alert("Por favor, insira um nome");}
        else {
            listaDeAmigos.push(nomeAmigo);
            document.getElementById("amigo").value ="";
            atualizarLista();}
    }
//FUNCTION PARA ATUALIZAR LISTA DE AMIGOS
function atualizarLista() {
    let listaAtualizada = document.getElementById("listaAmigos");
    listaAtualizada.innerHTML = "";
    for (let i = 0; i < listaDeAmigos.length; i++) {
        let itemLista = document.createElement("li");
        itemLista.innerHTML = listaDeAmigos[i];
        listaAtualizada.appendChild(itemLista); }
}
//FUNCTION SORTEAR
function sortearAmigo() {
    let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    let nomeSorteado = listaDeAmigos[indiceAleatorio];
    document.getElementById("resultado").innerHTML = `Seu amigo secreto é: ${nomeSorteado}`;
}  
//FUNCTION REINICIAR
function reiniciarSorteio() {
    listaDeAmigos = [];
    document.getElementById("resultado").innerHTML = "";
    atualizarLista();
}