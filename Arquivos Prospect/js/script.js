const form = document.getElementById("form");
const nome = document.getElementById("nome");
const telefone = document.getElementById("telefone");
const email = document.getElementById("email");
const observacao = document.getElementById("observacao");


let btnConfirmar = document.querySelector("#btnConfirmar");
let btnCancelar = document.querySelector("#btnCancelar");

btnConfirmar.addEventListener("click", (event) =>{
    event.preventDefault();
    valida_dados();
})


function valida_dados(){
    const nomeValue = nome.value;
    const telefoneValue = telefone.value;
    const emailValue = email.value;
    
    // Valida Nome 
    if(nomeValue === ""){
        errorInput(nome, "Nome deve ter no mínimo 3 caracteres");
    }else if (nomeValue.length < 3){
        errorInput(nome, "Nome deve ter no mínimo 3 caracteres");
    }else{
        const formItem = nome.parentElement;
        formItem.className = "form-content";
    }
    // fim Valida Telefone
    if(telefoneValue === ""){
        errorInput(telefone, "Digite o Telefone com DDD");
    }
    else{
        const formItem = telefone.parentElement;
        formItem.className = "form-content";
    }
    
    // Valida email
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailValue)){
        const formItem = email.parentElement;
        formItem.className = "form-content";
    }
    else{
        errorInput(email, "Digite um endereço de-mail válido");
    }
    // Fim Valida Email 

}

function errorInput(input, message){
  const formItem = input.parentElement;
  const Mensagem_de_Erro = formItem.querySelector("a")

  Mensagem_de_Erro.innerText = message;

  formItem.className = "form-content error"


}

// form.addEventListener()
// form.addEventListener("submit", (event) => {
//     event.preventDefault();

//     alert("Cadastrado com Sucesso!!!")
// })