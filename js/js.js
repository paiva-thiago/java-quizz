/* O JAVASCRIPT
 * Aqui é nosso palco principal, onde iremos controlar os elementos HTML e aplicar dinâmica e lógica para nossa página.
 * Agora vamos ver mais recursos do DOM - o innerHTML - e vamos entender sobre variáveis locais e globais
 */

var perguntas = geraQuizz();
/*
      Sabe esse cara acima? Ele é um cara global. Não, isto não é sobre televisão. E sim sobre o alcance dele. 
      A diferença entre variáveis locais e globais é exatamente sobre o alcance. 
      Este *perguntas* pode ser acessado de qualquer função do meu código, já que criei fora de qualquer função.
      Agora... se eu tentar, por exemplo, acessar o nmJogador que está em clicar() no apareca(), vou ter problemas. Isto por um simples
    motivo: Ele foi declarado DENTRO do clicar() e estará acessível somente dentro dele.
    
      1) vamos precisar do seguinte. o nmJogador vai ser utilizado em outras funções. Então a declaração que está logo abaixo da 
      função clicar(), precisa estar no mesmo nível que a variável perguntas. Coloque logo abaixo dela! :)
      
      2) Crie uma função, logo após este comentário, que altere o conteúdo de alguns elementos no html.
         Vamos alterar a pergunta, cada alternativa e o value do input da resposta correta. Exceto este input, todos alterarão o atributo
         innerHTML. Ele altera o conteúdo que está entre as tags de um elemento do HTML. 
         Eles serão alimentados pela primeira posição do perguntas. A função já está pronta para você completar!
*/
function atualiza(){
    var pergunta = perguntas[0];
    //Complete aqui!
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