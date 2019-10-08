export const deviceServices = {
    getDevices,
};

const hostname = 'selftunnel.in:5000';

function getDevices(accessToken) {
    const requestOptions = {
        method: "GET",
        mode: 'cors',
        headers: {
            "Authorization": accessToken,
            "Content-Type": "application/json; charset=utf-8",
            "Access-Control-Allow-Origin": "*"
        },
        body: null
    };

    return fetch(`http://${hostname}/device/get`, requestOptions)
        .then(handleResponse)
}

function handleResponse(response) {
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