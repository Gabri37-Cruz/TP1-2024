const form = document.getElementById("form-cadastro")
const botao = document.getElementById("botao-cadastrar")
const botaoi = document.getElementById("botao-imprimir")
const lista = document.getElementById("lista-cadastros")

let cadastros = []

if (localStorage.getItem("cadastros")){
    cadastros = JSON.parse(localStorage.getItem("cadastros"))
}

botao.addEventListener("click", (e) => {
    e.preventDefault()
    const nome = document.getElementById("nome").value
    const email = document.getElementById("email").value
    const telefone = document.getElementById("telefone").value
    const cadastro = {
        nome,
        email,
        telefone
    }
    cadastros.push(cadastro)
    localStorage.setItem("cadastros", JSON.stringify
    (cadastros))
    form.reset()
}
)

botaoi.addEventListener("click", ()=> {
    lista.innerHTML = ""
    cadastros.forEach((cadastro, indice)=>{
        const item = document.createElement('p')
        item.textContent = `Cadastro ${indice+1}: ${cadastro.nome} - ${cadastro.email} - ${cadastro.telefone}`
        lista.appendChild(item)
    }
    ) 
}
)