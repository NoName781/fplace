const canvas = document.getElementById('canvas');

const drawGrid = () => {
  canvas.innerHTML = ''; // Alte Pixel löschen

  // Zeichne die Pixel auf dem Canvas
  gridData.forEach((color, index) => {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixel.style.backgroundColor = color;

    pixel.addEventListener('click', () => {
      if (canPlacePixels()) {
        // Platzieren der Pixel (32 Pixel auf einmal)
        for (let i = 0; i < 32; i++) {
          updatePixel(index + i, getRandomColor()); // Zufällige Farbe setzen
        }
      }
    });

    canvas.appendChild(pixel);
  });
};

// Funktion für zufällige Farben (hier als Beispiel)
const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

// Überprüfe, ob Pixel platziert werden können
let lastPlaced = 0;
const canPlacePixels = () => {
  const now = Date.now();
  if (now - lastPlaced > 30000) { // 30 Sekunden warten
    lastPlaced = now;
    return true;
  }
  return false;
};

setInterval(drawGrid, 1000); // Raster jede Sekunde neu zeichnen

drawGrid(); // Beim ersten Laden sofort anzeigen
