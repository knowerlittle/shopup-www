import jsonHeaders from 'api/utils/jsonHeaders';
import createJsonProfile from 'api/utils/createJsonProfile';
import fetchLogin from 'api/utils/fetchLogin';

const AUTH_FACEBOOK_URL = 'http://localhost:8000/auth/facebook';

const handleFacebookLogin = (user) => {
  const jsonProfile = createJsonProfile(user);
  const requestObject = {
    path: AUTH_FACEBOOK_URL,
    method: 'POST',
    headers: jsonHeaders,
    body: jsonProfile,
  };
  fetchLogin(requestObject);
};

export default handleFacebookLogin;
