const form = document.getElementById("form-cadastro")
const botao = document.getElementById("botao-cadastrar")
const botaoi = document.getElementById("botao-imprimir")
const lista = document.getElementById("lista-cadastros")

let cadastros = []

if (localStorage.getItem("cadastros")){
    cadastros = JSON.parse(localStorage.getItem())
}