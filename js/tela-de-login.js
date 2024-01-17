const email = "teste@gmail.com";
const senha = "12345";

var campoEmail = document.getElementById("email");
var campoSenha = document.getElementById("senha");
var botaoEntrar = document.getElementById("btn-entrar");


botaoEntrar.addEventListener('click' , () => {   // arrow function cm dois parâmetros () => 
   
    if(campoEmail.value == "" || campoSenha.value == ""){
        alert("Email e Senha devem ser preenchidos!");
        return; // saindo da função
    }else if(campoEmail.value.toLowerCase() != email || campoSenha.value != senha ) {
        alert("Usuário ou senha inválidos");
        return;
    }else{
        window.open("tela-principal.html", "_self"); // paramêtro _self continua na mesma tela
    //abrir nova tela ao clicar se nào tiver o self
    } 

})
