const inputTexto = document.querySelector(".input-texto");
const mensagem = document.querySelector(".mensagem");


function btnEncriptar() {
    const textoEncriptado = encriptar(inputTexto.value)
    mensagem.value = textoEncriptado
}


function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"],["i", "imes"],["a", "ai"], ["o", "ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i= 0, i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return stringEncriptada;
}
