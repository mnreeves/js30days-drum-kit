document.addEventListener("keypress", function onKeypress(evt) {
  const mapKeyCodesAndSound = [
    { key: 97, soundName: "clap", keyId: 'key-a' },
    { key: 115, soundName: "hihat", keyId: 'key-s' },
    { key: 100, soundName: "kick", keyId: 'key-d' },
    { key: 102, soundName: "openhat", keyId: 'key-f' },
    { key: 103, soundName: "boom", keyId: 'key-g' },
    { key: 104, soundName: "ride", keyId: 'key-h' },
    { key: 106, soundName: "snare", keyId: 'key-j' },
    { key: 107, soundName: "tom", keyId: 'key-k' },
    { key: 108, soundName: "tink", keyId: 'key-l' },
  ];

  const data = mapKeyCodesAndSound.filter(item => item.key === evt.keyCode);
  if (data.length === 0) return;

  const { soundName, keyId } = data[0];
  const divElement = document.getElementById(keyId);
  if (divElement === null) return;

  divElement.style.backgroundColor = "rebeccapurple";
  document.getElementById(soundName).play();

  // return to default color
  document.addEventListener("keyup", function onKeyup() {
    divElement.style.backgroundColor = "black";
  }, false);
}, false);

