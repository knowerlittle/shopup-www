const initState = {
  categories: [],
  demographics: [],
  inputValue: {
    name: '',
    description: [],
  },
};


const signup = (state = initState, action) => {
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
      const inputValue = Object.assign({}, state.inputValue, action.payload);
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
