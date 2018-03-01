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
      const key = Object.keys(action.payload)[0];
      const value = Object.values(action.payload)[0];
      const inputValue = Object.assign({}, state.inputValue, { [key]: value });
      return {
        ...state,
        inputValue,
      };
    }
    default:
      return state;
  }
};

export default signup;
