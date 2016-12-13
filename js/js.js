/* O JAVASCRIPT
 * Aqui é nosso palco principal, onde iremos controlar os elementos HTML e aplicar dinâmica e lógica para nossa página.
 * Se você testou o jogo, notou que ele não fez absolutamente nada no final do jogo. 
 * Nos browsers mais recentes, temos um recurso através do F12 - é a área do desenvolvedor, podemos depurar nosso código, e acompanhar  
 se algum recurso simplesmente não foi carregado, ou ainda - se houve erro no javascript. Se você testar com este recurso aberto, vai
 ver que algo aparece no console como erro, provavelmente uma mensagem parecida com esta:
                                        TypeError: pergunta is undefined
 * Ele tentou acessar uma posição inexistente no vetor, e retornou undefined, é um tipo primitivo do javascript que indica que NENHUM 
 valor foi atribuido e se ele não tem valor algum... Ele nem objeto é! Isto aconteceu por tentar acessar um valor além da quantidade de
 vetores.
 
 Então, lá na função responder, onde é acrescentado 1 ao idx ,vamos verificar se idx é maior que a dimensão do vetor. Acessamos este valor
 através do atributo length. (exemplo: perguntas.length). Se esta comparação for verdadeira, idx deverá voltar a 0. Depois trataremos o 
 final do jogo.
 */

var perguntas = geraQuizz();
var nmJogador;
var idx       = 0;

function atualiza(i){
    var pergunta = perguntas[i]
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
    nmJogador = document.getElementById("txtJogador").value;
    nmJogador=nmJogador.trim();
    if(nmJogador!=""){
        document.getElementById("login").style.display="none";        
        document.getElementById("jogo").style.display="block";        
        atualiza(idx);
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
        idx=idx+1;
        atualiza(idx);
    }else{
        alert("Selecione uma alternativa!");
    }
}