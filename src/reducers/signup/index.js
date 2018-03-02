const initState = {
  categories: [],
  demographics: [],
  inputValue: {
    name: '',
    description: [],
    categories: [],
    demographics: [],
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
    case 'ADD_CATEGORY': {
      const inputValue = Object.assign({}, state.inputValue);
      inputValue.categories.push(action.payload.id);
      return {
        ...state,
        inputValue,
      };
    }
    case 'REMOVE_CATEGORY': {
      const inputValue = Object.assign({}, state.inputValue);
      inputValue.categories = inputValue.categories.filter(id => id !== action.payload.id);
      return {
        ...state,
        inputValue,
      };
    }
    case 'ADD_DEMOGRAPHY': {
      const inputValue = Object.assign({}, state.inputValue);
      inputValue.demographics.push(action.payload.id);
      return {
        ...state,
        inputValue,
      };
    }
    case 'REMOVE_DEMOGRAPHY': {
      const inputValue = Object.assign({}, state.inputValue);
      inputValue.demographics = inputValue.demographics.filter(id => id !== action.payload.id);
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
