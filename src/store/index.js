import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import auth from 'reducers/auth';
import signupInfo from 'reducers/signup';

const reducer = combineReducers({
  auth,
  signupInfo,
});

export default createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk)),
);
