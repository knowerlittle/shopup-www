import fetchSignupInfo from 'api/signup';

export const fetchSignupData = dispatch => (
  fetchSignupInfo().then(response => (
    dispatch({
      type: 'FETCH_SIGNUP_INFO',
      payload: response,
    })
  ))
);

export const setSignupJourney = journey => dispatch => (
  dispatch({
    type: 'SET_SIGNUP_JOURNEY',
    payload: journey,
  })
);

