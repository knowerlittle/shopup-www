import jsonHeaders from 'api/utils/jsonHeaders';
import createJsonProfile from 'api/utils/createJsonProfile';
import fetchLogin from 'api/utils/fetchLogin';
import * as url from 'api/urls/auth';

const setTokenToLocalStorage = async (response) => {
  const { token } = await response.json();
  console.log('token', token);
  localStorage.setItem('popinToken', token);
};

const handleSocialLoginSuccess = routerPush => async (user) => {
  const jsonProfile = createJsonProfile(user);
  const requestObject = {
    path: url.auth,
    method: 'POST',
    headers: jsonHeaders,
    body: jsonProfile,
  };
  const response = await fetchLogin(requestObject);
  setTokenToLocalStorage(response);
  routerPush('/signup');
};

export default handleSocialLoginSuccess;
