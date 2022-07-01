import Sounds from "./sounds.js";

export default function Timer({  //Objetos como parametros - Dependencias
  minutesDisplay,
  secondsDisplay,
  resetControls,
}){

let timerTimeOut;
let minutes = Number(minutesDisplay.textContent);

/* Recebe os minutos atuais e os segundos configurados e  coloca o 0 na frente a baixo dos 10 min e 10 sec */
function updateDisplay(minutes, seconds){ 
  minutesDisplay.textContent = String(minutes).padStart(2, "0");
  secondsDisplay.textContent = String(seconds).padStart(2, "0");
}

function reset(){ /* Para a aplicação e atualiza os minutos para o valor inicial */
  updateDisplay(minutes, 0);
  clearTimeout(timerTimeOut); //Parar a função do contador
}


function countDown(){
  timerTimeOut = setTimeout(function(){
    let seconds = Number(secondsDisplay.textContent);
    let minutes = Number(minutesDisplay.textContent);

    if(minutes <= 0 && seconds == 0){
      reset()
      resetControls()
      Sounds().timeEnd()
      return
;
    }

    if(seconds <= 0){
      seconds = 5
      --minutes 
    } 

    updateDisplay(minutes, seconds - 1)//Pega os minutos decrementados a cima

    

    countDown();
  }, 1000)
}

function updateMinutes(newMinutes){
  minutes = newMinutes
}

function hold(){
  clearTimeout(timerTimeOut)
}

return { /*Podemos usar shortHand quando uma propriedade de objeto tiver ela mesma como valor*/
  countDown,
  reset,
  updateDisplay,
  updateMinutes,
  hold

}

}