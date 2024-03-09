import {Navigate} from 'react-router-dom';

export function getAuthInfo() {
    const authInfo = localStorage.getItem('auth');
    return authInfo ? JSON.parse(authInfo) : authInfo;
}

export function getUserInfo() {
    return JSON.parse(localStorage.getItem('userInfo'));
}

export function getApiToken() {
    return JSON.parse(localStorage.getItem('apiToken'));
}

export function isAuthenticated() {
    return localStorage.getItem('authorized') !== null;
}

// export function redirectToLogin() {
//     return <Navigate to='/' replace/>
// }

// export function redirectToDashboard() {
//     return <Navigate to='/my'/>
// }
//
// export function redirectToHome() {
//     return <Navigate to='/home'/>
// }