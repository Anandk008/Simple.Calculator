// Clears the screen on click of C button.
function clearResults() {
    document.getElementById("result").value = "";
  }
  // Displays the entered value on screen.
  function liveScreen(value) {
    document.getElementById("result").value += value;
  }


const mode = document.getElementById('dark-mode');

mode.addEventListener('click',modeChange);

function modeChange(){

  // Variables
  
  
  const mode = document.getElementById("dark-mode");
  const i = mode.getElementsByTagName('i')
  const link = document.querySelectorAll('link');

  if(mode.className === "dark"){
    mode.className = "light";
    i[0].className = 'fa fa-sun fa-2x';
    link[1].href = "dark_mode.css";
  }else{
    mode.className = "dark";
    i[0].className = 'fa fa-moon fa-2x';
    link[1].href = "light_mode.css";
  }

}
 