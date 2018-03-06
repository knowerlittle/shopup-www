
function getHeaders() {
  const token = localStorage.getItem('popinToken');
  const headers = {
    Accept: 'application/json, text/plain, */*',
    'Content-Type': 'application/json',
  };

  const headersWithToken = Object.assign({}, headers, { Authorization: `Bearer ${token}` });

  return token ? headersWithToken : headers;
}

export default getHeaders;
