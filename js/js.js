/* O JAVASCRIPT
 * Agora vamos criar uma lista com as melhores pontua... Oi? Faltou alguma coisa, não? A pontuação!
 * Agora a coisa vai ficar mais complexa. Vamos fazer um ranking, mas primeiro vamos só armazenar a maior pontuação.
 * Com isto, não vamos mexer nada neste código. Tem um pontuacoes.js para codificar!
 */

var perguntas = geraQuizz();
var nmJogador;
var idx       = 0;
var pontos    = 0;
function atualiza(i){
    var pergunta = perguntas[i]
    document.getElementById("pergunta").innerHTML   =   pergunta.perg;
    document.getElementById("alt1").innerHTML       =   pergunta.primeira;
    document.getElementById("alt2").innerHTML       =   pergunta.segunda;
    document.getElementById("alt3").innerHTML       =   pergunta.terceira;
    document.getElementById("correta").value        =   pergunta.certa;
}
function acaba(){
    document.getElementById("jogo").style.display     = "none";        
    document.getElementById("acabou").style.display   = "block";        
    document.getElementById("finalJogador").innerHTML = nmJogador;    
    document.getElementById("finalPontos").innerHTML  = pontos;    
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
            pontos=pontos+10;
        }else{
            alert("Resposta INCORRETA!")
        }
        idx=idx+1;
        if(idx>=perguntas.length){
            acaba();
        }else{
            atualiza(idx);
        }
    }else{
        alert("Selecione uma alternativa!");
    }
}