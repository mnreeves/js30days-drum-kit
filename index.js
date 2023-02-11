document.addEventListener("keypress", function onKeypress(evt) {
  
  if (evt.keyCode === 97) {
    const divElement = document.getElementById('key-a');
    divElement.style.backgroundColor = "rebeccapurple";
    document.getElementById("clap").play();

    document.addEventListener("keyup", function onKeyup() {
      divElement.style.backgroundColor = "black";      
    }, false);
  }

  if (evt.keyCode === 115) {
    const divElement = document.getElementById('key-s');
    divElement.style.backgroundColor = "rebeccapurple";
    document.getElementById("hihat").play();

    document.addEventListener("keyup", function onKeyup() {
      divElement.style.backgroundColor = "black";      
    }, false);
  }

  if (evt.keyCode === 100) {
    const divElement = document.getElementById('key-d');
    divElement.style.backgroundColor = "rebeccapurple";
    document.getElementById("kick").play();

    document.addEventListener("keyup", function onKeyup() {
      divElement.style.backgroundColor = "black";      
    }, false);
  }

  if (evt.keyCode === 102) {
    const divElement = document.getElementById('key-f');
    divElement.style.backgroundColor = "rebeccapurple";
    document.getElementById("openhat").play();

    document.addEventListener("keyup", function onKeyup() {
      divElement.style.backgroundColor = "black";      
    }, false);
  }

  if (evt.keyCode === 103) {
    const divElement = document.getElementById('key-g');
    divElement.style.backgroundColor = "rebeccapurple";
    document.getElementById("boom").play();

    document.addEventListener("keyup", function onKeyup() {
      divElement.style.backgroundColor = "black";      
    }, false);
  }

  if (evt.keyCode === 104) {
    const divElement = document.getElementById('key-h');
    divElement.style.backgroundColor = "rebeccapurple";
    document.getElementById("ride").play();

    document.addEventListener("keyup", function onKeyup() {
      divElement.style.backgroundColor = "black";      
    }, false);
  }

  if (evt.keyCode === 106) {
    const divElement = document.getElementById('key-j');
    divElement.style.backgroundColor = "rebeccapurple";
    document.getElementById("snare").play();

    document.addEventListener("keyup", function onKeyup() {
      divElement.style.backgroundColor = "black";      
    }, false);
  }

  if (evt.keyCode === 107) {
    const divElement = document.getElementById('key-k');
    divElement.style.backgroundColor = "rebeccapurple";
    document.getElementById("tom").play();

    document.addEventListener("keyup", function onKeyup() {
      divElement.style.backgroundColor = "black";      
    }, false);
  }
  
  if (evt.keyCode === 108) {
    const divElement = document.getElementById('key-l');
    divElement.style.backgroundColor = "rebeccapurple";
    document.getElementById("tink").play();

    document.addEventListener("keyup", function onKeyup() {
      divElement.style.backgroundColor = "black";      
    }, false);
  }
  
}, false);

