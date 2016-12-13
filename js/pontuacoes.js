/*
                                        ********* SESSÕES ***************
Temos um recurso muito interessante no JavaScript onde podemos armazenar informações para utilizar em outros momentos. Damos o nome de
sessões. Este recurso se chama webStorage. E pode ser feito de duas formas:

localStorage   - as informações são armazenadas de forma temporária - se fecho a aba do navegador, os dados se perdem
sessionStorage - as informações permanecem armazenadas, mesmo após o fechamento de uma aba.

Ambos possuem métodos com o mesmo nome. Para trabalharmos com uma informação, sempre daremos um nome chave - como um nome de uma variável.
temos o getItem(nomeDaChave) que retorna o valor armazenado, setItem(nomeDaChave,valor) que cria/atualiza o valor e o clear(), que limpa 
tudo.

Vamos então armazenar a pontuação do nosso jogador, caso ele quebre o recorde ;) 

Usando os métodos do  sessionStorage ou localStorage (lembre que não dá pra usar de formas alternadas, estas informações ficam em áreas
separadas na memória!), use campos PONTOS - pra maior pontuação e NOME - para o nome do recordista -  crie três funções:

    - Um para atualizar a pontuação 
        - Ele deverá ter dois argumentos: o nome do jogador que está jogando e sua respectiva pontuação.
        - Dentro dele, ele deverá resgatar a maior pontuação salva, e atualizar - pontuação e nome do jogador caso a condição permita
    - Um para obter a pontuação armazenada
        - Lembre que se jogar pela primeira vez, ele estará como undefined. Trate isto usando o setItem e o valor 0.
    - Um para obter o nome do recordista.
        - um return e um getItem("NOME") bastam :)
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