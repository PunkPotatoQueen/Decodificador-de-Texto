const textarea = document.querySelector('#textarea');
const botaoCrip = document.querySelector('#botaoCrip');
const botaoDeCrip = document.querySelector('#botaoDeCrip');
const botaoCopiar = document.querySelector('#botaoCopiar');

botaoCrip.addEventListener('click', criptografar);
botaoDeCrip.addEventListener('click', descriptografar);
botaoCopiar.addEventListener('click', copiarTexto);

function criptografar(){
    const texto = textarea.value;
    const textoCriptografado = texto
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
    textarea.value = textoCriptografado;
}

function descriptografar() {
    const textoCriptografado = textarea.value;
    const textoDescriptografado = textoCriptografado
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
    textarea.value = textoDescriptografado;
  }

  function copiarTexto() {
    textarea.select();
    document.execCommand("copy");
    alert("Texto copiado para a área de transferência!");
  }