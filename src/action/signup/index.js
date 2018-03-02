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

export const addDataToSignup = ({ name, value }) => (dispatch) => {
  dispatch({
    type: 'ADD_DATA_TO_SIGNUP',
    payload: { [name]: value },
  });
};

export const addCategory = id => (dispatch) => {
  console.log('Add cat', id);
  dispatch({
    type: 'ADD_CATEGORY',
    payload: { id },
  });
};

export const removeCategory = id => (dispatch) => {
  console.log('Remove cat', id);
  dispatch({
    type: 'REMOVE_CATEGORY',
    payload: { id },
  });
};

export const addDemography = id => (dispatch) => {
  console.log('Add demo', id);
  dispatch({
    type: 'ADD_DEMOGRAPHY',
    payload: { id },
  });
};

export const removeDemography = id => (dispatch) => {
  console.log('Remove demo', id);
  dispatch({
    type: 'REMOVE_DEMOGRAPHY',
    payload: { id },
  });
};
