 
 var nome = "Josimar Souza "; //tipagem dinamica não precisa definir o tipo de mensagem
 var idade = 25;
 
 //alert(nome + "tem " + idade + " anos");// cria um alerta com um pop up de mensagem na tela
 
 //consele.log(nome); //mostra no console apertando inspensiona pagina o que a variavel contem
 //alert(nome.replace("Josimar", "Perseu")); //replace troca josimar por perseu, dunciona no alert como no console
 
 var lista = ["maça", "pera", "laranja",] //declaração de vetor no javascript
 console.log(lista);
 lista.push("uva");//adiciona na lista ultima posição
 lista.pop(); // remove o ultimo elemento da minha lista
 
 console.log(lista.toString());// transforma a lista em uma string
 console.log(lista.join(" * ")); // transforma a lista em uma string separada pelo que tiver no parametro
 console.log(lista.length);
 
 var fruta = {nome:"babana", cor:"amarela", suco:"não"} //declaração de dicionario
 console.log(fruta);//tambem pode ser feito uma lista de diconarios
 
 /*idade = prompt("Qual sua idade");
 
 if(idade >= 18){
	 alert("maior de idade");
	 
 }else{
	 alert("menor de idade");
 }*/
 
 /*var count = 5; //estruturas de repetição
 var cont;
 while(count>0){
	 console.log(count--);
 };
 for(cont=0;cont<=5;cont++){
	 
	 console.log(cont)
 }*/
 
 var data = new Date();
 console.log(data);
 console.log(data.getDay());
  console.log(data.getHours(), data.getMinutes());
   console.log(data.getMonth()+1);
 
 