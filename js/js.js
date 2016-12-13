/* O JAVASCRIPT
 * Agora vamos criar uma lista com as melhores pontua... Oi? Faltou alguma coisa, não? A pontuação!
 * Esta tarefa é uma das mais simples. Crie uma variável global, incremente 10 a cada acerto, e exiba dentro da tag finalPontos
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
function acaba(){
    document.getElementById("jogo").style.display="none";        
    document.getElementById("acabou").style.display="block";        
    document.getElementById("finalJogador").innerHTML = nmJogador;    
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
        if(idx>=perguntas.length){
            acaba();
        }//Veja que o atualiza continua a ser chamado e causar erro. Vamos criar um else e colocar esta linha abaoxp demtro dele.        
        atualiza(idx);
    }else{
        alert("Selecione uma alternativa!");
    }
}