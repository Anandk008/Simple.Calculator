// Clears the screen on click of C button.
function clearResults() {
    document.getElementById("result").value = "";
  }
  // Displays the entered value on screen.
  function liveScreen(value) {
    document.getElementById("result").value += value;
  }
  // Swaps the style sheet in order to  achieve dark mode.
  function Switchtheme() {
    let darkMode = document.getElementById("dark-mode");
    let theme = document.getElementById("theme");
    if (theme.getAttribute("href") == "Light.css") {
      theme.href = "Dark1.css";
      darkMode.innerHTML = "Light Mode 🌞";
    } else {
      theme.href = "Light.css";
      darkMode.innerHTML = "Dark Mode 🌙";
    }
  }
