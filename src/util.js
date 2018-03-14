const Util = {}
const urlEncode = data => {
  if (!data) {
    return ''
  }
  return Object.keys(data).map(key => encodeURI(key + '=' + data[key])).join('&')
}
export const http = Util.http = {}
export const createHttp = Util.createHttp = cfg => {
  const headers = new Headers()
  headers.set('X-Parse-Application-Id', 'k123456')
  headers.set('X-Parse-REST-API-Key', 'k123456')
  headers.set('X-Parse-Revocable-Session', '1')
  headers.set('Content-Type', 'application/json')
  const baseURL = cfg.baseURL || ''
  Util.http.setHeader = (k, v) => {
    headers.set(k, v)
  }
  Util.http.post = (url, body = {}) => {
    return fetch(baseURL + url, {
      method: 'POST',
      headers,
      body: JSON.stringify(body)
    }).then(res => res.json())
  }
  Util.http.get = (url, data) => {
    return fetch(baseURL + url + '?' + urlEncode(data), {
      method: 'GET',
      headers
    }).then(res => res.json())
  }
  Util.http.delete = (url, body = {}) => {
    return fetch(baseURL + url, {
      method: 'DELETE',
      headers,
      body: JSON.stringify(body)
    })
  }
  Util.http.put = (url, body = {}) => {
    return fetch(baseURL + url, {
      method: 'PUT',
      headers,
      body: JSON.stringify(body)
    })
  }
  return Util.http
}

export default Util
