/* O JAVASCRIPT
 * Aqui é nosso palco principal, onde iremos controlar os elementos HTML e aplicar dinâmica e lógica para nossa página.
 * Neste passo não teremos nada por aqui. Vamos para um cara novo, que está na mesma pasta deste arquivo. É o questionador.js.
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
    var respostaDoUsuario = document.forms.pergunta.alternativa.value;
    if(respostaDoUsuario.trim()!=""){
        var respostaCorreta = document.getElementById("correta").value;
        if(respostaDoUsuario==respostaCorreta){
            alert("Resposta Correta!");
        }else{
            alert("Resposta INCORRETA!")
        }
    }else{
        alert("Selecione uma alternativa!");
    }
}