import * as auth from 'api/auth';
// import * as signup from 'api/signup';
import createJsonProfile from 'components/SocialSignin/createJsonProfile';
import setTokenToLocalStorage from 'components/SocialSignin/setTokenToLocalStorage';
import { createBrand } from 'action/auth';

const NEW = 'new';
const BRAND = 'brand';
const SPACE = 'space';
const HOMEPAGE = '/';
const SIGNUP_PAGE = '/signup';
const SIGNIN_PAGE = '/signin';
const BRAND_PROFILE_PAGE = '/brand/profile';
const SPACE_PROFILE_PAGE = '/space/profile';
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

const handleNextCall = async (path, inputValue, dispatch) => {
  switch (path) {
    case SIGNIN_PAGE:
      return fetchSignin();
    case BRAND_ONBOARDING_SIGNIN_AFTER:
    case BRAND_ONBOARDING_SIGNIN_BEFORE:
      await fetchSignin(dispatch(createBrand(inputValue)));
      return BRAND_ONBOARDING_NEXT;
    case SPACE_ONBOARDING_SIGNIN:
      // dispatch(acreateSpace(inputValues))
      return SPACE_ONBOARDING_NEXT;
    default:
      return HOMEPAGE;
  }
};

export const nextCallAndPush = async (routerPush, path, inputValue, dispatch) => {
  const goToNextPath = await handleNextCall(path, inputValue, dispatch);
  routerPush(goToNextPath);
};

export const handleSocialLoginSuccess = (
  routerPush,
  path,
  inputValue,
  dispatch,
) => async (user) => {
  const body = createJsonProfile(user);
  const authResponse = await auth.fetchLogin({ body });
  await setTokenToLocalStorage(authResponse);
  await nextCallAndPush(routerPush, path, inputValue, dispatch);
};
