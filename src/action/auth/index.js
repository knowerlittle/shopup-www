import * as auth from 'api/auth';
import * as signup from 'api/signup';

export const createBrand = inputValue => dispatch => (
  signup.createBrand(inputValue).then(response => (
    dispatch({
      type: 'STORE_BRAND_USER',
      payload: response,
    })
  ))
);

export const fetchBrandUser = dispatch => (
  auth.fetchSignin().then(response => (
    dispatch({
      type: 'STORE_BRAND_USER',
      payload: response,
    })
  ))
);

export const lol = () => ({});
