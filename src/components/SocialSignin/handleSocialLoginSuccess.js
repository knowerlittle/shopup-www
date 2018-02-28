import fetchLogin from 'api/auth/fetchLogin';
import createJsonProfile from 'components/SocialSignin/createJsonProfile';

const setTokenToLocalStorage = async (response) => {
  const { token } = await response.json();
  console.log('token', token);
  localStorage.setItem('popinToken', token);
};

const handleSocialLoginSuccess = routerPush => async (user) => {
  const body = createJsonProfile(user);
  const response = await fetchLogin({ body });
  setTokenToLocalStorage(response);
  routerPush('/signup');
};

export default handleSocialLoginSuccess;
