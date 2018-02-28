const fetchLogin = ({
  path,
  method,
  headers,
  body,
}) => {
  try {
    fetch(path, { method, headers, body }).then(async (res) => {
      const { token } = await res.json();
      console.log('t', token);
      localStorage.setItem('popinToken', token);
    }, (err) => {
      console.log(`api error ${err}`);
    });
  } catch (err) {
    console.log(`system error ${err}`);
  }
};

export default fetchLogin;
