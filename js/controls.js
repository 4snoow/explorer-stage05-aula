
export default function Controls({ //injeção de dependência
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop
}){

  function play(){
    buttonPlay.classList.add('hide');
    buttonPause.classList.remove('hide');

    buttonSet.classList.add('hide');
    buttonStop.classList.remove('hide');
  }

  function pause(){
    buttonPause.classList.add('hide');
    buttonPlay.classList.remove('hide');
  }

  /*Funções da aplicação, se utilizando da programação declarativa */
  function reset(){ //Resetar os controles quando apertar stop
    buttonSet.classList.remove('hide')
    buttonPlay.classList.remove('hide')

    buttonPause.classList.add('hide')
    buttonStop.classList.add('hide')
  }

  function getMinutes(){
    let newMinutes = Number(prompt('Quantos minutos ?'));
  
    if(!newMinutes){ /* Checar se for diferente de numérico */
      return false
    }
  
    return newMinutes;

  }

  return {
    reset,
    play,
    pause,
    getMinutes
  }
}



