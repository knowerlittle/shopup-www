const setTokenToLocalStorage = async (response) => {
  const { token } = await response.json();
  localStorage.setItem('popinToken', token);
};

export default setTokenToLocalStorage;
