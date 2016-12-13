/*Agora vamos usar mais um arquivo, este para separar as funções responsáveis pela construção das perguntas!
    Vamos usar vetores e objetos para isto.
    Objeto armazenará as características das perguntas, e o vetor armazenará um grupo dos objetos. Varreremos este vetor durante o jogo!
    */
    function addPergunta(nmPergunta,nmPrimeira,nmSegunda,nmTerceira,idCerta){
		var questao = {
				perg		:	nmPergunta,
				primeira 	:	nmPrimeira,
				segunda		:	nmSegunda,
				terceira	:	nmTerceira,
				certa		:	idCerta
		};
		return questao;
	}
/****VETORES*********

São grupos de elementos do mesmo tipo, em resumo esta é sua definição.

Podemos criar com um simples 
var vetor = [];
Este é um vetor vazio. Temos métodos que permitem adicionar elementos.
unshift(item) adiciona na posição inicial do meu vetor
push(item) adiciona na posição final do meu vetor.
Ambos retornam a nova quantidade de itens.

Podemos também remover itens com métodos
pop() elimina o último item
shift() elimina o primeiro

Ambos retornam quem foi eliminado.

Crie uma função que crie um vetor, adicione neste vetor várias perguntas criadas com a função acima. Use a criatividade para as perguntas.
Esta nova função deverá ter como retorno o próprio vetor.
*/