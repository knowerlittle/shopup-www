const signup = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_SIGNUP_INFO':
      return {
        ...state,
        categories: action.payload.categories,
        demographics: action.payload.demographics,
      };
    case 'SET_SIGNUP_JOURNEY':
      return {
        ...state,
        journey: action.payload,
      };
    case 'ADD_DATA_TO_SIGNUP': {
      console.log('a', action.payload);
      return {
        ...state,
        inputValues: action.payload,
      };
    }
    default:
      return state;
  }
};

export default signup;
