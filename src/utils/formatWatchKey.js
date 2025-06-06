export default function formatWatchKey(brand, model, reference) {
  if (!brand || !model) return null;
  return `${brand}-${model}-${reference || 'all'}`;
}
