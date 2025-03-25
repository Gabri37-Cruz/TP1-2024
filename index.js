let form = document.querySelector("form")
let nome = document.querySelector("#nome")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    checacampos(nome, "erro")
})
function checacampos (input, mensagem){
    if(input.value.length<3){
        alert(mensagem)
    }
}