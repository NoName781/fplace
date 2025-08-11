let gridData = [];

const initializeGrid = () => {
  for (let i = 0; i < 256; i++) {
    gridData.push('#ffffff');  // Standardfarbe: Weiß
  }
};

const updatePixel = (index, color) => {
  gridData[index] = color;
  saveGridToLocalStorage();
};

const getGridData = () => {
  return gridData;
};

// Laden der Grid-Daten aus LocalStorage (oder einer externen Quelle, falls benötigt)
const loadGridFromLocalStorage = () => {
  const savedGrid = localStorage.getItem('fplace_grid');
  if (savedGrid) {
    gridData = JSON.parse(savedGrid);
  } else {
    initializeGrid();
  }
};

const saveGridToLocalStorage = () => {
  localStorage.setItem('fplace_grid', JSON.stringify(gridData));
};

// Initialisiere das Raster, wenn die Seite geladen wird
loadGridFromLocalStorage();
