function setVhVariable() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', vh);
}

function setVwVariable() {
  const vw = window.innerWidth * 0.01;
  document.documentElement.style.setProperty('--vw', vw);
}

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

try {
  window.addEventListener('load', () => {
    setVhVariable();
    setVwVariable();
  });

  window.addEventListener('resize', setVwVariable);
  screen.orientation.addEventListener('change', setVhVariable);

  document.addEventListener('DOMContentLoaded', () => {
    setVhVariable();
    setVwVariable();

    const headerHeight = document.getElementById('main-header').offsetHeight;
    document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);

    setObserver(document.querySelector('.service-block'), ({ width }) => {
      const maxWidth = 132;
      document.getElementById('services').style.setProperty('--service-block-ratio', Math.min(1, width / maxWidth));
    });
  });
} catch (error) {
  console.error(error);
}