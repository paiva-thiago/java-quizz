/* O JAVASCRIPT
 * Aqui é nosso palco principal, onde iremos controlar os elementos HTML e aplicar dinâmica e lógica para nossa página.
 * Vamos agora criar uma função para avaliar se nosso jogador respondeu a pergunta corretamente
 */

function apareca(){
    document.getElementById("login").style.display="block";
}

function clicar(){
    var nmJogador;
    nmJogador = document.getElementById("txtJogador").value;
    nmJogador=nmJogador.trim();
    if(nmJogador!=""){
        document.getElementById("login").style.display="none";        
        document.getElementById("jogo").style.display="block";        
    }else{
        alert("Preencha seu Nome!");
    }
}
function conferirResposta(){
    //Cara novo por aqui!
    //Primeiro precisamos pegar o que o nosso usuário respondeu. Se notar é um input radio, e todos com o mesmo nome.
    //Basta usarmos a linha abaixo. 
    var respostaDoUsuario = document.forms.pergunta.alternativa.value;
    /*Ele deverá realizar uma validação, se nada for preenchido, a variável acima estará em branco!
    
    SOMENTE SE ESTA VALIDAÇÃO FOR VERDADEIRA, faça os seguintes passos:
    1) Crie uma variável respostaCorreta, e pegue o atributo value do input hidden que está no HTML
    2) Compare as duas informações, e informe ao usuário se ele acertou ou errou.*/
}