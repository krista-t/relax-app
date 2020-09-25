//GLOBAL VARIABLES

const container = document.querySelector("#container");
const text = document.querySelector("#text");
const totalTime = 9000;
const inhaleTime = (totalTime / 4.5) * 2;



//one function to do it all
function breathe() {

  //set text and animation for inhale 
  text.innerHTML = "INHALE"
  container.className = "grow"

  //set text and animation, and time  for exhale
  setTimeout(() => {

    text.innerHTML = "EXHALE"
    container.className = "shrink"

  }, inhaleTime);

}


breathe();

setInterval(breathe, totalTime);