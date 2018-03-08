const { API_URL } = process.env;

const spaces = `${API_URL}/spaces`;
const findById = id => `${spaces}/${id}`;

module.exports = {
  spaces,
  findById,
};
