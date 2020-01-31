export function fetch(delay) {
  return new Promise(resolve => setTimeout(resolve, delay));
}
