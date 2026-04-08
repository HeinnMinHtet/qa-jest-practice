function login(username, password) {
    if (username === 'admin' && password === '12345') {
        return true;
    }
    return false;
}

module.exports = login;