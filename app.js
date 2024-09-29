// Data for dropdowns
const brands = ['Rolex', 'Patek Philippe', 'Audemars Piguet', 'Omega', 'Cartier'];
const modelsByBrand = {
  'Rolex': ['Submariner', 'Daytona', 'Datejust'],
  'Patek Philippe': ['Nautilus', 'Aquanaut', 'Calatrava']
};
const referencesByModel = {
  'Submariner': ['126610LN', '126610LV', '124060'],
  'Daytona': ['116500LN', '116503', '116508']
};
const platforms = ['eBay', 'Chrono24', 'FB MRKTP'];

let userListings = [];
let metrics = {
  averageListingPrice: 0,
  averageSoldPrice: 0,
  medianListingPrice: 0,
  medianSoldPrice: 0
};

// Populate Brand dropdown
const brandSelect = document.getElementById('brand');
brands.forEach(brand => {
  const option = document.createElement('option');
  option.value = brand;
  option.textContent = brand;
  brandSelect.appendChild(option);
});

// Handle Brand change and populate Models dropdown
brandSelect.addEventListener('change', function () {
  const modelSelect = document.getElementById('model');
  modelSelect.innerHTML = '<option value="">Select Model</option>';
  const models = modelsByBrand[this.value] || [];
  models.forEach(model => {
    const option = document.createElement('option');
    option.value = model;
    option.textContent = model;
    modelSelect.appendChild(option);
  });
});

// Handle Model change and populate Reference dropdown
document.getElementById('model').addEventListener('change', function () {
  const referenceSelect = document.getElementById('reference');
  referenceSelect.innerHTML = '<option value="">Select Reference</option>';
  const references = referencesByModel[this.value] || [];
  references.forEach(reference => {
    const option = document.createElement('option');
    option.value = reference;
    option.textContent = reference;
    referenceSelect.appendChild(option);
  });
});

// Populate Year dropdown
const yearSelect = document.getElementById('year');
for (let year = 1950; year <= 2030; year++) {
  const option = document.createElement('option');
  option.value = year;
  option.textContent = year;
  yearSelect.appendChild(option);
}

// Handle adding new listing
const listingsTable = document.getElementById('listings');
platforms.forEach(platform => {
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${platform}</td>
    <td><input type="number" id="${platform}-listing-price" placeholder="Listing Price"></td>
    <td><input type="number" id="${platform}-sold-price" placeholder="Sold Price"></td>
    <td>${new Date().toLocaleDateString()}</td>
    <td><button onclick="addListing('${platform}')">Add</button></td>
  `;
  listingsTable.appendChild(row);
});

function addListing(platform) {
  const listingPrice = parseFloat(document.getElementById(`${platform}-listing-price`).value);
  const soldPrice = parseFloat(document.getElementById(`${platform}-sold-price`).value);

  if (!isNaN(listingPrice) && !isNaN(soldPrice)) {
    userListings.push({ platform, listingPrice, soldPrice, date: new Date().toLocaleDateString() });
    calculateMetrics();
  }
}

// Calculate metrics (average, median, etc.)
function calculateMetrics() {
  const listingPrices = userListings.map(l => l.listingPrice);
  const soldPrices = userListings.map(l => l.soldPrice);

  const avg = arr => arr.reduce((a, b) => a + b, 0) / arr.length;
  
  metrics.averageListingPrice = avg(listingPrices) || 0;
  metrics.averageSoldPrice = avg(soldPrices) || 0;
  
  updateMetrics();
  updateSuggestedPrice();
}

function updateMetrics() {
  const metricsTable = document.getElementById('metricsTable');
  metricsTable.innerHTML = `
    <tr><td>Average Listing Price</td><td>$${metrics.averageListingPrice.toFixed(2)}</td></tr>
    <tr><td>Average Sold Price</td><td>$${metrics.averageSoldPrice.toFixed(2)}</td></tr>
  `;
}

function updateSuggestedPrice() {
  const suggestedPrice = (metrics.averageListingPrice + metrics.averageSoldPrice) / 2;
  document.getElementById('calculatedPrice').textContent = `$${suggestedPrice.toFixed(2)}`;
}
