/* O JAVASCRIPT
 * Aqui é nosso palco principal, onde iremos controlar os elementos HTML e aplicar dinâmica e lógica para nossa página.
 * Agora vamos chamar um método do questionador.js.
 */

// Aqui crie uma variável que fará o papel do vetor. Esta variável receberá o valor da função do questionador.js que retorna o vetor das 
// perguntas.
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