import getHeaders from 'api/utils/jsonHeaders';
import * as url from 'api/urls/auth';

export function fetchLogin({
  body,
}) {
  try {
    const headers = getHeaders();
    console.log('h1', headers);
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
    console.log('h2', headers);

    return fetch(url.signin, {
      method: 'POST',
      headers,
      body: {},
    }).then(
      response => (response),
      error => console.log('api Error', error),
    );
  } catch (error) {
    return console.log('api Error', error);
  }
}
