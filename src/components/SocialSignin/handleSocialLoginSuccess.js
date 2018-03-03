import * as api from 'api/auth';
import createJsonProfile from 'components/SocialSignin/createJsonProfile';

const setTokenToLocalStorage = async (response) => {
  const { token } = await response.json();
  console.log('token', token);
  localStorage.setItem('popinToken', token);
};

const handleSocialLoginSuccess = (routerPush, path) => async (user) => {
  const body = createJsonProfile(user);
  const authResponse = await api.fetchLogin({ body });
  await setTokenToLocalStorage(authResponse);
  const signinResponse = await api.fetchSignin();

  console.log('siginR', signinResponse, 'c', path);
  routerPush('/signup');
};

export default handleSocialLoginSuccess;
