function fetchLogin({
  path,
  method,
  headers,
  body,
}) {
  try {
    return fetch(path, { method, headers, body }).then(
      response => (response),
      err => console.log('api Error', err),
    );
  } catch (error) {
    return console.log('err', error);
  }
}

export default fetchLogin;
