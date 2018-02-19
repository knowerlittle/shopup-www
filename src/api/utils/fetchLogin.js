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
    .then((data) => {
      // To be removed
      console.log(`fetchLogin ${path}`, data);
    })
    .catch(err => console.log('err', err));
};

export default fetchLogin;
