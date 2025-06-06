import formatWatchKey from './formatWatchKey';

export default function calculateMetrics(listings, brand, model, reference) {
  const currentWatchKey = formatWatchKey(brand, model, reference);
  if (!currentWatchKey) {
    return {
      averageListingPrice: 0,
      averageSoldPrice: 0,
      medianListingPrice: 0,
      medianSoldPrice: 0,
      totalListings: 0,
      profitMargin: 0,
    };
  }

  const currentWatchListings = listings.filter(
    (listing) => formatWatchKey(listing.brand, listing.model, listing.reference) === currentWatchKey
  );

  if (currentWatchListings.length === 0) {
    return {
      averageListingPrice: 0,
      averageSoldPrice: 0,
      medianListingPrice: 0,
      medianSoldPrice: 0,
      totalListings: 0,
      profitMargin: 0,
    };
  }

  const listingPrices = currentWatchListings.map((l) => l.listingPrice).filter((p) => p > 0);
  const soldPrices = currentWatchListings.map((l) => l.soldPrice).filter((p) => p > 0);

  const avg = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;
  const median = (arr) => {
    const sorted = [...arr].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    return sorted.length % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
  };

  const avgListing = avg(listingPrices) || 0;
  const avgSold = avg(soldPrices) || 0;

  return {
    averageListingPrice: avgListing,
    averageSoldPrice: avgSold,
    medianListingPrice: median(listingPrices) || 0,
    medianSoldPrice: median(soldPrices) || 0,
    totalListings: currentWatchListings.length,
    profitMargin: avgSold > 0 ? ((avgSold - avgListing) / avgListing) * 100 : 0,
  };
}
