const key = 'userInfo'
function settoken (token) {
  window.localStorage.setItem(key, JSON.stringify(token))
}
function gettoken () {
  window.localStorage.getItem(key)
}
function removetoken () {
  window.localStorage.removeItem(key)
}

export {
  settoken,
  gettoken,
  removetoken
}
