import headers from 'api/utils/jsonHeaders';
import * as url from 'api/urls/signup';

async function fetchSignupInfo() {
  try {
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

export default fetchSignupInfo;
