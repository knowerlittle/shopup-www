import * as auth from 'api/auth';
import * as signup from 'api/signup';

export const fetchLogin = ({ body }) => (dispatch, push) => {
  const authResponse = await auth.fetchLogin({ body })
  
};