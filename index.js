document.addEventListener("keypress", function onKeypress(evt) {
  const divElement = document.getElementById('key-a');
  divElement.style.backgroundColor = "yellow";

  if (evt.keyCode === 97) {  
    document.addEventListener("keyup", function onKeyup() {
      divElement.style.backgroundColor = "rebeccapurple";      
    }, false);
  }
  
}, false);

