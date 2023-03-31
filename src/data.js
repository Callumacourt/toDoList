export default function saveToLocalStorage(key, item) {
  localStorage.setItem(key, JSON.stringify(item));
}

export function removeFromLocalStorage(key) {
  localStorage.removeItem(key);
}
