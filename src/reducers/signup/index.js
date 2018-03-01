const initState = {
  categories: [],
  demographics: [],
};

const signup = (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_SIGNUP_INFO':
      return {
        ...state,
        categories: action.payload.categories,
        demographics: action.payload.demographics,
      };
    default:
      return state;
  }
};

export default signup;
