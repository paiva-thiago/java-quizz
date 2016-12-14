function pegaRanking(){
    var db = sessionStorage.getItem("RANKING");	
    if((db==undefined)||(db==null)){
		sessionStorage.setItem("RANKING","");
	}
    return db;	
}
function setRanking(nmJogador,qtPontos){
    var obj = {
				nome:nmJogador,
				pontos:qtPontos
			  }
    var lst = sessionStorage.getItem("RANKING");
	if(lst.trim()==""){
		lst=[];
	}else{
		lst = JSON.parse(lst);
	}
    lst.push(obj);
    ranking = ordenaRanking(lst);
	lst= JSON.stringify(ranking);
    console.log(lst);
	sessionStorage.setItem("RANKING",lst);
}
function ordenaRanking(arrPontos){
    for(var x=0;x<arrPontos.length;x++){
        for(var y=0;y<arrPontos.length;y++){
            if(x!=y){
                var um = arrPontos[x];
                var outro = arrPontos[y];
                if(um.pontos>outro.pontos){
                    var aux=arrPontos[y];
                    arrPontos[y]=arrPontos[x];
                    arrPontos[x]=aux;
                }
            }
        }
    }
    return arrPontos;
}
var ranking = pegaRanking();
function pegaPonto(){
	var p = sessionStorage.getItem("PONTOS");
	if (p==undefined){
		p=0;
		sessionStorage.setItem("PONTOS",p);
	}
	return p;	
}
function atualizaPonto(nome,novo){
    setRanking(nome,novo);
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
