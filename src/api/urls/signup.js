const { API_URL } = process.env;

const getInfo = `${API_URL}/signup`;
const createBrand = `${API_URL}/brand`;

module.exports = {
  getInfo,
  createBrand,
};
