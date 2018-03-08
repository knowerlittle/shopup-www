const initState = {
  all: [],
};

const space = (state = initState, { type, payload }) => {
  switch (type) {
    case 'FETCH_ALL_SPACES':
      return {
        ...state,
        all: payload,
      };
    default:
      return state;
  }
};

export default space;
