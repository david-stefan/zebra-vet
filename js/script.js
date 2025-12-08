function setVhVariable() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

window.addEventListener('load', setVhVariable);
screen.orientation.addEventListener('change', setVhVariable);

function setObserver(element, callback) {
  const resizeObserver = new ResizeObserver((entries) => {
    for (const entry of entries) {
      const width = entry.contentRect.width;
      const height = entry.contentRect.height;
      callback(width, height);
    }
  });
  resizeObserver.observe(element);
}

document.addEventListener('DOMContentLoaded', () => {
  const headerHeight = document.getElementById('main-header').offsetHeight;
  document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);

  setObserver(document.querySelector('.service-block'), (width) => {
    const maxWidth = 132;
    document.getElementById('services').style.setProperty('--service-block-ratio', Math.min(1, width / maxWidth));
  });
});