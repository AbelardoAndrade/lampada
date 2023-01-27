const turnOn = document.getElementById("turnOn");
const turnOff = document.getElementById("turnOff");
const replace = document.getElementById("replace");
const lamp = document.getElementById("lamp");
const sobre = document.getElementById("sobre")
const breve = document.getElementById("breve")


function comming() {
alert('Em breve este link estará disponível!');
}

function about() {
    alert('Este desafio foi criado através de alguns estudos baseados em JavaScript puro (Vanilla JS) e foi utilizado para aprendizado e treinamento da linguagem JavaScript. Visite meu GitHub ou o meu Portifólio para ver mais trabalhos meus! Obrigado por visitar esta página, seu apoio é muito importante!');
}

function isBroken() {
  return lamp.src.indexOf("broken") > -1;
}

function lampOn() {
    
  if (!isBroken()) {
    lamp.src = "./assets/turnOn.png"; 
  }
}

function lampOff() {
  if (!isBroken()) {
    lamp.src = "./assets/turnOff.png";
  }
}

function lampBroken() {
    alert('Oh não! Você quebrou a lâmpada! Clique em Replace Lamp para substituir!')
  lamp.src = "./assets/broken.png";
}

function replacer() {
  if (!isBroken()) {
    alert('Esta lâmpada funciona! Não é necessário substituí-la!')} else { (alert('Você substituiu a lâmpada!'))
    lamp.src = "./assets/turnOff.png";
  }
}

/*/Essa parte do código foi feita para funcionar o double-touch para a quebra da lâmpada/*/
var clickTimer = null;

function touchStart() {
    if (clickTimer == null) {
        clickTimer = setTimeout(function () {
            clickTimer = null;
            (alert("Cuidado! Você pode se machucar!"));

        }, 500)
    } else {
        clearTimeout(clickTimer);
        clickTimer = null;
       (lampBroken()), alert('Oh não! Você quebrou a lâmpada! Clique em Replace Lamp para substituir!');

    }
}
/*/Essa parte do código foi feita para funcionar o double-touch para a quebra da lâmpada/*/

turnOn.addEventListener("click", lampOn);
turnOff.addEventListener("click", lampOff);
replace.addEventListener("click", replacer);
lamp.addEventListener("dblclick", lampBroken);
lamp.addEventListener("touchstart", touchStart);
sobre.addEventListener("click", about);
breve.addEventListener('click', comming);

