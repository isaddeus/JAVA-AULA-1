// ----------- BODY 1 ------------


// const btnClicar = document.getElementById("btnClicar")
// const paragrafo = document.getElementById("paragrafo")

// btnClicar.addEventListener("click", function () {
//     // alert("clicou pelo Js!")
//     paragrafo.textContent = "Isabela linda"
// })



const form = document.getElementById('form')
const inputNome = document.getElementById('nome')
const inputEmail = document.getElementById('email')
const inputAssunto = document.getElementById('assunto')
const inputMensagem = document.getElementById('mensagem')
const btnEnviar = document.getElementById('btnEnviar')
const mensagemErro = document.getElementById('mensagemErro')
const cadastro = document.getElementById('cadastroUsuarios')

btnEnviar.addEventListener("click", function (event) {
    event.preventDefault()

    let nome = inputNome.value
    let email = inputEmail.value

    if (nome === "" || email === "" || assunto === "" || mensagem === "") {
        mensagemErro.textContent = "Preencha os campos vazios!"
        mensagemErro.style.color = "#ff0000"
        // // mensagemErro.classList.add('mensagemVermelha')
        // mensagemErro.setAttribute("src", "link da imagem")
        // // mensagemErro.src = "Link" // mesma coisa que o de cima, mas mais 'clean'
        return
    }

    const cardUsuario = document.createElement('div')
    cardUsuario.innerHTML = `
    <h3> Nome: ${nome} </h3>
    <p> E-mail: ${email} </p>
    `

    cadastro.append(cardUsuario) //ADICIONE DENTRO DO ELEMENTO CADASTRO O MEU CARD USUARIO
    // alert(`Nome: ${nome}\n E-mail: ${email}`)

    form.reset()
})