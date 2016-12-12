/* O JAVASCRIPT
 * Aqui é nosso palco principal, onde iremos controlar os elementos HTML e aplicar dinâmica e lógica para nossa página.
 * Vamos aplicar lógica, não deixando que o jogador prossiga sem colocar o nome. Pra isso vamos ver variáveis e o uso de if no clicar().
 */

function apareca(){
    document.getElementById("login").style.display="block";
}

function clicar(){
    //para criar uma variável, use o termo var, e logo após o nome da variável
    var nmJogador;
    //Para atribuir valor, basta chamar a variável e usar o sinal de igual.
    //Substitua as duas aspas duplas abaixo pelo atributo value contido no elemento de id txtJogador
    nmJogador = "";
    /*
    Assim o nmJogador estará com o que o usuário digitar em txtJogador. 
    Mas para evitar que o usuário seja esperto e insira apenas espaço, vamos usar o método trim().
    Ele remove espaços no início e no final de uma string.
    */
    nmJogador=nmJogador.trim();
    /* As estruturas condicionais estabelecem blocos que serão executados se a condição estabelecida for verdadeira.
    Usamos operadores lógicos para comparação.
    == igual
    != diferente
    && e
    || ou
    > maior
    < menor
    >= maior ou igual
    <= menor ou igual
    !  negação (o que é verdadeiro torna-se falso e vice-versa)
    A estrutura funciona assim.
    if(condicao){
        Executo caso seja verdadeiro
    }
    Se eu quiser executar algo também se a condição não for verdadeira, uso o else logo após o bloco.
    if(condicao){
        Executo caso seja verdadeiro
    }else{
        Executo caso seja falso
    }
    
    Sabendo isso, faça com que esta linha abaixo seja executada apenas se a variável nmJogador tiver algum conteúdo, ou seja,
    seja diferente de "". Caso contrário, exiba uma caixa de alerta informando o campo que precisa ser validado. Usamos a função
    alert() para isto, por exemplo: alert("Preencha seu nome!").
    */
    document.getElementById("login").style.display="block";
}