function setObserver(element, callback) {
  const resizeObserver = new ResizeObserver((entries) => {
    for (const entry of entries) {
      const width = entry.contentRect.width;
      const height = entry.contentRect.height;
      callback({ width, height });
    }
  });
  resizeObserver.observe(element);
}

window.addEventListener('resize', setVwVariable);
screen.orientation.addEventListener('change', setVhVariable);

setObserver(document.querySelector('.service-block'), ({ width }) => {
  const maxWidth = 132;
  document.getElementById('services').style.setProperty('--service-block-ratio', Math.min(1, width / maxWidth));
});
