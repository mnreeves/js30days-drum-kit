document.addEventListener("keypress", function onKeypress(evt) {
  
  if (evt.keyCode === 97) {
    const divElement = document.getElementById('key-a');
    divElement.style.backgroundColor = "yellow";
    document.getElementById("clap").play();

    document.addEventListener("keyup", function onKeyup() {
      divElement.style.backgroundColor = "rebeccapurple";      
    }, false);
  }

  if (evt.keyCode === 115) {
    const divElement = document.getElementById('key-s');
    divElement.style.backgroundColor = "yellow";
    document.getElementById("hihat").play();

    document.addEventListener("keyup", function onKeyup() {
      divElement.style.backgroundColor = "rebeccapurple";      
    }, false);
  }

  if (evt.keyCode === 100) {
    const divElement = document.getElementById('key-d');
    divElement.style.backgroundColor = "yellow";
    document.getElementById("kick").play();

    document.addEventListener("keyup", function onKeyup() {
      divElement.style.backgroundColor = "rebeccapurple";      
    }, false);
  }

  if (evt.keyCode === 102) {
    const divElement = document.getElementById('key-f');
    divElement.style.backgroundColor = "yellow";
    document.getElementById("openhat").play();

    document.addEventListener("keyup", function onKeyup() {
      divElement.style.backgroundColor = "rebeccapurple";      
    }, false);
  }

  if (evt.keyCode === 103) {
    const divElement = document.getElementById('key-g');
    divElement.style.backgroundColor = "yellow";
    document.getElementById("boom").play();

    document.addEventListener("keyup", function onKeyup() {
      divElement.style.backgroundColor = "rebeccapurple";      
    }, false);
  }

  if (evt.keyCode === 104) {
    const divElement = document.getElementById('key-h');
    divElement.style.backgroundColor = "yellow";
    document.getElementById("ride").play();

    document.addEventListener("keyup", function onKeyup() {
      divElement.style.backgroundColor = "rebeccapurple";      
    }, false);
  }

  if (evt.keyCode === 106) {
    const divElement = document.getElementById('key-j');
    divElement.style.backgroundColor = "yellow";
    document.getElementById("snare").play();

    document.addEventListener("keyup", function onKeyup() {
      divElement.style.backgroundColor = "rebeccapurple";      
    }, false);
  }

  if (evt.keyCode === 107) {
    const divElement = document.getElementById('key-k');
    divElement.style.backgroundColor = "yellow";
    document.getElementById("tom").play();

    document.addEventListener("keyup", function onKeyup() {
      divElement.style.backgroundColor = "rebeccapurple";      
    }, false);
  }
  
  if (evt.keyCode === 108) {
    const divElement = document.getElementById('key-l');
    divElement.style.backgroundColor = "yellow";
    document.getElementById("tink").play();

    document.addEventListener("keyup", function onKeyup() {
      divElement.style.backgroundColor = "rebeccapurple";      
    }, false);
  }
  
}, false);

