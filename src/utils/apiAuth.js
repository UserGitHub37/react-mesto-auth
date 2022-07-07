class ApiAuth {
  constructor (options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _checkPromise(res) {
    if (res.ok) {
      return res.json();
    }

  return Promise.reject(`Ошибка: ${res.status}`);
  }

  register(data) {
    return fetch(`${this._baseUrl}/signup`, {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify(data)
    }).then(this._checkPromise);
  }

  authorize(data) {
    return fetch(`${this._baseUrl}/signin`, {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify(data)
    }).then(this._checkPromise);
  }

  checkToken(token) {
    return fetch(`${this._baseUrl}/users/me`, {
        method: 'GET',
        headers: {...this._headers, "Authorization" : `Bearer ${token}`}
    }).then(this._checkPromise);
  }

}

const apiAuth = new ApiAuth({
  baseUrl: 'https://auth.nomoreparties.co',
  headers: {
    'Content-Type': 'application/json',
  }
});

export default apiAuth;
