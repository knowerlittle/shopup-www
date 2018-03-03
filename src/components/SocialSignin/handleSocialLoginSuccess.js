import * as auth from 'api/auth';
import * as signup from 'api/signup';
import createJsonProfile from 'components/SocialSignin/createJsonProfile';

const setTokenToLocalStorage = async (response) => {
  const { token } = await response.json();
  console.log('token', token);
  localStorage.setItem('popinToken', token);
};

// const goToNext = (path) => {
//   switch (path) {
//     case '/signin':
//       return '/signup';
//     case '/onboard/brand/signin':
//       return;
//     default:
//       return '/signup';
//   }
// };


const handleNextCall = async (path, inputValues) => {
  switch (path) {
    case '/onboard/brand/signin':
      console.log('createBrand', path, inputValues);
      await signup.createBrand(inputValues);
      return '/onboard/brand/6';
    case '/onboard/space/signin':
      await signup.createBrand(inputValues);
      return '/onboard/space/6';
    default:
      return '/';
  }
};

const handleSocialLoginSuccess = (routerPush, path, inputValues) => async (user) => {
  const nextPath = (type) => { // eslint-disable-line no-unused-vars
    console.log('nextpath', type);
    switch (type) {
      case 'new':
        return '/signup';
      case 'brand':
        return '/profile/brand';
      case 'space':
        return '/profile/space';
      default:
        return '/';
    }
  };
  console.log('inputValues', inputValues, 'path', path);
  const body = createJsonProfile(user);
  const authResponse = await auth.fetchLogin({ body });
  await setTokenToLocalStorage(authResponse);
  if (inputValues === false) {
    console.log('here', inputValues);
    const signinResponse = await auth.fetchSignin();
    const { type } = signinResponse;
    const next = nextPath(type);
    routerPush(next);
  } else {
    const goToNextPath = await handleNextCall(path, inputValues);
    routerPush(goToNextPath);
  }
  // console.log('next', nextPath);
};

export default handleSocialLoginSuccess;
