export const authServices = {
    loginEmail,
    getAccessToken
};

const hostname = 'selftunnel.in:5000';

function loginEmail(email, password) {
    const requestOptions = {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "omit",
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify({
            "email": email,
            "password": password
        })
    };

    return fetch(`http://${hostname}/auth/login`, requestOptions)
        .then(handleResponse)
}

function getAccessToken(refreshToken) {
    const requestOptions = {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "omit",
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify({
            "refreshToken": refreshToken
        })
    };

    return fetch(`http://${hostname}/auth/getAccessToken`, requestOptions)
        .then(handleResponse)
}

function handleResponse(response) {
    console.log(response, typeof(response));
    return response.json().then(json => {
        if (!response.ok) {
            if (response.status === 403) {
                console.log("403")
                localStorage.removeItem('user')
                window.location.reload(true);
            }

            const error = (json && json.message) || response.statusText;
            return Promise.reject(error);
        }
        return json;
    });
}