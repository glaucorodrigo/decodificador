const inputTexto = document.querySelector(".caixa");
const mensagem = document.querySelector(".segundacaixa");
    
function btnEncriptar() {
	const textoEncriptado = encriptar(inputTexto.value);
	mensagem.value = textoEncriptado;
	mensagem.style.backgroundImage = "none";
	aparece()
}

function encriptar(stringEncriptada){
	let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
	stringEncriptada = stringEncriptada.toLowerCase();

	for(let i = 0; i < matrizCodigo.length; i++) {

		if(stringEncriptada.includes(matrizCodigo[i][0])){
		  	stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);	
		}
	}

	return stringEncriptada;
}

	function btnDesencriptar() {
	const textoDesencriptado = desencriptar(inputTexto.value);
	mensagem.value = textoDesencriptado;
	mensagem.style.backgroundImage = "none";
	aparece()	
}
	function desencriptar(stringDesencriptada){
	let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
	stringDesencriptada = stringDesencriptada.toLowerCase();

	for(let i= 0; i < matrizCodigo.length; i++) {

		if(stringDesencriptada.includes(matrizCodigo[i][1])){
			stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);	
		}
	}

	return stringDesencriptada;
}

function btnCopiar(){
		const mensagem = document.querySelector('.segundacaixa')
		mensagem.select();
  		navigator.clipboard.writeText(mensagem.value);
  		mensagem.value = "";
 }

 function aparece() {
    document.getElementById("naoaparece").style.display = 'none';
    document.getElementById("naoaparece2").style.display = 'none';
}
