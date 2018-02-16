import jsonHeaders from 'api/utils';

const FACEBOOK_URL = 'http://localhost:3000/auth/facebook';

const fetchFacebookLogin = (body) => {
  fetch(FACEBOOK_URL, {
    method: 'POST',
    headers: jsonHeaders,
    body,
  })
    .then(res => res.json())
    .then((data) => {
      console.log('fetchFacebookLogin', data);
    })
    .catch(err => console.log('err', err));
};

const createJsonProfile = (user) => {
  const profile = Object.assign(user.profile, { provider: user.provider });
  console.log('profile', profile);
  return JSON.stringify(profile);
};

const handleFacebookLogin = (user) => {
  const jsonProfile = createJsonProfile(user);
  fetchFacebookLogin(jsonProfile);
};

export default handleFacebookLogin;
