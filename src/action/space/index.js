import * as api from 'api/space';

export const getAllSpaces = dispatch => (
  api.getAll().then(response => (
    dispatch({
      type: 'FETCH_ALL_SPACES',
      payload: response.spaces,
    })
  ))
);

export const hi = 'hi';
