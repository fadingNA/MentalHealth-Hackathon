import jwt_decode from 'jwt-decode';

export function setToken(token: string) {
    localStorage.setItem('access_token', token);
}
export function removeToken() {
    localStorage.removeItem('access_token');
}
export function getToken() {
    try {
        return localStorage.getItem('access_token');
    } catch (err) {
        return null;
    }
}
export function readToken() {
    try {
        const token = getToken();
        return token ? jwt_decode(token) : null;
    } catch (err) {
        return null;
    }
}
