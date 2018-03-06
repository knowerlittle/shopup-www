const initState = {
  user: {
    givenName: '',
    familyName: '',
    email: '',
    brand: '',
  },
  brand: {
    name: '',
    description: '',
  },
};

const auth = (state = initState, action) => {
  switch (action.type) {
    case 'STORE_BRAND_USER':
      return {
        ...state,
        user: action.payload.user,
        brand: action.payload.brand,
      };
    default:
      return state;
  }
};

export default auth;
