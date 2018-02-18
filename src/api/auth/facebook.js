import jsonHeaders from 'api/utils/jsonHeaders';
import createJsonProfile from 'api/utils/createJsonProfile';
import fetchLogin from 'api/utils/fetchLogin';
import { FACEBOOK } from 'api/urls/auth';

const handleFacebookLogin = (user) => {
  const jsonProfile = createJsonProfile(user);
  const requestObject = {
    path: FACEBOOK,
    method: 'POST',
    headers: jsonHeaders,
    body: jsonProfile,
  };
  fetchLogin(requestObject);
};

export default handleFacebookLogin;
