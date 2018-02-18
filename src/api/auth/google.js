import jsonHeaders from 'api/utils/jsonHeaders';
import createJsonProfile from 'api/utils/createJsonProfile';
import fetchLogin from 'api/utils/fetchLogin';

const AUTH_GOOGLE_URL = 'http://localhost:8000/auth/google';

const handleGoogleLogin = (user) => {
  const jsonProfile = createJsonProfile(user);
  const requestObject = {
    path: AUTH_GOOGLE_URL,
    method: 'POST',
    headers: jsonHeaders,
    body: jsonProfile,
  };
  fetchLogin(requestObject);
};

export default handleGoogleLogin;
