import getHeaders from 'api/utils/jsonHeaders';
import * as url from 'api/urls/auth';

export function fetchLogin({
  body,
}) {
  try {
    const headers = getHeaders();
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

export function fetchSignin() {
  try {
    const headers = getHeaders();
    return fetch(url.signin, {
      get: 'POST',
      headers,
    }).then(
      response => (response.json()),
      error => console.log('api Error', error),
    );
  } catch (error) {
    return console.log('api Error', error);
  }
}
