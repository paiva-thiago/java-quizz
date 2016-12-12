/* O JAVASCRIPT
 * Aqui é nosso palco principal, onde iremos controlar os elementos HTML e aplicar dinâmica e lógica para nossa página.
 * Vamos começar com duas funções, uma estará pronta e a outra deverá seguir o exemplo da anterior.
 */

//Se abriu a página, deve ter notado que nada carregou. Pois os nossos dois elementos estão configurados para estar ocultos via css.
//Isto é possível através do atributo "display" do css, que determina como o elemento deve ser exibido. Podemos manipular pelo javaScript.
function apareca(){
    document.getElementById("login").style.display="block";
    /*
    Este document é parte do que chamamos de DOM, ou Document Object Model. Ele consiste em ver os elementos HTML dentro da tag <body>
    da mesma forma que vemos em orientação a objeto. O document é o nosso objeto que representa o corpo da página, e temos vários métodos
    que permitem obter os elementos dentro dele. Ao chamar o getElementById, eu pego(get) o elemento (Element) pelo Id (By Id). Veja no HTML
    se há algum elemento com este id.
    
    Este elemento também tem vários outros atributos. Um deles é o style, onde estão todos os atributos relacionados a... estilo. Inclusive
    os que foram definidos no css. E podemos alterar como fizemos acima.
    */
    
}

function clicar(){
    //Como foi feito acima, faça duas alterações, uma para o elemento login, outra para o elemento jogo.
    //o elemento com id login deve ser oculto (display none) e o de id jogo aparecer (display block).
    
}