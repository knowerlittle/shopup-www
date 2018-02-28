import headers from 'api/utils/jsonHeaders';
import * as url from 'api/urls/signup';

function fetchSignupInfo() {
  try {
    return fetch(url.getInfo, {
      method: 'GET',
      headers,
    }).then(
      response => (response),
      err => console.log('api Error', err),
    );
  } catch (error) {
    return console.log('system error', error);
  }
}

export default fetchSignupInfo;
