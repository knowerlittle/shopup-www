import headers from 'api/utils/jsonHeaders';
import * as url from 'api/urls/auth';

function fetchLogin({
  body,
}) {
  try {
    return fetch(url.auth, {
      method: 'POST',
      headers,
      body,
    }).then(
      response => (response),
      err => console.log('api Error', err),
    );
  } catch (error) {
    return console.log('err', error);
  }
}

export default fetchLogin;
