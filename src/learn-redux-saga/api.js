export function getUser (keyword) {
  return fetch('http://api.github.com/users/' + keyword)
    .then(response => response.json())
    .then(response => response, error => error)
}
