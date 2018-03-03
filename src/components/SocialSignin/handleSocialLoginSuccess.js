import * as api from 'api/auth';
import createJsonProfile from 'components/SocialSignin/createJsonProfile';

const setTokenToLocalStorage = async (response) => {
  const { token } = await response.json();
  console.log('token', token);
  localStorage.setItem('popinToken', token);
};

const goToNext = (path) => {
  switch (path) {
    case '/signin':
      return '/signup';
    case '/onboard/brand/signin':
      return '/onboard/brand/6';
    default:
      return '/signup';
  }
};

const nextPath = (type, path) => {
  switch (type) {
    case 'new':
      return goToNext(path);
    case 'brand':
      return '/profile/brand';
    case 'space':
      return '/profile/space';
    default:
      return '/';
  }
};

const handleSocialLoginSuccess = (routerPush, path) => async (user) => {
  const body = createJsonProfile(user);
  const authResponse = await api.fetchLogin({ body });
  await setTokenToLocalStorage(authResponse);
  const signinResponse = await api.fetchSignin();
  const { type } = signinResponse;
  const next = nextPath(type, path);
  console.log('siginR', signinResponse, 'c', path);
  routerPush(next);
};

export default handleSocialLoginSuccess;
