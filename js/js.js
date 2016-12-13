/* O JAVASCRIPT
 * Vamos agora dar um fim a este jogo!
 * Vamos encerrar este loop de perguntas. Assim como fizemos na função clicar() vamos fazer aqui, mas ocultando a div id jogo  e exibindo
   a div id acabou (sim, veja no html, tem elemento novo por lá!). Vamos colocar isto em uma função.
   
   Nesta função você também alterará o innerHTML do span com id finalJogador! Não estranhe a pontuação zerada, vamos fazer isso no próximo passo!
   
   Com a função feita, troque a linha que zera o idx pela chamada da função.
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
        if(idx>=perguntas.length){
            idx=0;    
        }        
        atualiza(idx);
    }else{
        alert("Selecione uma alternativa!");
    }
}