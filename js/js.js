/* O JAVASCRIPT
 * Aqui é nosso palco principal, onde iremos controlar os elementos HTML e aplicar dinâmica e lógica para nossa página.
 * Agora vamos ver o que é um índice de um vetor! Mas primeiro, chame o atualiza() logo abaixo da linha 37 - para iniciar -  
 e abaixo da estrutura condicional que confere se a resposta está correta - para avançar.
 */

var perguntas = geraQuizz();

function atualiza(){
    var pergunta = perguntas[0];
    /*Então, se você testou, viu que depois da resposta ele não sai do lugar, mesmo chamando esta função!
      O que acontece é o seguinte - esse zero SEMPRE vai posicionar ao primeiro item! Ele faz o papel de índice!
      O índice é uma informação que INDICA qual a posição do meu vetor que quero acessar. No javascript ele SEMPRE começa com o número 0.
      Ou seja, precisamos que 
        1) Esse índice varie, adicionando 1 após cada pergunta respondida.
        2) Que o atualiza() tenha um argumento, e ao chamar este argumento seja utilizado. Ele fará o papel do índice e deverá substituir
        o 0.
        3) Este argumento seja usado na chamada da função. Para isto será necessária uma variável global para ser o índice.
    */
      
    document.getElementById("pergunta").innerHTML   =   pergunta.perg;
    document.getElementById("alt1").innerHTML       =   pergunta.primeira;
    document.getElementById("alt2").innerHTML       =   pergunta.segunda;
    document.getElementById("alt3").innerHTML       =   pergunta.terceira;
    document.getElementById("correta").value        =   pergunta.certa;
}
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