//Função que criará uma pergunta a partir do conceito de objetos no javascript - JSON está aí! 
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
//Aqui adicionamos as perguntas a um vetor!
	function geraQuizz(){
		var perguntas=[];
		perguntas.push(addPergunta("Qual das cores não faz parte da bandeira da Holanda?",
								"Vermelho",
								"Azul",
								"Verde",
								3));
		perguntas.unshift(addPergunta("Qual a capital do Brasil?",
								"Rio de Janeiro",
								"Buenos Aires",
								"Brasilia",
								3));	
		perguntas.push(addPergunta("Qual time venceu na casa do adversário, em uma semifinal de copa do mundo, pelo placar de 7 a 1?",
								"Itália",
								"Alemanha",
								"Equador",
								2));						
		return perguntas;
	}