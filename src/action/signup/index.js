import fetchSignupInfo from 'api/signup';

const fetchSignupData = (dispatch) => {
  fetchSignupInfo().then((response) => {
    console.log('r', response);
    dispatch({
      type: 'FETCH_SIGNUP_INFO',
      payload: response,
    });
  });
};

export default fetchSignupData;
