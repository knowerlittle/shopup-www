import jsonHeaders from 'api/utils/jsonHeaders';
import createJsonProfile from 'api/utils/createJsonProfile';
import fetchLogin from 'api/utils/fetchLogin';
import { GOOGLE } from 'api/urls/auth';

const handleGoogleLogin = (user) => {
  const jsonProfile = createJsonProfile(user);
  const requestObject = {
    path: GOOGLE,
    method: 'POST',
    headers: jsonHeaders,
    body: jsonProfile,
  };
  fetchLogin(requestObject);
};

export default handleGoogleLogin;
