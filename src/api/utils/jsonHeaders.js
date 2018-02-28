const token = localStorage.getItem('popinToken');

const headers = {
  Accept: 'application/json, text/plain, */*',
  'Content-Type': 'application/json',
};

const headersWithToken = Object.assign({}, headers, { Authorization: `Bearer ${token}` });

const jsonHeaders = token ? headersWithToken : headers;

export default jsonHeaders;
