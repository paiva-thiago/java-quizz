/*
                                SESSÕES E RANKING
    Voltando pra cá, seria interessante ter uma lista de maiores pontuações, não? :)
    Podemos armazenar um vetor de objeto (que contém nome e pontos), fazer uma ordenação, mas... O recurso webStorage somente armazena
    informações alfanuméricas! Como podemos fazer?
    
    Lembra que criamos objetos com JSON? O JS nos fornece JSON.stringify, que converte um elemento em string, e o JSON.parse 
    que faz o inverso!
    
    Então fica o desafio. Crie uma variável global que seja um vetor de objetos jogador.
    Com isto, crie uma função que receba como argumento o nome do jogador e sua pontuação, crie o objeto com estas propriedades e insira 
    no vetor. Mas não só isto. Que este vetor esteja ordenado!
    
    Mas armazene isto em um espaço no sessionStorage, usando os recursos JSON mencionados agora.
 */
function pegaPonto(){
	var p = sessionStorage.getItem("PONTOS");
	if (p==undefined){
		p=0;
		sessionStorage.setItem("PONTOS",p);
	}
	return p;	
}
function atualizaPonto(nome,novo){
	var atual = pegaPonto();
	if (novo>atual){
		sessionStorage.setItem("PONTOS",novo);
		sessionStorage.setItem("NOME",nome);
	}
	return (novo>atual);
}
function pegaRecordista(){
	return sessionStorage.getItem("NOME");
}