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
      error => console.log('api Error', error),
    );
  } catch (error) {
    return console.log('system error', error);
  }
}

export default fetchLogin;
