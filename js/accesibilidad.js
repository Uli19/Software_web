(() => {
  const body = document.body;
  const maxFontSize = 5;
  const minFontSize = 1;
  let currentFontSize = 1;

  // Aumentar fuente
  document.getElementById('fontIncrease').addEventListener('click', () => {
    if (currentFontSize < maxFontSize) {
      currentFontSize++;
      updateFontSize();
    }
  });

  // Disminuir fuente
  document.getElementById('fontDecrease').addEventListener('click', () => {
    if (currentFontSize > minFontSize) {
      currentFontSize--;
      updateFontSize();
    }
  });

  function updateFontSize() {
    for (let i = minFontSize; i <= maxFontSize; i++) {
      body.classList.remove('font-size-' + i);
    }
    body.classList.add('font-size-' + currentFontSize);
  }

  // Cambio de fuente
  document.getElementById('fontChange').addEventListener('change', (e) => {
    const font = e.target.value;
    switch (font) {
      case 'arial': body.style.fontFamily = 'Arial, sans-serif'; break;
      case 'verdana': body.style.fontFamily = 'Verdana, sans-serif'; break;
      case 'times': body.style.fontFamily = '"Times New Roman", serif'; break;
      case 'monospace': body.style.fontFamily = 'monospace'; break;
      default: body.style.fontFamily = '';
    }
  });

  // Modo oscuro
  document.getElementById('toggleDarkMode').addEventListener('click', () => {
    body.classList.toggle('dark-mode');
  });

  // Alto contraste
  document.getElementById('toggleHighContrast').addEventListener('click', () => {
    body.classList.toggle('high-contrast');
  });

  // Daltonismo
  document.getElementById('toggleColorBlind').addEventListener('click', () => {
    body.classList.toggle('color-blind');
  });

  // Cambiar cursor
  document.getElementById('toggleCursor').addEventListener('click', () => {
    body.classList.toggle('custom-cursor');
  });

  // Quitar imágenes
  document.getElementById('toggleImages').addEventListener('click', () => {
    body.classList.toggle('hide-images');
  });

  // Quitar links
  document.getElementById('toggleLinks').addEventListener('click', () => {
    body.classList.toggle('no-links');
  });

  document.getElementById('resetAccesibilidad').addEventListener('click', () => {
  const body = document.body;

  // Remover todas las clases especiales
  body.classList.remove(
    'dark-mode',
    'high-contrast',
    'color-blind',
    'custom-cursor',
    'hide-images',
    'no-links',
    'font-size-2',
    'font-size-3',
    'font-size-4',
    'font-size-5'
  );

  // Reset font size a 1 (el más pequeño o inicial)
  currentFontSize = 1;
  updateFontSize();

  // Reset fuente (select) a default
  document.getElementById('fontChange').value = 'default';
  body.style.fontFamily = '';
});

  // Inicializar con font-size 1
  updateFontSize();

  // Abrir/cerrar panel accesibilidad
  const btnAcc = document.getElementById('btnAccesibilidad');
  const panel = document.getElementById('panelAccesibilidad');
  const btnClose = document.getElementById('closePanel');

  btnAcc.addEventListener('click', () => {
    const expanded = btnAcc.getAttribute('aria-expanded') === 'true';
    if (expanded) {
      panel.classList.remove('show');
      btnAcc.setAttribute('aria-expanded', 'false');
      panel.setAttribute('aria-hidden', 'true');
    } else {
      panel.classList.add('show');
      btnAcc.setAttribute('aria-expanded', 'true');
      panel.setAttribute('aria-hidden', 'false');
    }
  });

  btnClose.addEventListener('click', () => {
    panel.classList.remove('show');
    btnAcc.setAttribute('aria-expanded', 'false');
    panel.setAttribute('aria-hidden', 'true');
  });
})();
