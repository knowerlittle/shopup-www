import jsonHeaders from 'api/utils/jsonHeaders';
import createJsonProfile from 'api/utils/createJsonProfile';
import fetchLogin from 'api/utils/fetchLogin';
import * as url from 'api/urls/auth';

const handleSocialLoginSuccess = (user) => {
  const jsonProfile = createJsonProfile(user);
  const requestObject = {
    path: url.auth,
    method: 'POST',
    headers: jsonHeaders,
    body: jsonProfile,
  };
  fetchLogin(requestObject);
};

export default handleSocialLoginSuccess;
