const { API_URL } = process.env;

const FACEBOOK = `${API_URL}/auth/facebook`;
const GOOGLE = `${API_URL}/auth/google`;

module.exports = {
  FACEBOOK,
  GOOGLE,
};
