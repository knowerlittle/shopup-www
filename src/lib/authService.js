const baseUrl = process.env.REACT_APP_BASE_URL


export const getFacebookAuth = (name) => {
  return fetch(baseUrl, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
}
