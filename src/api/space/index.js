import getHeaders from 'api/utils/jsonHeaders';
import * as url from 'api/urls/space';

export function getAll() {
  try {
    const headers = getHeaders();
    return fetch(url.spaces, {
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

export function findById(id) {
  try {
    const headers = getHeaders();
    return fetch(url.findById(id), {
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
