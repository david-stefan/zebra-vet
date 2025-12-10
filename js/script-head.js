function setVhVariable() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', vh);
}

function setVwVariable() {
  const vw = window.innerWidth * 0.01;
  document.documentElement.style.setProperty('--vw', vw);
}

setVhVariable();
setVwVariable();
