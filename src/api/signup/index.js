import getHeaders from 'api/utils/jsonHeaders';
import * as url from 'api/urls/signup';

export function fetchSignupInfo() {
  try {
    const headers = getHeaders();
    return fetch(url.getInfo, {
      method: 'GET',
      headers,
    }).then(
      response => response.json(),
      err => console.log('api Error', err),
    );
  } catch (error) {
    return console.log('system error', error);
  }
}

export function createBrand(inputValues) {
  try {
    const headers = getHeaders();
    console.log('create', inputValues);
    return fetch(url.createBrand, {
      method: 'POST',
      headers,
      body: JSON.stringify(inputValues),
    }).then(
      response => (response.json()),
      error => console.log('api Error', error),
    );
  } catch (error) {
    return console.log('api Error', error);
  }
}
