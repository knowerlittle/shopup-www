const { API_URL } = process.env;

const auth = `${API_URL}/auth`;
const signin = `${API_URL}/signin`;

module.exports = {
  auth,
  signin,
};
