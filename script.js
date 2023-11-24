var loop, fase = 1;

function addBola(){
	var bola = document.createElement("div")
		p1 = Math.floor(Math.random() * 500)
		p2 = Math.floor(Math.random() * 400)
		cor = "#" + Math.floor(Math.random() * 255) + Math.floor(Math.random() * 255) + Math.floor(Math.random() * 255);
	bola.setAttribute("class", "bola");
	bola.setAttribute("style", "left:"+p1+"px;top:"+p2+"px; background-color:"+cor+"; border-style: solid; border-color:#000000;");
	bola.setAttribute("onclick","estourar(this)");
	
	document.body.appendChild(bola);
	if(document.getElementsByClassName("bola").length == 5){
		clearInterval(loop);
		swal({
		  title: 'Ah não...',
		  text: "Você precisa praticar mais! Gostaria de tentar novamente?",
		  type: 'error',
		  showCancelButton: true,
		  confirmButtonColor: '#3085d6',
		  cancelButtonColor: '#d33',
		  confirmButtonText: 'Sim, bora tentar!',
		  cancelButtonText: 'Melhor eu parar...'
		  }).then((result) => {
				if (result.value) {
					location.reload(true);
				}else{
					document.body.innerHTML = "";
				}
			});
	}
}
function estourar(elemento){
	document.body.removeChild(elemento);
	if(fase ==1 && document.getElementsByClassName("bola").length == 0){
		clearInterval(loop);
		swal({
		  title: 'Estourou todos os Balões, bora para a Fase 2!',
		  text: "Parabéns, você é fera!",
		  type: 'success',
		  confirmButtonColor: '#3085d6',
		  confirmButtonText: 'Vaaamoo!'
		  }).then((result) => {
				fase = 2;
				loop = setInterval(addBola, 1200);
			});
	}else if(fase ==2 && document.getElementsByClassName("bola").length == 0){
		clearInterval(loop);
		swal({
		  title: 'Estourou todos os Balões, bora para a Fase 3!',
		  text: "Parabéns, você é fera!",
		  type: 'success',
		  confirmButtonColor: '#3085d6',
		  confirmButtonText: 'Vaaamoo!'
		  }).then((result) => {
				fase = 3;
				loop = setInterval(addBola, 1000);
			});
	}else if(fase ==3 && document.getElementsByClassName("bola").length == 0){
		clearInterval(loop);
		swal({
		  title: 'Você é Campeão, Uhull!',
		  imageUrl: 'https://i.gifer.com/3YK.gif',
		  confirmButtonText: 'Sair do jogo',
		  imageHeight: 300
		})
	}
}
function iniciar(){
	loop = setInterval(addBola, 1500);
}
