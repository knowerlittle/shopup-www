const createJsonProfile = ({ profile, provider }) => {
  const userProfile = Object.assign(profile, { provider });
  return JSON.stringify(userProfile);
};

module.exports = createJsonProfile;
