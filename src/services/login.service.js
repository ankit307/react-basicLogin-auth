
import {auth} from './../util/auth'
const apiUrl=''
function login(username,password){
     const  requestOptions={
         method:'POST',
         headers:{ 'Content-Type':'application/json'},
         body: JSON.stringify({ username,password})
     }
     return fetch(`${apiUrl}/users/authenticate`, requestOptions)
     .then(handleResponse)
     .then(user => {
         // login successful if there's a user in the response
         if (user) {
             user.token = window.btoa(username + ':' + password);
             localStorage.setItem('user', JSON.stringify(user));
         }
         return user;
     });
    }

    
function handleResponse(response) {
    return response.text().then(text => {
        console.log(text)
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
            //    location.reload(true);
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}
function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: auth()
    };
    return fetch(`${apiUrl}/users`, requestOptions).then(handleResponse);
}

export const authService = {
    login,
    logout,
    getAll
};