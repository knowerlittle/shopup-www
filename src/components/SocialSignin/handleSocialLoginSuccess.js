import * as auth from 'api/auth';
import * as signup from 'api/signup';
import createJsonProfile from 'components/SocialSignin/createJsonProfile';
import setTokenToLocalStorage from 'components/SocialSignin/setTokenToLocalStorage';

const NEW = 'new';
const BRAND = 'brand';
const SPACE = 'space';
const HOMEPAGE = '/';
const SIGNUP_PAGE = '/signup';
const SIGNIN_PAGE = '/signin';
const BRAND_PROFILE_PAGE = '/profile/brand';
const SPACE_PROFILE_PAGE = '/profile/brand';
const BRAND_ONBOARDING_SIGNIN_BEFORE = '/onboard/brand/5';
const BRAND_ONBOARDING_SIGNIN_AFTER = '/onboard/brand/signin';
const SPACE_ONBOARDING_SIGNIN = '/onboard/space/signin';
const BRAND_ONBOARDING_NEXT = '/onboard/brand/6';
const SPACE_ONBOARDING_NEXT = '/onboard/space/6';

const nextPage = (type) => {
  switch (type) {
    case NEW:
      return SIGNUP_PAGE;
    case BRAND:
      return BRAND_PROFILE_PAGE;
    case SPACE:
      return SPACE_PROFILE_PAGE;
    default:
      return HOMEPAGE;
  }
};

const fetchSignin = async () => {
  const signinResponse = await auth.fetchSignin();
  const { type: userType } = signinResponse;
  return nextPage(userType);
};

const createBrand = async (inputValues) => {
  await signup.createBrand(inputValues);
  return BRAND_ONBOARDING_NEXT;
};

const createSpace = async (inputValues) => {
  await signup.createBrand(inputValues);
  return SPACE_ONBOARDING_NEXT;
};

const handleNextCall = async (path, inputValues) => {
  switch (path) {
    case SIGNIN_PAGE:
      return fetchSignin();
    case BRAND_ONBOARDING_SIGNIN_AFTER:
    case BRAND_ONBOARDING_SIGNIN_BEFORE:
      return createBrand(inputValues);
    case SPACE_ONBOARDING_SIGNIN:
      return createSpace(inputValues);
    default:
      return HOMEPAGE;
  }
};

export const nextCallAndPush = async (routerPush, path, inputValues) => {
  console.log('hi', routerPush, 'path', path, 'in', inputValues);
  const goToNextPath = await handleNextCall(path, inputValues);
  routerPush(goToNextPath);
};

export const handleSocialLoginSuccess = (routerPush, path, inputValues) => async (user) => {
  const body = createJsonProfile(user);
  const authResponse = await auth.fetchLogin({ body });
  await setTokenToLocalStorage(authResponse);
  await nextCallAndPush(routerPush, path, inputValues);
};
