//DOM
//Document object Model
// Event-driven
// Programação imperativa
// Callback

//EcmaScript - ES6 modules

//default export
import Controls from "./controls.js";
//Named export
import Timer from "./timer.js";
import Sounds from "./sounds.js"
import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  buttonSoundOn,
  buttonSoundOff,
  minutesDisplay,
  secondsDisplay} from "./elements.js"


const sound = Sounds()

const controls = Controls({ //Objeto contendo as dependencias da Factory Controls
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop
})

const timer = Timer({ //Objeto contendo as dependencias da Factory
  minutesDisplay,
  secondsDisplay,
  resetControls : controls.reset
})



/*Eventos da aplicação */
buttonPlay.addEventListener('click', function() {
  controls.play()
  timer.countDown();
  sound.pressButton()
 

})

buttonPause.addEventListener('click', function() {

  controls.pause()
  timer.hold()
  sound.pressButton()

})


buttonStop.addEventListener('click', function() {

  controls.reset()
  timer.reset()
  sound.pressButton()
  
})


buttonSoundOn.addEventListener('click', function() {
  
  buttonSoundOff.classList.remove('hide');
  buttonSoundOn.classList.add('hide');
  sound.bgAudio.pause()

})

buttonSoundOff.addEventListener('click', function() {
  
  buttonSoundOff.classList.add('hide');
  buttonSoundOn.classList.remove('hide');
  sound.bgAudio.play()

  
})

/* Lógica para pedir e mudar o número */
buttonSet.addEventListener('click', function() {
  let newMinutes = controls.getMinutes();
  
  if(!newMinutes){ /* Checar se for diferente de numérico */
    timer.reset()
    return
  }

  timer.updateDisplay(newMinutes, 0);
  timer.updateMinutes(newMinutes)
})