const fetchLogin = ({
  path,
  method,
  headers,
  body,
}) => {
  fetch(path, {
    method,
    headers,
    body,
  })
    .then(res => res.json())
    .catch(err => console.log('err', err));
};

export default fetchLogin;
